import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../db/tasks.json';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  project;
  not_empty = true;

  constructor(private route: ActivatedRoute) {
    this.tasks = data;
    this.route.params.subscribe(params => { this.project = params['project']; });
  }

  ngOnInit() {
  }
}