import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UploadFileService} from "../../services/upload-file.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit{
    fileInfos!: Observable<Array<String>>;

    id!: number;
    statut!:String;
 constructor(private uploadService:UploadFileService,private route:ActivatedRoute) {
 }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //console.log(params);
      this.id=+params['id'];
      this.statut = params['statut'];


    });
    if (this.statut == 'stage'){
      this.fileInfos = this.uploadService.getFiles(this.id);
    }else if(this.statut == 'prive'){
      this.fileInfos = this.uploadService.getCvPrive(this.id);
    }else {
      //this.fileInfos = this.uploadService.getFiles(this.id);
    }

  }
}
