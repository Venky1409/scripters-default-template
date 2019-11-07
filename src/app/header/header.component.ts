import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { RegisterService } from "../services/register.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private registerService: RegisterService
  ) {}
  sessionid: any;
  profileInfo = '';

  ngOnInit() {
    if (!sessionStorage.length) {
      this.router.navigate(["/login"]);
    } else {
      this.sessionid = sessionStorage.getItem("sessionid");
      this.registerService.getProfile(this.sessionid).subscribe(
        res => {
          if (res.userinfo) this.profileInfo = res.userinfo.firstName;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  logout() {
    sessionStorage.clear();
    // this.router.navigate(["/"]);
    location.href = 'index.html';
  }
}
