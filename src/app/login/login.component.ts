import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthenticateService} from '../service/authenticate.service';
import {RegisterComponent} from '../register/register.component';
import {ToastrService} from 'ngx-toastr';
import {LoginRequest} from '../model/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private authenticateService: AuthenticateService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm = () => {
    if (!this.loginForm.valid) {
      return;
    }
    const credentials = new LoginRequest();
    credentials.username = this.loginForm.controls.username.value;
    credentials.password = this.loginForm.controls.password.value;
    this.authenticateService.login(credentials).subscribe(
      (response) => {
        console.log('Пользователь вошел: ', response);
        this.showSuccessNotification(response.username);
        this.closeModal();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  navigateToRegistration(): void {
    this.dialogRef.close();
    console.log('Переход на страницу регистрации');
    this.dialog.open(RegisterComponent, {
      width: '600px',
      disableClose: true,
      hasBackdrop: true,
    });
  }

  showSuccessNotification(name: string): void {
    this.toastr.success('Здравствуйте, ' + name + '!', 'Вход выполнен!', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-times-new-roman',
      messageClass: 'toast-times-new-roman'
    });
  }
}
