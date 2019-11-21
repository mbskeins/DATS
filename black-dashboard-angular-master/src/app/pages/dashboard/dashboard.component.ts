import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/apiservice.service';
import Chart from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


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

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'green', 'red', 'orange', 'yellow',
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const EVENTNAMES: string[] = [
  'LLAB', 'PT', "ALT LLAB", "FUN RUN", "OBSTACLE COURSE", "DRILL"
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumns2: string[] = ['name', 'progress'];

  dataSource: MatTableDataSource<UserData>;
  dataSource2: MatTableDataSource<EventData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort2: MatSort;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    const events = Array.from({ length: 5 }, (_, k) => createNewEvent(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    this.dataSource2 = new MatTableDataSource(events);
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // for second table
    this.dataSource2.paginator = this.paginator2;
    this.dataSource2.sort = this.sort2;

  }

  // for cadet attendance
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // for average event attendance
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {

  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * (100 - 70) + 70).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

function createNewEvent(id: number): EventData {
  const name = EVENTNAMES[Math.round(Math.random() * (EVENTNAMES.length - 1))]
  return {
    name: name,
    progress: Math.round(Math.random() * (100 - 70) + 70).toString(),
  }
}
