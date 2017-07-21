import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    username: string = "";
    password: string = "";

    constructor(
        public router: Router,
        public loginService: LoginService
    ){}

    login(){
      let user = new User('','');
      user.username = this.username;
      user.password = this.password;

      let data = [
          {username: user.username, password: user.password}
      ];

      this.loginService.sendLogin({data})
                       .subscribe(
                           res => res,
                           error => error
                       );

    }

    // handleResponse(res){
    //     console.log(res);
    //     if(res.success){
    //         console.log('Success');
    //     } else if(res.error) {
    //         console.log('Error');
    //     } else {
    //         console.log('Something went wrong!');
    //     }
    // }
}
