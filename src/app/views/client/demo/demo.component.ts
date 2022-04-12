import { Component, OnInit } from '@angular/core';
import { BasicServiceService } from 'src/app/services/basic-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  infomation: any;
  schools: any;
  projects: any;
  skills: any;
  constructor(private cv: BasicServiceService) { }
  onGets() {
    this.cv.gets('infomation').subscribe(data => {
      this.infomation = data[0];
      console.log(this.infomation);
    })
    this.cv.gets('skills').subscribe(data => {
      this.skills = data;
      console.log(this.skills);
    });
    this.cv.gets('projects').subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });
    this.cv.gets('schools').subscribe(data => {
      this.schools = data;
      console.log(this.schools);
    })
  }
  ngOnInit(): void {
    this.onGets();
  }

}
