import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-project',
  templateUrl: './template-project.component.html',
  styleUrls: ['./template-project.component.css']
})
export class TemplateProjectComponent implements OnInit {
  @Input() link:any;
  @Input() name:any;
  @Input() start_time:any;
  @Input() end_time:any;
  @Input() desc:any;
  constructor() { }

  ngOnInit(): void {
  }

}
