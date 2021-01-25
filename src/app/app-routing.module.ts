import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
{path: '' , component : TableListComponent , pathMatch: 'full'},
{path: 'tablelist' , component : TableListComponent},
{ path: 'wiki', component : WikiComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
