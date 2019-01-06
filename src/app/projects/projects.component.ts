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

  delAPI($title) : Observable<any> {
    return this.http.options("http://localhost/Laboweb/public/index.php/api/del/project/" + $title);
  }

  getJSON() {
    this.getAPI().subscribe(data => {
      this.projects = data;
      //this.assertEmpty();
      console.log(this.projects);
    });
  }

  assertEmpty() {
    if (this.projects.length == 0) {
      this.not_empty = false;
    } else {
      this.not_empty = true;
    }
  }

  toTask(title) {
    this.message = title;
    this.router.navigate(["/Tasks", { project: title }])
  }

  toAddProj() {
    this.router.navigate(["/Add/Project"])
  }

  delProject($title) {
    $title.replace(" ", "&§$");
    console.log('title', $title);
    this.delAPI($title).subscribe(data => {console.log(data);});
    this.getJSON();
  }

  ngOnInit() {
  }

}
