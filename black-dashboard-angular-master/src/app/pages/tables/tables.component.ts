import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ApiService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/authservice.service';
import { HttpHeaders } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["tables.component.css"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablesComponent implements OnInit {
  constructor(private apiService: ApiService, private authService: AuthService, private changeDetectorRefs: ChangeDetectorRef) { }
  $userList;
  userlist;
  headers: HttpHeaders
  dataSource;
  columnsToDisplay = ['firstname', 'lastname', 'cellphone'];

  ngOnInit() { 
    this.changeDetectorRefs.detectChanges();
    this.headers = this.authService.getAuthHeaders();
    this.$userList = this.apiService.getUsers(this.headers);

    this.$userList.subscribe(data => {
      this.userlist = data;
      this.setTableData();
      //console.log(this.userlist);
    });
  }

  setTableData(){
    this.dataSource = this.userlist;
    console.log(this.dataSource);
  }

  takeAttendance(profile: any, event: any) {
   console.log(profile.id, event);
  }
}
