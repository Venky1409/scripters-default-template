import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(private toastrService: ToastrService, private router: Router, private registerService: RegisterService) { }
  sessionid;
  profileInfo;
  isDataAvailale = false;
  maritalStatus = "Single";
  loading = false;

  ngOnInit() {
    this.loading = true;
    if (!sessionStorage.length) {
      this.router.navigate(['/login']);
    } else {
    this.sessionid = sessionStorage.getItem('sessionid');
    this.registerService.getProfile(this.sessionid)
      .subscribe(res => {
        this.loading = false;
        if (!res.userinfo) {
          this.isDataAvailale = false;
        } else {
          this.isDataAvailale = true;
          this.profileInfo = res.userinfo;
          this.maritalStatus = (this.profileInfo && (this.profileInfo.personal_maritalstatus === "SINGLE")) ? "Single" : "Married";
        }
      }, error => {
        console.log(error);
        this.loading = false;
        this.isDataAvailale = false;
      });
    }
  }
}
