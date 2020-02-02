import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
  NgModel,
  FormArray,
  ValidationErrors
} from "@angular/forms";
import * as moment from "moment";
import { Router } from "@angular/router";
import { RegisterService } from "../services/register.service";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { AppDateAdapter, APP_DATE_FORMATS } from "./format-datepicker";
import { MatOption } from "@angular/material";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class RegistrationComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private renderer: Renderer2,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.states = this.getStates();
  }
  position = "before";
  selectedChild: number;
  occupation: String;
  gender: String;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  enableSecondStep: boolean;
  ownBusiness: string;
  states: any[];
  selected = "option2";
  childrenList: FormArray;
  children: Number[];
  submitSuccess: boolean = false;
  regMessage: String;
  showLoginButton: boolean = false;
  isExistedEmail: boolean = false;
  showBusinessFields: boolean;
  hide = true;
  maritalStatusList = [
    { name: "Married", value: "married", checked: false },
    { name: "Single", value: "single", checked: true }
  ];
  chosenMaritalStatus = "single";
  chosenUserGender;
  @ViewChild("AddChildren", { static: false }) AddChildren: ElementRef;
  genders = [
    { value: "MALE", viewValue: "Male" },
    { value: "FEMALE", viewValue: "Female" }
  ];
  businessInfo = [
    { value: "Y", viewValue: "Yes" },
    { value: "N", viewValue: "No" }
  ];
  occupations = [
    { value: "employed", viewValue: "Employed" },
    { value: "home-maker", viewValue: "Home Maker" }
  ];

  childs = [
    { value: 0, viewValue: "0" },
    { value: 1, viewValue: "1" },
    { value: 2, viewValue: "2" },
    { value: 3, viewValue: "3" },
    { value: 4, viewValue: "4" },
    { value: 5, viewValue: "5" },
    { value: 6, viewValue: "6" },
    { value: 7, viewValue: "7" },
    { value: 8, viewValue: "8" },
    { value: 9, viewValue: "9" },
    { value: 10, viewValue: "10" }
  ];
  interests = [
    { key: 1, viewValue: "Cultural" },
    { key: 2, viewValue: "Sports" },
    { key: 3, viewValue: "Business" },
    { key: 4, viewValue: "Political" },
    { key: 5, viewValue: "Service" }
  ];
  // @ViewChild("AddChildren", { static: false }) AddChildren: ElementRef;
  @ViewChild("viewContainer", { read: ViewContainerRef, static: false })
  viewContainer: ViewContainerRef;
  @ViewChild("template", { static: false }) template: TemplateRef<any>;
  @ViewChild("allSelected", { static: false }) private allSelected: MatOption;
  ngOnInit() {
    if (sessionStorage.length) {
      this.router.navigate(["/profile"]);
    }
    this.showBusinessFields = false;
    this.firstFormGroup = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userEmail: [
        "",
        Validators.compose([
          Validators.required,
          this.isEmailUnique.bind(this),
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ],
      mobile: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      maritalStatus: [""],
      homeAddress: this._formBuilder.group({
        address1: ["", Validators.required],
        userGender: ["", Validators.required],
        city: ["", Validators.required],
        state: ["", Validators.required],
        zipcode: ["", Validators.required]
      })
    });
    this.secondFormGroup = this._formBuilder.group({
      spouseFirstName: ["", Validators.required],
      spouseLastName: ["", Validators.required],
      spouseEmail: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ],
      spouseMobile: ["", Validators.required],
      spouseDOB: ["", Validators.required],
      occupation: ["", Validators.required],
      numberOfChildren: [""],
      childrenList: this._formBuilder.array([])
      // children : this._formBuilder.group({
      // childnameCtrl: ["", Validators.required],
      // gender: [""],
      // grade: [""]
      // })
      // childnameCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      refererdetails: this._formBuilder.group({
        referalFirstName: ["", Validators.required],
        referalLastName: ["", Validators.required]
      }),
      referalMobile: ["", Validators.required],
      business: this._formBuilder.group({
        businessName: ["", Validators.required],
        websiteUrl: ["", Validators.required],
        businessDetails: ["", Validators.required]
      }),
      userType: new FormControl("", [Validators.required]),
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          )
        ])
      ],
      cpassword: [
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
    this.thirdFormGroup.get("business")["controls"].businessName.disable();
    this.thirdFormGroup.get("business")["controls"].websiteUrl.disable();
    this.thirdFormGroup.get("business")["controls"].businessDetails.disable();
    this.enableSecondStep = true;
  }
  get cpassword() {
    return this.thirdFormGroup.get("cpassword");
  }
  selectAll() {
    if (this.allSelected.selected) {
      this.thirdFormGroup.controls.userType.patchValue([
        ...this.interests.map(item => item.viewValue),
        0
      ]);
    } else {
      this.thirdFormGroup.controls.userType.patchValue([]);
    }
  }
  createChild(): FormGroup {
    return this._formBuilder.group({
      name: "",
      gender: "",
      grade: ""
    });
  }
  onChildSelection() {
    this.children = Array.from({ length: this.selectedChild }, (v, k) => k + 1);
    this.childrenList = this.secondFormGroup.get("childrenList") as FormArray;
    console.log("Hiiii", this.children);
    this.childrenList.clear();
    for (let i = 0; i < this.children.length; i++) {
      console.log("am here");
      this.childrenList.push(this.createChild());
    }
  }
  businessChecked(event) {
    if (event === "Y") {
      this.thirdFormGroup.get("business")["controls"].businessName.enable();
      this.thirdFormGroup.get("business")["controls"].websiteUrl.enable();
      this.thirdFormGroup.get("business")["controls"].businessDetails.enable();
    } else {
      this.thirdFormGroup.get("business")["controls"].businessName.disable();
      this.thirdFormGroup.get("business")["controls"].websiteUrl.disable();
      this.thirdFormGroup.get("business")["controls"].businessDetails.disable();
    }
  }
  addItem(): void {
    this.childrenList = this.secondFormGroup.get("childrenList") as FormArray;
    this.childrenList.push(this.createChild());
  }
  getStates() {
    return [
      { id: "1", name: "Alabama", value: "AL" },
      { id: "2", name: "Alabama", value: "AL" },
      { id: "3", name: "Alaska", value: "AK" },
      { id: "4", name: "Arizona", value: "AZ" },
      { id: "5", name: "Arkansas", value: "AR" },
      { id: "6", name: "California", value: "CA" },
      { id: "7", name: "Colorado", value: "CO" },
      { id: "8", name: "Connecticut", value: "CT" },
      { id: "9", name: "Delaware", value: "DE" },
      { id: "10", name: "District Of Columbia", value: "DC" },
      { id: "11", name: "Florida", value: "FL" },
      { id: "12", name: "Georgia", value: "GA" },
      { id: "13", name: "Hawaii", value: "HI" },
      { id: "14", name: "Idaho", value: "ID" },
      { id: "15", name: "Illinois", value: "IL" },
      { id: "16", name: "Indiana", value: "IN" },
      { id: "17", name: "Iowa", value: "IA" },
      { id: "18", name: "Kansas", value: "KS" },
      { id: "19", name: "Kentucky", value: "KY" },
      { id: "20", name: "Louisiana", value: "LA" },
      { id: "21", name: "Maine", value: "ME" },
      { id: "22", name: "Maryland", value: "MD" },
      { id: "23", name: "Massachusetts", value: "MA" },
      { id: "24", name: "Michigan", value: "MI" },
      { id: "25", name: "Minnesota", value: "MN" },
      { id: "26", name: "Mississippi", value: "MS" },
      { id: "27", name: "Missouri", value: "MO" },
      { id: "28", name: "Montana", value: "MT" },
      { id: "29", name: "Nebraska", value: "NE" },
      { id: "30", name: "Nevada", value: "NV" },
      { id: "31", name: "New Hampshire", value: "NH" },
      { id: "32", name: "New Jersey", value: "NJ" },
      { id: "33", name: "New Mexico", value: "NM" },
      { id: "34", name: "New York", value: "NY" },
      { id: "35", name: "North Carolina", value: "NC" },
      { id: "36", name: "North Dakota", value: "ND" },
      { id: "37", name: "Ohio", value: "OH" },
      { id: "38", name: "Oklahoma", value: "OK" },
      { id: "39", name: "Oregon", value: "OR" },
      { id: "40", name: "Pennsylvania", value: "PA" },
      { id: "41", name: "Rhode Island", value: "RI" },
      { id: "42", name: "South Carolina", value: "SC" },
      { id: "43", name: "South Dakota", value: "SD" },
      { id: "44", name: "Tennessee", value: "TN" },
      { id: "45", name: "Texas", value: "TX" },
      { id: "46", name: "Utah", value: "UT" },
      { id: "47", name: "Vermont", value: "VT" },
      { id: "48", name: "Virginia", value: "VA" },
      { id: "49", name: "Washington", value: "WA" },
      { id: "50", name: "West Virginia", value: "WV" },
      { id: "51", name: "Wisconsin", value: "WI" },
      { id: "52", name: "Wyoming", value: "WY" }
    ];
  }

  register() {
    console.log(this.firstFormGroup);
    console.log(this.secondFormGroup);
    console.log(this.thirdFormGroup);
    const postdata = this.firstFormGroup.value;
    postdata["mobile"] = this.firstFormGroup.value.mobile.replace(/\D+/g, "");
    postdata["spousedetails"] = this.secondFormGroup.value;
    postdata["referredby"] = this.thirdFormGroup.value.refererdetails;
    postdata.referredby["mobile"] = this.thirdFormGroup.value.referalMobile;
    postdata["businessinfo"] = this.thirdFormGroup.value.business;
    postdata["ownbusiness"] = this.ownBusiness;
    postdata["areasofinterests"] = this.thirdFormGroup.value.userType;
    postdata["password"] = this.thirdFormGroup.value.password;
    postdata["userGender"] = this.firstFormGroup.value.homeAddress.userGender;

    if (this.thirdFormGroup.valid) {
      this.registerService.registerUser(postdata).subscribe(
        res => {
          // this.submitSuccess = true;
          if (res.status) {
            this.router.navigate(['/success']);
            // this.regMessage =
            //   "You have successfully completed registration and will send you your membership details on email with in day.";
            // this.showLoginButton = true;
          } else {
            // this.regMessage = "Error occured, please try again after sometime.";
            // this.showLoginButton = false;
            alert("Error occured, please try again after sometime.");
          }
        },
        error => {
          console.log(error);
          alert("Error occured, please try again after sometime.");
        }
      );
    }
  }

  isEmailUnique(control: FormControl) {
    this.registerService.validateEmail(control.value).subscribe(res => {
      if (res.status === 0 && res.message === "Invalid Email Address") {
        this.isExistedEmail = false;
      } else {
        if (res.status === 0 && res.message === "Email registered earlier ") {
          this.isExistedEmail = true;
          this.firstFormGroup.controls["userEmail"].setErrors({
            incorrect: true
          });
        } else {
          this.isExistedEmail = false;
        }
      }
    });
  }
}

/*
 * Validator function return object or null
 * Returns object if validations fails
 * Returns null if validations passes
 **/
export function urlValidator(control: AbstractControl) {
  const dob = control.value;
  const today = moment().startOf("day");
  const delta = today.diff(dob, "years", false);

  if (delta <= 16) {
    return { urlValid: true }; // must return object
  }
  return null;
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
