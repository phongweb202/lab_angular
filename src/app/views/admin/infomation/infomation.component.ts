import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicServiceService } from 'src/app/services/basic-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css']
})
export class InfomationComponent implements OnInit {
  infomation: any;
  form: FormGroup;
  dis = true;
  file: any;
  constructor(private infoService: BasicServiceService) {
    this.form = new FormGroup({
      name: new FormControl({ value: '', disabled: true }, Validators.required),
      email: new FormControl({ value: '', disabled: true }, Validators.required),
      birthdate: new FormControl({ value: '', disabled: true }, Validators.required),
      age: new FormControl({ value: 0, disabled: true }, Validators.required),
      address: new FormControl({ value: '', disabled: true }, Validators.required),
      desc: new FormControl({ value: '', disabled: true }, Validators.required)
    });
  }
  edit() {
    this.dis = false;
    this.form.enable();
  }
  onUpload(event: any) {
    this.file = event.target.files[0];
  }
  onGetInfo() {
    this.infoService.gets("infomation").subscribe(data => {
      data = data[0];
      this.infomation = data;
      this.form.setValue({
        name: data.name,
        email: data.email,
        age: data.age,
        address: data.address,
        desc: data.desc,
        birthdate: data.birthdate
      });
      this.form.disable();
    });
  }
  ngOnInit(): void {
    this.onGetInfo();
  }
  cancel() {
    this.dis = true;
    this.onGetInfo();
  }
  onSubmit(duLieu: any) {
    if (this.file) {
      this.infoService.uploadImg(this.file).subscribe(response => {
        this.infoService.update("infomation", this.infomation.id, { ...duLieu, avatar: response.url }).subscribe(data => {
          this.onGetInfo();
          this.file = '';
          this.dis = true;
          this.form.disable();
          Swal.fire("Thông báo", "Cập nhật thông tin thành công", 'success');
        })
      });
    }
    else {
      this.infoService.update("infomation", this.infomation.id, duLieu).subscribe(data => {
        this.dis = true;
        this.form.disable();
        Swal.fire("Thông báo", "Cập nhật thông tin thành công", 'success');
      });
    }
  }
}
