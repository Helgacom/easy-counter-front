import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    ProductDetailsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent,
    HomeComponent
  ]
})
export class AppModule { }
