import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit {
  @Input('score') diem: any;
  constructor() {
  }

  ngOnInit(): void {
    let element = document.getElementById(`progress${this.diem}`);
    element?.setAttribute('aria-valuenow', this.diem);
  }

}
