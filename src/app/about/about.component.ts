import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  url = "/assets/js/script.js";
  loadAPI: any;
  status = "more";

  constructor() {
    this.loadScript();
  }

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
  }

  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  toggleText() {
    if (this.status == "less") {
        document.getElementById("textArea").style.display="none";
        document.getElementById("toggleButton").innerText = "See More";
        this.status = "more";
    } else if (this.status == "more") {
        document.getElementById("textArea").style.display="block";
        document.getElementById("toggleButton").innerText = "See Less";
        this.status = "less"
    }
}

}
