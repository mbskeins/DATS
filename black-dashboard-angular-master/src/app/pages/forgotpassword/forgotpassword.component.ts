import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  resetPassword(email){
    console.log(email);
    var payload = {
      email: email
    }
    this.authService.resetPassword(payload);
  }

}
