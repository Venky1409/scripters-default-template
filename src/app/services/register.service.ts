import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { globals } from '../config/globals';
import { Observable, Subscription } from 'rxjs';
import {Subject, throwError as observableThrowError} from 'rxjs';

@Injectable()
export class RegisterService {
  public serviceUrl: string = globals.dbhosturl;

  constructor(private http: HttpClient) {
  }

  registerUser(userDetails): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "registeruser", userDetails).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

  validateEmail(email): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "validateemail", {'useremail': email}).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

  sendEmail(email): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "sendforgotemail", email).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

  getProfile(id): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "getprofiledetails", {'sessionid': id}).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

  validateLogin(userDetails): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "validatelogin", userDetails).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

}
