import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicServiceService } from 'src/app/services/basic-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any;
  form: FormGroup;
  title = 'Thêm mới dự án';
  idEdit = 0;
  constructor(private projectService: BasicServiceService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      start_time: new FormControl(''),
      end_time: new FormControl(''),
      desc: new FormControl(''),
      link: new FormControl('')
    })
  }
  onGetList() {
    this.projectService.gets('projects').subscribe(data => {
      this.projects = data;
    })
  }
  ngOnInit(): void {
    this.onGetList();
  }
  onEdit(id: number) {
    this.idEdit = id;
    this.projectService.get('projects', id).subscribe(data => {
      this.form.setValue(
        {
          name: data.name,
          start_time: data.start_time,
          end_time: data.end_time,
          desc: data.desc,
          link: data.link
        })
    })
  }
  remove(id: number) {
    const confirm = window.confirm("Bạn có chắc muốn xóa dự án");
    if (confirm) {
      this.projectService.remove('projects', id).subscribe(data => {
        this.onGetList();
        Swal.fire("Thông báo", "Xóa dự án thành công", 'success');
      })
    }
  }
  onSubmit(duLieu: any) {
    if (this.idEdit) {
      this.projectService.update('projects', this.idEdit, duLieu).subscribe(data => {
        this.onGetList();
        Swal.fire("Thông báo", "Cập nhật thông tin dự án thành công", 'success');
      })
    } else {
      this.projectService.create('projects', duLieu).subscribe(data => {
        this.onGetList();
        Swal.fire("Thông báo", "Thêm mới dự án thành công", 'success');
      });
    }
  }
}
