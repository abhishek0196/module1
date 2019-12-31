import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatSelectModule} from '@angular/material'
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { InstrumentGridComponent } from './instrument-grid/instrument-grid.component';
import { DetailspopupComponent } from './detailspopup/detailspopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    GridComponent,
    InstrumentGridComponent,
    DetailspopupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
