import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  addEmail(newEmail: string){
    console.log("sent from component: ")
    console.log(newEmail);

    this.apiService.createUser(newEmail);
  }
}
