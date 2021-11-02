import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { UserModel } from '../core/models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;
  public submitted = false;
  public message: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/landing-page');
    }

    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please fill the login data properly';
      }
    })

    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,  Validators.minLength(6)]]
    });

  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserModel = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.loginForm.reset()
      this.router.navigateByUrl('/landing-page');
      this.submitted = false;
    }, (error) => {
      this.message = error.error.error.message;
      this.submitted = false;
    });
  }
}
