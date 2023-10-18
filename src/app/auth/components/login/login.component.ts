import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: LoginComponent
    }
  ]
})

export class LoginComponent {    

  constructor(private authService: AuthService, private fb: UntypedFormBuilder){    
  }

  form = this.fb.group({
    email: [
      { value: 'tour@of.heroes', desabled: true },
      [Validators.email, Validators.required]    
    ],
    password: ['', [Validators.required, Validators.minLength(10)]]
  } )

  onSubmit(): void{
    if(this.form.valid) {
      this.authService.login(this.form.value);
    }
  }
}
