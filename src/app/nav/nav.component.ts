import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
declare var $: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavbarComponent implements OnInit {

  url = "/assets/js/script.js";
  loadAPI: any;
  count = 0;
  sessionid: any;
  profileInfo = '';

  constructor(private registerService: RegisterService) {
    this.loadScript();
  }

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
    const hamburger = $(".side-menu-button");
    hamburger.on("click", (evt) => this.changeView(evt) );

    if (sessionStorage.length) {
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

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  logout() {
    sessionStorage.clear();
    // this.router.navigate(["/"]);
    location.href = 'index.html';
  }

  navigate(url) {
    window.location.href = url;
    window.location.reload();
  }

  changeView(e) {
    $('.sidenav').removeClass("mySideBar");
    $(".side-menu-button").removeClass("actives");
    setTimeout(() => {
      $('.sidenav').toggleClass("mySideBar");
      $(".side-menu-button").toggleClass("actives");
    }, 2000);
  }
}
