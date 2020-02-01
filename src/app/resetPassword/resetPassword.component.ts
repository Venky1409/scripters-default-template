import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, NgModel, FormArray, ValidationErrors } from "@angular/forms";
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {}
  resetFormGroup: FormGroup;
  accountid;
  hashcode;
  resetSuccess;

  ngOnInit() {
    if (sessionStorage.length) {
      this.router.navigate(['/profile']);
    }
    this.accountid = this.router.browserUrlTree.queryParams.accountid;
    this.hashcode = this.router.browserUrlTree.queryParams.hashcode;
    if (this.accountid && this.hashcode) {
        this.registerService.verifyLink({'userid': this.accountid, 'hashcode': this.hashcode})
      .subscribe(res => {
        if (res.status > 0) {
          console.log(res);
        }
        if (res.status == 0) {
            this.router.navigate(['/forgotPassword']);
        }
      }, error => {
        console.log(error);
        this.router.navigate(['/forgotPassword']);
      });
    } else {
        this.router.navigate(['/forgotPassword']);
    }
    this.resetFormGroup = this._formBuilder.group({
        password: [
            "",
            Validators.compose([
              Validators.required,
              Validators.pattern(
                "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
              )
            ])
          ],
        confirmpassword: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
            ),
            matchValues("password")
          ])
        ]
      });
  }

  reset() {
    let data = {
        "userid": this.accountid,
	    "hashcode": this.hashcode,
	    "password": this.resetFormGroup.value.password
    };
    this.registerService.resetPwd(data)
      .subscribe(res => {
        if (res.status > 0) {
          alert("Password updated Success!!! Please Login");
          this.resetSuccess = 'success';
        }
        if (res.status == 0) alert(res.message);
      }, error => {
        console.log(error);
      });
  }

}

export function matchValues(
    matchTo
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }