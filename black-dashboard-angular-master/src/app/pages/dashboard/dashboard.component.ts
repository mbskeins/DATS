import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/apiservice.service';
import Chart from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authservice.service';
import { HttpHeaders } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface EventData {
  name: string;
  progress: string;
}

const EVENTNAMES: string[] = [
  'LLAB', 'PT', "ALT LLAB", "FUN RUN", "OBSTACLE COURSE", "DRILL"
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ['dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumns2: string[] = ['name', 'progress'];

  ptPercent;
  llabPercent;


  dataSource;
  dataSource2: MatTableDataSource<EventData>;
  $userList;
  userlist;

  $eventList;
  eventList;

  headers: HttpHeaders
  columnsToDisplay = ['firstname', 'lastname', 'cellphone'];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //@ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort2: MatSort;

  constructor(private apiService: ApiService, private authService: AuthService, private changeDetectorRefs: ChangeDetectorRef) { 
    // Create 100 users
    const events = Array.from({ length: 5 }, (_, k) => createNewEvent(k + 1));

    this.dataSource = new MatTableDataSource(this.userlist);
    this.dataSource2 = new MatTableDataSource(events);
  }
 
  ngOnInit() {

    this.changeDetectorRefs.detectChanges();
    this.headers = this.authService.getAuthHeaders();
    this.$eventList = this.apiService.getEvents(this.headers);
    this.$userList = this.apiService.getUsers(this.headers);

    this.$eventList.subscribe(data => {
      this.eventList = data;
      console.log(this.eventList);
    });

    this.$userList.subscribe(data => {
      this.userlist = data;
      this.setTableData();
      //console.log(this.userlist);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setTableData() {
    this.dataSource = this.userlist;
    console.log(this.dataSource);
  }


  // for cadet attendance
  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
    if (this.dataSource.paginator) {
      console.log("what");
      this.dataSource.paginator.firstPage();
    }
  }

  loadData(){
    this.ptPercent = Math.round(Math.random() * (100 - 70) + 70).toString();
    this.llabPercent=  Math.round(Math.random() * (100 - 70) + 70).toString();
  }

  // for average event attendance
  // applyFilter2(filterValue: string) {
  //   this.dataSource2.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource2.paginator) {
  //     this.dataSource2.paginator.firstPage();
  //   }
  // }
}

function createNewEvent(id: number): EventData {
  const name = EVENTNAMES[Math.round(Math.random() * (EVENTNAMES.length - 1))]
  return {
    name: name,
    progress: Math.round(Math.random() * (100 - 70) + 70).toString(),
  }
}
