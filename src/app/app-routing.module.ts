import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'newlist', component: NewListComponent },
  { path: 'lists', component: TaskviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lists/:listId', component: TaskviewComponent },
  { path: 'lists/:listId/newtask', component: NewTaskComponent },
  { path: 'newtask', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

