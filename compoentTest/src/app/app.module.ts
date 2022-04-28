import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ch03/home/home.component';
import { ChildComponent } from './ch03/child/child.component';
import { ChildTwoWayComponent } from './ch03/child-two-way/child-two-way.component';
import { ChildContentComponent } from './ch03/child-content/child-content.component';
import { HookhomeComponent } from './ch03/hook/hookhome/hookhome.component';
import { FormsModule } from '@angular/forms';
import { C1Component } from './ch03/hook/c1/c1.component';
import { ChildC2Component } from './ch03/hook/child-c2/child-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ChildTwoWayComponent,
    ChildContentComponent,
    HookhomeComponent,
    C1Component,
    ChildC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
