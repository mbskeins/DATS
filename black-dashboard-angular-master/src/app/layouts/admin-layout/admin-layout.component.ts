import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  state$: Observable<object>;
  public user;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  changeSidebarColor(color) {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if (sidebar != undefined) {
      sidebar.setAttribute('data', color);
    }
    if (mainPanel != undefined) {
      mainPanel.setAttribute('data', color);
    }
  }

  changeDashboardColor(color) {
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
      body.classList.add(color);
    }
    else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {

    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))

    if(window.history.state.user == undefined){
      this.router.navigateByUrl('/login');
    }
    else{
       this.user = window.history.state;
    }
  }
}
