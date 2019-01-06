import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent implements OnInit {
  default_title = "Add Task";

  constructor(private router: Router, private http: HttpClient) {}

  postAPI($title) : Observable<any> {
    console.log("Adding");
    let url = "http://localhost/Laboweb/public/index.php/api/post/project/" + $title;
    return this.http.post(url, "");
  }

  onSubmit(form: NgForm) {
    this.postAPI(form.value.title).subscribe(data => {console.log(data);});
    this.router.navigate(['/Projects']);
  }

  ngOnInit() {
  }

}
