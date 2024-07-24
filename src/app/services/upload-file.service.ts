import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadPrive(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadPrive?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadPhoto(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadPhoto?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadLogoStage(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadLogoStage?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadLogoPrive(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadLogoPrive?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadDemande(file: File ,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadDemande?id=${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(id:number): Observable<Array<String>> {
    return this.http.get<Array<String>>(`${this.baseUrl}/CvAnnonceStage?id=${id}`);
  }
  getCvPrive(id:number): Observable<Array<String>> {
    return this.http.get<Array<String>>(`${this.baseUrl}/CvAnnoncePrivee?id=${id}`);
  }
  getFile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
