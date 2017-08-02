import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { CONFIG } from './vertico-config';
import 'rxjs/add/operator/map';


@Injectable()
export class VerticofactoryService {

  constructor(
    private http: Http
  ) { }

  getInstances(id) {
    if (this.verticoUserAuthenticated()) {
      return this.http.get(CONFIG.instancesEndpoint+id);
      //  .map(
      //    (res:Response) => {
      //    console.log(res); 
      //    res.json()
      //   });
    }
  }

  registerUser(verticoUser) {
    const req = this.http.get(CONFIG.userExistCheckEndpoint + verticoUser.email);
    req.subscribe(data => {
      console.log(data.json());

      if (data.json().length == 0) {
        //register
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const req2 = this.http.post(CONFIG.registerEndpoint, JSON.stringify(verticoUser), options);
        
        req2.subscribe(data => {
          console.log("User Registered!");
          console.log(data.json());
        },
        err => {
            console.log(err);
        })
      }else {
        console.log("user is already registered");
      }
    },
    err => {
        console.log(err);
    });
  }

  getUserProfile(email) {
    const url = CONFIG.profileEndpoint + email;
    return this.http.get(url);
    
    
  }

  private verticoUserAuthenticated() {
    return CONFIG.oauthCheck ? false : true;
    // todo : for production level code
  }
}
