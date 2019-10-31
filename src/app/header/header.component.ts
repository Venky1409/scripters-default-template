import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private toastrService: ToastrService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
  	sessionStorage.clear();
  	this.router.navigate(['/login']);
  }
}
