import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  url = "/assets/js/script.js";
  loadAPI: any;

  constructor() {
    this.loadScript();
  }

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

}
