import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListAllEntriesComponent } from './admin/list-all-entries/list-all-entries.component';
import { GuestBookEntryComponent } from './guest/guest-book-entry/guest-book-entry.component';
import { GuestComponent } from './guest/guest.component';
import { ListGuestEntriesComponent } from './guest/list-guest-entries/list-guest-entries.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: []},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'listAllEntries', component: ListAllEntriesComponent},
  ]},
  {path: 'guest', component: GuestComponent, children: [
    {path: 'addEntry', component: GuestBookEntryComponent},
    {path: 'listAllGuestEntries', component: ListGuestEntriesComponent},
  ]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
