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
    this.profileInfo = {
      "firstName": "shiva",
      "lastName": "audam",
      "userEmail": "shiva22@yopmail.com",
      "mobile": "0888686760",
      "dateOfBirth": "1993-02-01T18:30:00.000Z",
      "maritalStatus": "1",
      "homeAddress": {
        "address1": "plot no 81, road no 7, vidyanagar, sangareddy",
        "address2": "",
        "city": "sangareddy",
        "state": "4",
        "zipcode": 502295
      },
      "spousedetails": {
        "spouseFirstName": "shiva",
        "spouseLastName": "audam",
        "spouseEmail": "shiva@yopmail.com",
        "spouseMobile": "0888686760",
        "spouseDOB": "1993-02-01T18:30:00.000Z",
        "occupation": "employed",
        "numberOfChildren": 2,
        "childrenList": [{
          "name": "child1",
          "gender": "M",
          "grade": "1"
        },
        {
          "name": "child2",
          "gender": "F",
          "grade": "2"
        }
        ]
      },
      "referredby": {
        "referalFirstName": "shiva",
        "referalLastName": "audam",
        "referalId": "",
        "mobile": "0888686760"
      },
      "businessinfo": {
        "businessName": "bname",
        "websiteUrl": "burl",
        "businessDetails": "bdetails"
      },
      "ownbusiness": "Y",
      "areasofinterests": [
        "Cultural",
        "Sports",
        "Business"
      ],
      "username": "admin",
      "password": "Admin@123"
    };
    this.maritalStatus = (this.profileInfo.maritalStatus === "1") ? "Married" : "Single";
    this.sessionid = sessionStorage.getItem('sessionid');
    this.registerService.getProfile(this.sessionid)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }
}
