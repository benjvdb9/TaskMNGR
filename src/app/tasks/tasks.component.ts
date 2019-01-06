import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  all_tasks = new Array;
  tasks = new Array;
  project;
  not_empty = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getJSON();
    this.route.params.subscribe(params => { this.project = params['project']; });
  }

  getApi() : Observable<any> {
    return this.http.options("http://localhost/Laboweb/public/index.php/api/tasks");
  }

  getJSON() {
    this.getApi().subscribe(data => {
      this.all_tasks = data;
      this.trimJSON();
      this.assertEmpty();
    });
  }

  assertEmpty() {
    if(this.tasks.length == 0) {
      this.not_empty = false;
    } else {
      this.not_empty = true;
    }
  }

  trimJSON() {
    for(let task of this.all_tasks) {
      if (task.projects.title == this.project) {
        this.tasks.push(task);
      }
    }
  }

  ngOnInit() {
  }
}