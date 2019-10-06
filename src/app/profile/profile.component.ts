import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(private toastrService: ToastrService) {
  }

  ngOnInit() {
  }
}
