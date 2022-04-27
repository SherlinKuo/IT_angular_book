import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ch03/home/home.component';
import { ChildComponent } from './ch03/child/child.component';
import { ChildTwoWayComponent } from './ch03/child-two-way/child-two-way.component';
import { ChildContentComponent } from './ch03/child-content/child-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ChildTwoWayComponent,
    ChildContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
