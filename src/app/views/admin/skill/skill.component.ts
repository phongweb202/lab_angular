import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicServiceService } from 'src/app/services/basic-service.service';
import Swal from 'sweetalert2';

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
        Swal.fire('Thông báo',"Cập nhật thông tin kĩ năng thành công",'success');
      })
    } else {
      this.skillService.create('skills', duLieu).subscribe(data => {
        this.onGetList();
        Swal.fire('Thông báo',"Thêm mới kĩ năng thành công",'success');
      })
    }
  }
  remove(id: number | string) {
    const confirm = window.confirm("Bạn có chắc muốn xóa kỹ năng này");
    if (confirm) {
      this.skillService.remove('skills', id).subscribe(data => {
        this.onGetList();
        Swal.fire('Thông báo',"Xóa kĩ năng thành công",'success');
      })
    }
  }
}
