import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule, ToastContainerModule } from "ngx-toastr";
import { RouterModule, Routes } from "@angular/router";
import { UserIdleModule } from "angular-user-idle";
import { MatStepperModule } from "@angular/material/stepper";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatRadioModule,
  MatCheckboxModule
} from "@angular/material";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegistrationComponent } from "./registration/registration.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "register", component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    RegistrationComponent
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
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      timeOut: 0, // disable auto-dismiss
      closeButton: true // show close button
    }),
    ToastContainerModule,
    UserIdleModule.forRoot({ idle: 0, timeout: 0, ping: 0 })
  ],
  providers: [],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
