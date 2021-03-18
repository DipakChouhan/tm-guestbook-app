import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  displayMsg = false;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.createSignInForm();
  }

  private createSignInForm() {
    // binding data with form
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  public onSignIn() {
    console.log(this.signInForm.value);
    this.userService.signInUser(this.signInForm.value).subscribe(response => {
      console.log(response.headers.get('bearer'));
      localStorage.setItem("user_token", response.headers.get('bearer'));

      this.userService.getUserDetails(this.signInForm.value['email']).subscribe(responseData => {
        console.log('id:' + responseData['payloads'].id);
          localStorage.setItem("name", responseData['payloads'].username);
          localStorage.setItem("role", responseData['payloads'].role);
          localStorage.setItem("userId", responseData['payloads'].id);
          if (responseData['payloads'].role == 'USER') {
            this.router.navigate(['/guest']);
          } else {
            this.router.navigate(['/admin']);
          }
        }
      );
    }, error => {
      this.displayMsg = true;
      this.errorMessage = "Login Failed! Please check your credentials"
    });
  }

}
