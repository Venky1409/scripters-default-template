import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './successPage.component.html',
  styleUrls: ['./successPage.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length) {
      this.router.navigate(['/profile']);
    }
  }

  back() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(["/login"]);
  }

}
