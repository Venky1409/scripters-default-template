import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
declare var $: any;


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {

  constructor(private toastrService: ToastrService) {
  }

  ngOnInit() {
  }
}
