import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './authservice.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  createUser(payload: any) {
    var headers = this.authService.getAuthHeaders();

    var url = "http://127.0.0.1:8000/auth/v1/register";
    console.log("sent from service: ");
    //console.log(payload);
    console.log(this.http.post(url, payload, {headers: headers} ).subscribe(data => console.log(data)));
  }

  approveUser(payload: any){
    var url = "http://127.0.0.1:8000/auth/v1/approveAccount";
    console.log("sent from service: ");
    //console.log(payload);
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  getUsers(headers: HttpHeaders): Observable<any> {
    // return values for typescipt funcs 
    var profiles;
    console.log("service layer");
    var url = "http://127.0.0.1:8000/api/v1/userProfiles/";
    return this.http.get(url, {headers: headers});
  }

  createClass(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/classes/";
    console.log(payload);
    console.log("at api service");
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  createFlight(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/flights/";
    console.log(payload);
    console.log("at api service");
    var headers = this.authService.getAuthHeaders();

    console.log(this.http.post(url, payload, {headers: headers} ).subscribe(data => console.log(data)));
  }

  createEvent(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/events/";
    console.log("at api service");
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  getEvents(headers: HttpHeaders): Observable<any> {
    var events;
    var url = "http://127.0.0.1:8000/api/v1/events/";
    return this.http.get(url, {headers: headers});
  }

  addAttendences(payload: any){
    var headers = this.authService.getAuthHeaders();
    var url = "http://127.0.0.1:8000/api/v1/attendences/";
    console.log("at api service");
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  getAttendences(){
    var events;
    var url = "http://127.0.0.1:8000/api/v1/attendences/";
    console.log(this.http.get(url).subscribe(data => {
      events = data;
      console.log(events);
    }));
  }

  addCadre(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/cadres/";
    console.log("at api service");
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  addGroups(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/groups/";
    console.log("at api service");
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  createSchool(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/schools/";
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));

  }

  createSquadron(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/squadrons/";
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

  createWing(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/wings/";
    var headers = this.authService.getAuthHeaders();
    console.log(this.http.post(url, payload, {headers: headers}).subscribe(data => console.log(data)));
  }

}