import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-school',
  templateUrl: './template-school.component.html',
  styleUrls: ['./template-school.component.css']
})
export class TemplateSchoolComponent implements OnInit {
  @Input() name: string;
  @Input() start_time: any;
  @Input() end_time: any;
  @Input() desc: any;
  @Input() prosper: any;
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

}
