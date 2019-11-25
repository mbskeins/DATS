import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  addEmail(newEmail: string) {
    console.log("sent from component: ")
    console.log(newEmail);

    this.apiService.createUser(newEmail);
  }
  createUser(usernamecreateuser, passwordcreateuser, emailaddresscreateuser, phonenumbercreateuser, firstnamecreateuser, lastnamecreateuser, majorcreateuser, schoolcreateuser) {
    var payload = {
      username: usernamecreateuser,
      password: passwordcreateuser,
      email: emailaddresscreateuser,
      firstname: firstnamecreateuser,
      lastname: lastnamecreateuser,
      cellphone: phonenumbercreateuser,
      major: majorcreateuser,
      schoolId: 14
    }

    console.log(payload);

    // http.post("http://127.0.0.1:8000/auth/v1/register", payload)
    this.apiService.createUser(payload);
  }


  createClass(name) {
    var payload = {
      name: name,
      isArchived: false
    }
    this.apiService.createClass(payload);
  }


  createFlight(name, commanderID, vicecommanderID, squadronID) {
    var payload = {
      name: name,
      commander: commanderID,
      viceCommander: vicecommanderID,
      squadron: squadronID
    }
    this.apiService.createFlight(payload);

  }

  createEvent(dateTimeCreateEvent, nameCreateEvent, locationCreateEvent, ) {
    var payload = {
      dateTime: dateTimeCreateEvent,
      name: nameCreateEvent,
      location: locationCreateEvent,
      isLeadLab: false,
      isArchived: true
    }
    this.apiService.createEvent(payload);
  }

  createSchool(schoolName, location) {
    var payload = {
      "name": schoolName,
      "location": location,
      "isArchived": true
    }
    console.log(payload);
    this.apiService.createSchool(payload);

  }

  createSquadron(name, commander, deputy, group){
    var payload = {
        "name": name,
        "isArchived": true,
        "commander": commander,
        "deputyCommander": deputy,
        "group": group
    }
    console.log(payload);
    this.apiService.createSquadron(payload);
  }

}
