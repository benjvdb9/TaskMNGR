import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken, RouterModule } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  message;
  projects;
  not_empty = true;

  constructor(private router: Router, private http: HttpClient) {
    this.getJSON();
  }

  getAPI() : Observable<any> {
    return this.http.options("http://localhost/Laboweb/public/index.php/api/projects");
  }

  getJSON() {
    this.getAPI().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });
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
