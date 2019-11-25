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
<<<<<<< HEAD
      name : name,
      isArchived: true
=======
      name: name,
      isArchived: false
>>>>>>> 3c93635f8efa00de135ee280850896473c1086b7
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

<<<<<<< HEAD
  addCadre(userCreateCadre){
    var payload = {
      user: 0,
      isArchived: false,
    }
    this.apiService.addCadre(payload);
  }

  addGroup(nameGroup, commanderGroup,  DCommanderGroup, wingGroup){
    var payload = {
      name: nameGroup,
      isArchived: false,
      commander: commanderGroup,
      deputyCommander: DCommanderGroup,
      wing: wingGroup
    }
    this.apiService.addGroups(payload);
  }
=======
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

  createWing(name, commander, viceCommander, inspectorGeneral){
    var payload = {
        "name": name,
        "isArchived": true,
        "commander": commander,
        "viceCommander": viceCommander,
        "inspectorGeneral": inspectorGeneral
    }
    console.log(payload);
    this.apiService.createWing(payload);
  }

>>>>>>> 3c93635f8efa00de135ee280850896473c1086b7
}
