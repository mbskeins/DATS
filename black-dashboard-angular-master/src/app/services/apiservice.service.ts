import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  getUsers(headers: HttpHeaders): Observable<any> {
    // return values for typescipt funcs 
    var profiles;
    console.log("service layer");
    var url = "http://127.0.0.1:8000/api/v1/userProfiles";
    return this.http.get(url, {headers: headers});
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

  createEvent(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/events/";
    console.log("at api service");
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  getEvents(){
    var events;
    var url = "http://127.0.0.1:8000/api/v1/events/";
    console.log(this.http.get(url).subscribe(data => {
      events = data;
      console.log(events);
    }));
  }

  addAttendences(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/attendences/";
    console.log("at api service");
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
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
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  addGroups(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/groups/";
    console.log("at api service");
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  createSchool(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/schools";
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));

  }

  createSquadron(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/squadrons/";
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));
  }

  createWing(payload: any){
    var url = "http://127.0.0.1:8000/api/v1/wings/";
    console.log(this.http.post(url, payload).subscribe(data => console.log(data)));

  }

}