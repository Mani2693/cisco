import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthService,
    TokenService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    OAuthModule.forRoot()
  ]
})
export class AuthModule { }
