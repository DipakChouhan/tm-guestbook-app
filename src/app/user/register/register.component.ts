import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm: FormGroup;
  displayMsg = false;

  constructor(private userService: UserService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  private createSignupForm() {
    // binding data with form
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public onSignUp() {
    this.userService.registerUser(this.signUpForm.value).subscribe(response => {
      this.createSignupForm();
      this.displayMsg = true;
    });
  }

}
