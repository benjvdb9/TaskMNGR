import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  project;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => { this.project = params['project']; });
  }

  ngOnInit() {
  }

}
