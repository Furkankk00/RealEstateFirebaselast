import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm:FormGroup;
  message:string = "";
  constructor(private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private messageService:MessageService,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      const loginFormValue = Object.assign({},this.loginForm.value);
      this.authenticationService.login(loginFormValue).subscribe( () =>{
        this.router.navigate(["/panel"])
      })
      
    } else {
      this.message = "Lütfen bilgileri boş geçmeyin !";
    }
  }
}
