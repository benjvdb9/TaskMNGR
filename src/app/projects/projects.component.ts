import { Component, OnInit } from '@angular/core';
import data from '../../db/projects.json';
import { routerNgProbeToken, RouterModule } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  message;
  projects;
  not_empty = true;

  constructor(private router: Router) {
    this.projects = data;
  }

  toTask(title) {
    this.message = title;
    this.router.navigate(["/Tasks", { project: title }])
  }

  toAddProj() {
    this.router.navigate(["/Add/Project"])
  }

  ngOnInit() {
  }

}
