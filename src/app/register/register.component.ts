import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthenticateService} from '../service/authenticate.service';
import {ToastrService} from 'ngx-toastr';
import {SignupRequest} from '../model/signup.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private toastr: ToastrService,
    private authService: AuthenticateService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    console.log('Попытка регистрации:', this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }
    const signupRequest = new SignupRequest();
    signupRequest.username = this.registerForm.controls.username.value;
    signupRequest.login = this.registerForm.controls.email.value;
    signupRequest.password = this.registerForm.controls.password.value;
    signupRequest.role = ['USER'];
    console.log(signupRequest);
    this.authService.signup(signupRequest).subscribe(
      (response) => {
        console.log(response);
        this.showSuccessNotification();
        this.closeModal();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  navigateToLogin(): void {
    this.dialogRef.close();
    console.log('Повторить вход');
    window.history.back();
  }

  showSuccessNotification(): void {
    this.toastr.success('Вы успешно зарегистрировались!', 'Регистрация завершена', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-times-new-roman',
      messageClass: 'toast-times-new-roman'
    });
  }
}
