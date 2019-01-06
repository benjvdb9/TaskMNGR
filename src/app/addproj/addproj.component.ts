import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent implements OnInit {
  //json: ProjectJSON;
  default_title = "Add Task";

  constructor(private router: Router) {
    //this.json = new ProjectJSON();
  }

  onSubmit(form: NgForm) {
    /*this.json.setTitle(form.value.title);
    this.json.setCompletion(0);
    this.json.setImage("assets/SM.png");
    
    console.log(this.json);*/
    this.router.navigate(['/Projects']);
  }

  ngOnInit() {
  }

}
