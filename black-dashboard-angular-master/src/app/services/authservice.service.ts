import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl: string

  constructor(private http: HttpClient) { 
    this.baseUrl = "http://127.0.0.1:8000/";
  }

  getUser(): Observable<User>{
    return new Observable((observer) => {
      var userString = window.sessionStorage.getItem('user');
      var user = JSON.parse(userString);
      if(user == null){      
        observer.error("Not logged in.");
      } else if(user.expirationTimeInUtc <= new Date().getTime()){
        this.logout().subscribe(data => {
          observer.error("Session has expired. Logged user out.");
        }, error => observer.error("Session has expired. Logged user out."))
      }else {
        observer.next(user);
      }
    });
  }

  login(username: string, password: string): Observable<any>{
    return new Observable((observer) => {  
      var loginUrl = this.baseUrl + "auth/v1/login";
      var loginPayload = {
        "username": username,
        "password": password
      }
      this.http.post(loginUrl, loginPayload).subscribe(
        (data: any) => {
          var token = this.getDecodedAccessToken(data.token);
          if(token != null){
            var user = new User(token.email, token.id, token.firstname, token.lastname, data.token, token.exp);
            this.getAllRoles(user.accessToken).subscribe((roles: string[]) => {
              user.roles = roles;
              this.setUser(user);
              observer.next();
            },
            (error: any) => {
              observer.error("Failed to get user's roles. Please try again. If the problem persists please contact system admin.");
            });
          } else {
            observer.error("Token failed to parse. Please try again. If the problem persists please contact system admin.");
          }
      },
      (error: any) => {
        observer.error("Invalid username or password. Please try again.");
      });
    }); 
  }

  logout(): Observable<any>{
    return new Observable((observer) => {  
      var headers = this.getAuthHeaders();
      var url = this.baseUrl + "auth/v1/logout";
      this.http.post<string[]>(url, {}, {headers: headers}).subscribe((data: any) => {
        window.sessionStorage.clear();
        observer.next();
      },
      error => {
        window.sessionStorage.clear();
        observer.next();
      });
    });
  }

  getAuthHeaders(): HttpHeaders {
    var user = this.getUser();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + user.accessToken
    })
  }

  private getAllRoles(accessToken: string): Observable<string[]>{
    var url = this.baseUrl + "auth/v1/getAllRoles";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + accessToken
    })
    return this.http.get<string[]>(url, {headers: headers} );
  }

  private getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  private setUser(user: User): void{
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }

//   createUser(payload: any) {
//     var url = "http://127.0.0.1:8000/auth/v1/register";
//     console.log("sent from service: ");
//     //console.log(payload);
//     console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
//   }

//   getUsers() {
//     // return values for typescipt funcs 
//     var profiles;
//     console.log("service layer");
//     var url = "http://127.0.0.1:8000/api/v1/userProfiles";
//     console.log(this.http.get(url).subscribe(data => {
//       profiles = data;
//       console.log(profiles);
//     }));
//   }

  resetPassword(payload: any){
    var url = "http://127.0.0.1:8000/auth/v1/resetPassword";
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));

  }

}