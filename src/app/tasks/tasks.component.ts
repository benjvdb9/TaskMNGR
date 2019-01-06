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
  status: {[id: number] : boolean} = {};
  project;
  not_empty;
  percentage = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getJSON();
    this.route.params.subscribe(params => { this.project = params['project']; });
  }

  getApi() : Observable<any> {
    return this.http.options("http://localhost/Laboweb/public/index.php/api/tasks");
  }

  updateApi($id) : Observable<any> {
    return this.http.post("http://localhost/Laboweb/public/index.php/api/update/task/" + $id, "");
  }

  updateCApi($id, $per) : Observable<any> {
    return this.http.post("http://localhost/Laboweb/public/index.php/api/update/project/" + $id
    + "/completion/" + $per, "");
  }

  getJSON() {
    this.tasks = new Array;
    this.getApi().subscribe(data => {
      this.all_tasks = data;
      this.trimJSON();
      this.assertEmpty();
    });
  }

  trimJSON() {
    let per = 0;
    for(let task of this.all_tasks) {
      if (task.projects.title == this.project) {
        this.status[task.id] = task.status;
        this.tasks.push(task);
        if(task.status) {
          per += 100;
        }
      }
    }
    per = Math.round(per / this.tasks.length);
    this.percentage = per;
    this.updateCApi(this.project, per).subscribe();
  }

  assertEmpty() {
    if(this.tasks.length == 0) {
      this.not_empty = false;
    } else {
      this.not_empty = true;
    }
  }

  toggleStatus($id) {
    this.status[$id] = !this.status[$id];
    this.updateApi($id).subscribe();
    this.getPercentage();
  }

  getPercentage() {
    let perc = 0;
    for(let key in this.status) {
      if(this.status[key]) {
        perc += 100;
      }
    }
    perc = Math.round(perc / this.tasks.length);
    this.percentage = perc;
    this.updateCApi(this.project, perc).subscribe();
  }

  ngOnInit() {
  }
}