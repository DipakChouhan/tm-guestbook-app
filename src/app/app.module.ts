import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListAllEntriesComponent } from './admin/list-all-entries/list-all-entries.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationComponent } from './common/confirmation/confirmation.component';
import { GuestBookFormComponent } from './common/guest-book-form/guest-book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './common/auth/auth.interceptor';
import { GuestBookEntryComponent } from './guest/guest-book-entry/guest-book-entry.component';
import { ListGuestEntriesComponent } from './guest/list-guest-entries/list-guest-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GuestComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ListAllEntriesComponent,
    ConfirmationComponent,
    GuestBookFormComponent,
    GuestBookEntryComponent,
    ListGuestEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
