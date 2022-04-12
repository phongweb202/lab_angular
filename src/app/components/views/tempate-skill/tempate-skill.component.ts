import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate-skill',
  templateUrl: './tempate-skill.component.html',
  styleUrls: ['./tempate-skill.component.css']
})
export class TempateSkillComponent implements OnInit {
  @Input() name: any;
  @Input() id:any;
  @Input() score: any;
  constructor() { }

  ngOnInit(): void {
    const element = document.getElementById(`progress${this.id}`);
    element?.setAttribute('aria-valuenow', this.score);
  }

}
