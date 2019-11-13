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

    // createUser(){
    //     return this.http.post(url, payload)
    // }
}