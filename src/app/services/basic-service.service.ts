import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {
  private apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  gets(table: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${table}`);
  }

  create(table: string, data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/${table}`, data);
  }

  get(table: string, id: number | string): Observable<any> {
    return this.http.get(`${this.apiURL}/${table}/${id}`);
  }

  update(table: string, id: number | string, data: any): Observable<any> {
    return this.http.patch(`${this.apiURL}/${table}/${id}`, data);
  }

  remove(table: string, id: number | string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${table}/${id}`);;
  }
  uploadImg(data: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "aksltmfh");
    return this.http.post("https://api.cloudinary.com/v1_1/web16303/image/upload", formData, {
      reportProgress: true,
    });
  }
}
