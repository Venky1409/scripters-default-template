import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private renderer: Renderer2) {}

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  AddChildrenFlag: boolean;
  enableSecondStep: boolean;
  maritalStatus: string = '1';
  ownBusiness: string;
  @ViewChild("AddChildren", { static: false }) AddChildren: ElementRef;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
      lastCtrl: ["", Validators.required],
      email: ["", Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phone: ["", Validators.required],
      "Date Of Birth": ["", Validators.required],
      address1: ["", Validators.required],
      address2: [""],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipcode: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      spousefnameCtrl: ["", Validators.required],
      spouselnameCtrl: ["", Validators.required],
      email: ["", Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phone: ["", Validators.required],
      "Date Of Birth": ["", Validators.required],
      childnameCtrl: ["", Validators.required],
      grade: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      referencefnameCtrl: ['', Validators.required],
      referencelnameCtrl: ['', Validators.required],
      contactphone: ['', Validators.required],
      businessname: ['', Validators.required],
      websiteurl: ['', Validators.required],
      businessdetails: ['', Validators.required],
      intrests: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
    this.AddChildrenFlag = false;
    this.enableSecondStep = true;
  }

  showChildForm() {
    //this.AddChildrenFlag= true;<
    var text = "<h1>Hi</h1>";
    // this.renderer.appendChild(this.AddChildren, this.AddChildren);
  }
}
