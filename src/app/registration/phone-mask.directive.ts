import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  @HostListener('keydown', ['$event'])
  keydown(event) {
    event.target.maxLength = 18;
    event.target.minLength = 14;
  }
  

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = null;
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1)-$2');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
    } else {
      newVal = newVal.substring(0, 11);
      let numVal = newVal.substring(0, 1);
      if (numVal == 1) {
        newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/, '$1 ($2)-$3-$4');
      } else {
        newVal = newVal.substring(0, 10);
        newVal = newVal.replace(/^(\d{1,3})(\d{1,3})(\d{1,4})/, '($1)-$2-$3');
      }
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
