import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditRemindingComponent} from "./components/edit-reminding/edit-reminding.component";
import {TableRemindingListComponent} from "./components/table-reminding-list/table-reminding-list.component";
import {EditRemindingResolver} from "./common/resolvers/edit-reminding.resolver";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reminding'
  },
  {
    path: 'reminding',
    component: TableRemindingListComponent
  },
  {
    path:'reminding/:id',
    resolve: {
      editReminding: EditRemindingResolver
    },
    component: EditRemindingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
