import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  private contactURL = 'http://localhost/a2CI/ci3/login';
  sendLogin(val: any){
      const body = new URLSearchParams(val);
      body.set('username', val.data[0].username);
      body.set('password', val.data[0].password);

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(this.contactURL, body, {
          headers: headers
      }).map( res => res.json());
  }

}
