import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    public loginFormgroup!: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private autheservice: AuthService,
      private router: Router
    ) {}
    
    ngOnInit(): void {
      this.loginFormgroup = this.fb.group({
        username: this.fb.control(''),
        password: this.fb.control(''),
      });
    }
  
    login() {
      let username = this.loginFormgroup.value.username;
      let password = this.loginFormgroup.value.password;
      let auth: boolean = this.autheservice.login(username, password);
      if (auth) {
        this.router.navigateByUrl('/home');
      
      }
    }
}