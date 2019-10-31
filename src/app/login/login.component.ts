import { Component, OnInit, ElementRef, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, NgModel, FormArray, ValidationErrors } from "@angular/forms";
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {}

  loginFormGroup: FormGroup;
  forgotFormGroup: FormGroup;
  isLogin = true;
  isForgot;

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      useremail: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ],
      userpassword: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          )
        ])
      ]
    });
    this.forgotFormGroup = this._formBuilder.group({
      useremail: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ]
    });
  }

  login() {
    const postdata = this.loginFormGroup.value;
    postdata["sessionid"] = new Date().valueOf();
    this.registerService.validateLogin(postdata)
      .subscribe(res => {
        if (res.status > 0) {
          sessionStorage.setItem('sessionid', postdata["sessionid"]);
          this.router.navigate(['/profile']);
          this.loginFormGroup.reset();
        }
        if (res.status == 0) alert(res.message);
      }, error => {
        console.log(error);
      });
  }

  sendMail() {
    console.log(this.forgotFormGroup.value);
    this.registerService.sendEmail(this.loginFormGroup.value)
      .subscribe(res => {
        if (res.status > 0) {
          alert("Sent mail Success!!!");
          this.forgotFormGroup.reset();
        }
        if (res.status == 0) alert(res.message);
      }, error => {
        console.log(error);
      });
  }

  sendBack() {
    this.forgotFormGroup.reset();
    this.isForgot = false;
    this.isLogin = true;
  }

  forgotpwd() {
    this.loginFormGroup.reset();
    this.isLogin = false;
    this.isForgot = true;
  }

}
