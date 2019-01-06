import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddprojComponent } from './addproj/addproj.component';

const routes: Routes = [
  //{path: '', redirectTo: 'projects' },
  {path: 'Projects', component: ProjectsComponent },
  {path: 'Tasks', component: TasksComponent },
  {path: 'Add/Project', component: AddprojComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
