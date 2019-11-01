import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input('position') position = 'absolute';
  @Input('orientation') orientation = 'vertical';
  @Input('content') content = 'Loading...';
  @Input('isInFront') isInFront = true;

  constructor() {
  }
}
