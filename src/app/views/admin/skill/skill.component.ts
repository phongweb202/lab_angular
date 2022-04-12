import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicServiceService } from 'src/app/services/basic-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: any;
  title = 'Thêm mới skill';
  form: FormGroup;
  idEdit: number | string;
  constructor(private skillService: BasicServiceService) {
    this.idEdit = 0;
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      score: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
    })
  }
  onGetList() {
    this.skillService.gets('skills').subscribe(data => {
      this.skills = data;
      console.log(this.skills);
    })
  }
  ngOnInit(): void {
    this.onGetList();
  }
  onEdit(id: number | string) {
    this.title = 'Cập nhật thông tin skill';
    this.idEdit = id;
    this.skillService.get('skills', id).subscribe(data => {
      this.form.setValue({ name: data.name, score: data.score });
    })
  }
  onSubmit(duLieu: any) {
    if (this.idEdit) {
      this.skillService.update('skills', this.idEdit, duLieu).subscribe(data => {
        this.onGetList();
        this.idEdit = 0;
      })
    } else {
      this.skillService.create('skills', duLieu).subscribe(data => {
        this.onGetList();
      })
    }
  }
  remove(id: number | string) {
    const confirm = window.confirm("Bạn có chắc muốn xóa kỹ năng này");
    if (confirm) {
      this.skillService.remove('skills', id).subscribe(data => {
        this.onGetList();
      })
    }
  }
}
