import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  getProfiles() {
    console.log("pressed");
    this.apiService.getUsers();
  }

}
