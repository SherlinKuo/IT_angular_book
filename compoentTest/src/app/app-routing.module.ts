import { TestViewComponent } from './ch03/test-view/test-view.component';
import { HookhomeComponent } from './ch03/hook/hookhome/hookhome.component';
import { HomeComponent } from './ch03/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"hook", component: HookhomeComponent},
  {path: "test-view", component: TestViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
