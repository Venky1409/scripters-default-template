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
  maritalStatus;

  ngOnInit() {
    if (!sessionStorage.length) {
      this.router.navigate(['/login']);
    } else {
    this.sessionid = sessionStorage.getItem('sessionid');
    this.registerService.getProfile(this.sessionid)
      .subscribe(res => {
        this.profileInfo = res.userinfo;
        this.maritalStatus = (this.profileInfo.personal_maritalstatus === "1") ? "Married" : "Single";
      }, error => {
        console.log(error);
      });
    }
  }
}
