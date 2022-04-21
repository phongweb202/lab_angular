import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicServiceService } from 'src/app/services/basic-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools: any;
  form: FormGroup;
  title = "Thêm mới trường học";
  giaiThuong: any;
  idEdit = 0;
  edit = false;
  index = -1;
  constructor(private schoolService: BasicServiceService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
    });
  }
  thanhtich = new Array();
  onGetList() {
    this.schoolService.gets('schools').subscribe(data => {
      this.schools = data;
    })
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onEdit(id: number) {
    this.idEdit = id;
    this.schoolService.get('schools', id).subscribe(data => {
      this.form.setValue({ name: data.name, start_time: data.start_time, end_time: data.end_time });
      this.thanhtich = data.prosper;
    })
  }
  remove(id: number) {
    const confirm = window.confirm("Bạn có chắc muốn xóa ?");
    if (confirm) {
      this.schoolService.remove('schools', id).subscribe(data => {
        this.onGetList();
        Swal.fire('Thông báo', 'Xóa trường học thành công', 'success')
      })
    }
  }
  onChange(event: any) {
    this.giaiThuong = event.target.value;
  }
  onSubmit(duLieu: any) {
    if (this.idEdit) {
      this.schoolService.update('schools', this.idEdit, { ...duLieu, prosper: this.thanhtich }).subscribe(data => {
        this.onGetList();
        this.thanhtich = [];
        this.idEdit = 0;
        Swal.fire('Thông báo', 'Cập nhật thông tin trường học thành công', 'success')
      });
    } else {
      this.schoolService.create('schools', { ...duLieu, prosper: this.thanhtich }).subscribe(data => {
        this.onGetList();
        this.thanhtich = [];
        Swal.fire('Thông báo', 'Thêm mới trường học thành công', 'success')
      })
    }
    this.form.setValue({ name: '', start_time: '', end_time: '' });
  }
  addThanhTich() {
    if (this.index !== -1) {
      for (let index = 0; index < this.thanhtich.length; index++) {
        if (index === this.index) {
          this.thanhtich[index] = this.giaiThuong;
        }
      }
      this.index = -1;
      this.edit = false;

    } else {
      this.thanhtich.push(this.giaiThuong);
    }

    this.giaiThuong = '';
  }
  removePt(i: number) {
    this.thanhtich = this.thanhtich.filter((item: any, index: number) => index !== i);
  }
  message = ''
  editPT(i: number) {
    this.index = i;
    this.edit = true;
    this.giaiThuong = this.thanhtich[i];
  }
  check() {
    if (this.form.value.start_time > this.form.value.end_time && this.form.value.end_time) {
      this.message = 'Thời gian bắt đầu sớm hơn thời gian kết thúc';
    } else {
      this.message = '';
    }
  }
}
