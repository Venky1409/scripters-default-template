import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authnav',
  templateUrl: './authnav.component.html',
  styleUrls: ['./authnav.component.scss']
})
export class AuthnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigate(url) {
  	window.location.href = url;
  }
  
}
