import {Component, OnDestroy, OnInit} from '@angular/core';
import {Incident} from "../../models/Incident.module";
import {Subject} from "rxjs";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-traited',
  templateUrl: './traited.component.html',
  styleUrls: ['./traited.component.css']
})
export class TraitedComponent implements OnInit,OnDestroy{
  apiData!: Array<Incident>;
  dtOptions: DataTables.Settings = {};  // Use DataTables.Settings type
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      destroy: true,
    };
    this.getAllTraitedIncident();
  }

  traiterIncident(id: number) {
    this.api.traiterIncident(id).subscribe((data: any) => {
      this.getAllTraitedIncident();
    });
  }

  getAllTraitedIncident() {
    this.api.getAllTraitedIncident().subscribe((data: any) => {
      this.apiData = data;
      this.dtTrigger.next(null);
    });
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
