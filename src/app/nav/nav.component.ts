import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  navigate(url) {
    window.location.href = url;
    window.location.reload();
  }
}
