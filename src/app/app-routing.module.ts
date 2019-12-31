import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GridComponent } from './grid/grid.component';
import { InstrumentGridComponent } from './instrument-grid/instrument-grid.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/grid',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'grid',
    component : GridComponent
  },
  {
    path : 'instrument',
    component :InstrumentGridComponent
  },
  // {
  //   path : 'grid/:custName',
  //   component : GridComponent
  // },
  {
    path : "**",
    component : NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
