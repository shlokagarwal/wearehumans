import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  isSignedIn = false;
  currentUser = null;
  constructor(public firebaseservice: AuthenticationService) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!== null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  }

  async signin(email: string, password: string){
    console.log(email, password);
    await this.firebaseservice.signin(email, password);
    if(this.firebaseservice.isLoggedIn){
      this.isSignedIn = true;
      this.currentUser = localStorage.getItem("user");
      console.log(this.currentUser);
    }
  }

}
