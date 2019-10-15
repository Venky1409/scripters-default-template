import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule, ToastContainerModule } from "ngx-toastr";
import { RouterModule, Routes } from "@angular/router";
import { UserIdleModule } from "angular-user-idle";
import {MatNativeDateModule} from '@angular/material/core';
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatRadioModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegistrationComponent } from "./registration/registration.component";
import { PhoneMaskDirective } from './registration/phone-mask.directive';
import { SampleComponent } from "./sample/sample.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NonauthheaderComponent } from "./nonauthheader/nonauthheader.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "register", component: RegistrationComponent },
  { path: "sample", component: SampleComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    RegistrationComponent,
    SampleComponent,
    NonauthheaderComponent,
    WelcomeComponent,
    DashboardComponent,
    LoginComponent,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      timeOut: 0, // disable auto-dismiss
      closeButton: true // show close button
    }),
    ToastContainerModule,
    UserIdleModule.forRoot({ idle: 0, timeout: 0, ping: 0 }),
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MDBBootstrapModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    PhoneMaskDirective
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
