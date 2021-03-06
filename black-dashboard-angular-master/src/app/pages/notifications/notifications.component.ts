import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {

  constructor(private apiService: ApiService, private authService: AuthService) { }

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

  createEvent(nameCreateEvent, locationCreateEvent, ) {
    console.log(Date.now());
    var payload = {
      dateTime: "2012-09-04 06:00:00.000000-08:00",
      name: nameCreateEvent,
      location: locationCreateEvent,
      isLeadLab: false,
      isArchived: false,
    }
    this.apiService.createEvent(payload);
  }


  addCadre(userCreateCadre) {
    var payload = {
      user: userCreateCadre,
      isArchived: false,
    }
    this.apiService.addCadre(payload);
  }

  addGroup(nameGroup, commanderGroup, DCommanderGroup, wingGroup) {
    var payload = {
      name: nameGroup,
      isArchived: false,
      commander: commanderGroup,
      deputyCommander: DCommanderGroup,
      wing: wingGroup
    }
    this.apiService.addGroups(payload);
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

  createSquadron(name, commander, deputy, group) {
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

  createWing(name, commander, viceCommander, inspectorGeneral) {
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

  approveUser(userApprove){

    console.log("hit");
    var payload = {
      "username": userApprove
    }
    console.log(payload);
    this.apiService.approveUser(payload);

  }

}
