import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getUser(){
  //     return this.http.get("put url in here");
  // }

  createUser(payload: any) {
    var url = "http://127.0.0.1:8000/auth/v1/register";
    console.log("sent from service: ");
    //console.log(payload);
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  getUsers() {
    // return values for typescipt funcs 
    var profiles;
    console.log("service layer");
    var url = "http://127.0.0.1:8000/api/v1/userProfiles";
    console.log(this.http.get(url).subscribe(data => {


      profiles = data;
      console.log(profiles);

    }));
  }

  createClass(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/classes/";
    console.log(payload);
    console.log("at api service");
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  createFlight(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/flights/";
    console.log(payload);
    console.log("at api service");
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

}