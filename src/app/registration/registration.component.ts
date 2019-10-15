import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  AddChildrenFlag: boolean;
  enableSecondStep: boolean;
  maritalStatus: string = '1';
  ownBusiness: string;
  states: any[];
  selected = 'option2';

  @ViewChild("AddChildren", { static: false }) AddChildren: ElementRef;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
      lastCtrl: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phone: ["", Validators.required],
      DateOfBirth: ["", [Validators.required, urlValidator]],
      address1: ["", Validators.required],
      address2: [""],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipcode: ["", Validators.required],
      states: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      spousefnameCtrl: ["", Validators.required],
      spouselnameCtrl: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phone: ["", Validators.required],
      "Date Of Birth": ["", [Validators.required, urlValidator]],
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

  constructor(private _formBuilder: FormBuilder, private renderer: Renderer2) {
    this.states = this.getStates();
  }

  getStates() {
    return [
      { id: '1', name: 'Alabama', value: 'AL' },
      { id: '2', name: 'Alabama', value: 'AL' },
      { id: '3', name: 'Alaska', value: 'AK' },
      { id: '4', name: 'Arizona', value: 'AZ' },
      { id: '5', name: 'Arkansas', value: 'AR' },
      { id: '6', name: 'California', value: 'CA' },
      { id: '7', name: 'Colorado', value: 'CO' },
      { id: '8', name: 'Connecticut', value: 'CT' },
      { id: '9', name: 'Delaware', value: 'DE' },
      { id: '10', name: 'District Of Columbia', value: 'DC' },
      { id: '11', name: 'Florida', value: 'FL' },
      { id: '12', name: 'Georgia', value: 'GA' },
      { id: '13', name: 'Hawaii', value: 'HI' },
      { id: '14', name: 'Idaho', value: 'ID' },
      { id: '15', name: 'Illinois', value: 'IL' },
      { id: '16', name: 'Indiana', value: 'IN' },
      { id: '17', name: 'Iowa', value: 'IA' },
      { id: '18', name: 'Kansas', value: 'KS' },
      { id: '19', name: 'Kentucky', value: 'KY' },
      { id: '20', name: 'Louisiana', value: 'LA' },
      { id: '21', name: 'Maine', value: 'ME' },
      { id: '22', name: 'Maryland', value: 'MD' },
      { id: '23', name: 'Massachusetts', value: 'MA' },
      { id: '24', name: 'Michigan', value: 'MI' },
      { id: '25', name: 'Minnesota', value: 'MN' },
      { id: '26', name: 'Mississippi', value: 'MS' },
      { id: '27', name: 'Missouri', value: 'MO' },
      { id: '28', name: 'Montana', value: 'MT' },
      { id: '29', name: 'Nebraska', value: 'NE' },
      { id: '30', name: 'Nevada', value: 'NV' },
      { id: '31', name: 'New Hampshire', value: 'NH' },
      { id: '32', name: 'New Jersey', value: 'NJ' },
      { id: '33', name: 'New Mexico', value: 'NM' },
      { id: '34', name: 'New York', value: 'NY' },
      { id: '35', name: 'North Carolina', value: 'NC' },
      { id: '36', name: 'North Dakota', value: 'ND' },
      { id: '37', name: 'Ohio', value: 'OH' },
      { id: '38', name: 'Oklahoma', value: 'OK' },
      { id: '39', name: 'Oregon', value: 'OR' },
      { id: '40', name: 'Pennsylvania', value: 'PA' },
      { id: '41', name: 'Rhode Island', value: 'RI' },
      { id: '42', name: 'South Carolina', value: 'SC' },
      { id: '43', name: 'South Dakota', value: 'SD' },
      { id: '44', name: 'Tennessee', value: 'TN' },
      { id: '45', name: 'Texas', value: 'TX' },
      { id: '46', name: 'Utah', value: 'UT' },
      { id: '47', name: 'Vermont', value: 'VT' },
      { id: '48', name: 'Virginia', value: 'VA' },
      { id: '49', name: 'Washington', value: 'WA' },
      { id: '50', name: 'West Virginia', value: 'WV' },
      { id: '51', name: 'Wisconsin', value: 'WI' },
      { id: '52', name: 'Wyoming', value: 'WY' }
    ];
  }

  showChildForm() {
    //this.AddChildrenFlag= true;<
    var text = "<h1>Hi</h1>";
    // this.renderer.appendChild(this.AddChildren, this.AddChildren);
  }

  // get DateOfBirth() {
  //   return this.firstFormGroup.get('DateOfBirth');
  // }
}

/*
* Validator function return object or null
* Returns object if validations fails
* Returns null if validations passes
**/
export function urlValidator(control: AbstractControl) {
  const dob = control.value;
  const today = moment().startOf('day');
  const delta = today.diff(dob, 'years', false);

  if (delta <= 16) {
    return { urlValid: true }; // must return object
  }
  return null;
}
