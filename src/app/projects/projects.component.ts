import { Component, OnInit } from '@angular/core';
import data from '../../db/projects.json';
import { routerNgProbeToken, RouterModule } from '@angular/router/src/router_module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects;
  not_empty = true;
  adding_proj = false;

  constructor(private router: Router) {
    this.projects = data;
  }

  click() {
    this.not_empty = !this.not_empty;
  }

  addProject() {
    this.adding_proj = true;
  }

  toTask(title) {
    this.router.navigate(["/tasks", { project: title }])
  }

  ngOnInit() {
  }

}
