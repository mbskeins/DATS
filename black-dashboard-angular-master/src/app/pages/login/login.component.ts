import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { AuthService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  user1 = {
    username: "matt",
    password: "matt",
    permission: "cadet",
  }

  user2 = {
    username: "jared",
    password: "jared",
    permission: "attendance",
  }

  user3 = {
    username: "ohm",
    password: "ohm",
    permission: "admin",
  }

  user;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }

  login(username: string, password: string): void{
    this.authService.login(username, password).subscribe(nothing =>{
      console.log("logged in yo");
      this.user = this.authService.getUser();
      console.log(this.user);
      for(var i = 0; i < this.user.roles.length; i++){
        if(this.user.roles[i] != "Cadet"){
          console.log(this.user.roles[i]);
        }
      }
      this.router.navigateByUrl('/dashboard');
    }, (error: string) => {
      console.log(error);
      window.alert("Log In Failed");
    })
  }

  routeNow(username, password) {
    /*
    if (username == "matt") {
      if (password == "matt") {
        //console.log(username, password);
        this.router.navigateByUrl('/user', { state: { user: this.user1.username, permission: this.user1.permission } });
      }
    }
    else if (username == "jared") {
      if (password == "jared") {
        //console.log(username, password);
        this.router.navigateByUrl('/user', { state: { user: this.user2.username, permission: this.user2.permission } });
      }
    }
    else if (username == "ohm") {
      if (password == "ohm") {
        //console.log(username, password);
        this.router.navigateByUrl('/dashboard', { state: { user: this.user3.username, permission: this.user3.permission } });
      }
    }
    else{
      window.alert("Username or password was incorrect please try again");
    }
    */
   

    //history.pushState({data: {test: "test"}}, '', '');
  }
}
