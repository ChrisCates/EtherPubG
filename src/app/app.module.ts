import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './partial/form/form.component';
import { TransactionsComponent } from './partial/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { 'path': '', 'component': HomeComponent }
    ])
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
