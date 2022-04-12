import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private route:Router) { }
  ele = 1
  ngOnInit(): void {
  }
  pageDashboard(){
    this.ele = 1
    this.route.navigate(['admin/dashboard']);
  }
  pageSkill(){
    this.ele = 2
    this.route.navigate(['admin/skill']);
  }
  pageInfo(){
    this.ele = 3;
    this.route.navigate(['admin/infomation']);
  }
  pageProject(){
    this.ele = 4;
    this.route.navigate(['admin/project']);
  }
  pageSchools(){
    this.ele = 5;
    this.route.navigate(['admin/school']);
  }
}
