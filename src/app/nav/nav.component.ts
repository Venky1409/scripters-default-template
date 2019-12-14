import { Component, OnInit } from "@angular/core";
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

  constructor() {
    this.loadScript();
  }

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
    const hamburger = $(".side-menu-button");
    hamburger.on("click", (evt) => this.changeView(evt) );
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  navigate(url) {
    window.location.href = url;
    window.location.reload();
  }

  changeView(e) {
    this.count = this.count + 1;
    setTimeout(() => {
      $('.sidenav').toggleClass("mySideBar");
      $(".side-menu-button").toggleClass("actives");
    }, 1000);
  }
}
