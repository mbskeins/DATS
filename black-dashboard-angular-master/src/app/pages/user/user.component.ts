import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
