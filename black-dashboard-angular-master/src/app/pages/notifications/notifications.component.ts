import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {

  constructor(private toastr: ToastrService, private apiService: ApiService) {}

  ngOnInit() {}
}
