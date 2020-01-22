import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  url = "/assets/js/script.js";
  loadAPI: any;
  status1 = "more";
  status2 = "more";
  status3 = "more";
  status4 = "more";
  status5 = "more";

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

  toggleText1() {
    if (this.status1 == "less") {
        document.getElementById("textArea1").style.display="none";
        document.getElementById("toggleButton1").innerText = "See More";
        this.status1 = "more";
    } else if (this.status1 == "more") {
        document.getElementById("textArea1").style.display="block";
        document.getElementById("toggleButton1").innerText = "See Less";
        this.status1 = "less"
    }
  }

  toggleText2() {
    if (this.status2 == "less") {
        document.getElementById("textArea2").style.display="none";
        document.getElementById("toggleButton2").innerText = "See More";
        this.status2 = "more";
    } else if (this.status2 == "more") {
        document.getElementById("textArea2").style.display="block";
        document.getElementById("toggleButton2").innerText = "See Less";
        this.status2 = "less"
    }
  }

  toggleText3() {
    if (this.status3 == "less") {
        document.getElementById("textArea3").style.display="none";
        document.getElementById("toggleButton3").innerText = "See More";
        this.status3 = "more";
    } else if (this.status3 == "more") {
        document.getElementById("textArea3").style.display="block";
        document.getElementById("toggleButton3").innerText = "See Less";
        this.status3 = "less"
    }
  }

  toggleText4() {
    if (this.status4 == "less") {
        document.getElementById("textArea4").style.display="none";
        document.getElementById("toggleButton4").innerText = "See More";
        this.status4 = "more";
    } else if (this.status4 == "more") {
        document.getElementById("textArea4").style.display="block";
        document.getElementById("toggleButton4").innerText = "See Less";
        this.status4 = "less"
    }
  }

  toggleText5() {
    if (this.status5 == "less") {
        document.getElementById("textArea5").style.display="none";
        document.getElementById("toggleButton5").innerText = "See More";
        this.status5 = "more";
    } else if (this.status5 == "more") {
        document.getElementById("textArea5").style.display="block";
        document.getElementById("toggleButton5").innerText = "See Less";
        this.status5 = "less"
    }
  }

}
