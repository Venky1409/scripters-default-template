import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, NgModel, FormArray, ValidationErrors } from "@angular/forms";
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {}
  emailFormGroup: FormGroup;
  emailSent = '';

  ngOnInit() {
    if (sessionStorage.length) {
      this.router.navigate(['/profile']);
    }
    this.emailFormGroup = this._formBuilder.group({
      useremail: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ]
    });
  }

  sendMail() {
    this.registerService.sendEmail(this.emailFormGroup.value)
      .subscribe(res => {
        if (res.status > 0) {
          alert("Sent mail Success!!!");
          this.emailSent = 'success';
        }
        if (res.status == 0) alert(res.message);
      }, error => {
        console.log(error);
      });
  }

  sendBack() {
    this.router.navigate(['/login']);
  }

}
