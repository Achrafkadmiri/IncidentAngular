import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Incident} from "../../models/Incident.module";
import {Subject} from "rxjs";
import {ApiService} from "../../services/api.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit,OnDestroy,AfterViewInit{
  apiData!: Array<Incident>;
  countNoTraited: any;
  countAll: any;
  dtOptions: DataTables.Settings = {};  // Use DataTables.Settings type
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.getAllNonTraitedIncident();
  }

  traiterIncident(id: number) {
    this.api.traiterIncident(id).subscribe( {
      next :(data) =>{
      Swal.fire('File Traited', 'Successfully', 'success')
      this.getAllNonTraitedIncident();
    }
    });
  }
  popup(msg:String){
    if(msg.includes("Invalid VIS")){
      Swal.fire('<h3>Solution Notes for VIS Pattern Enforcement</h3>',
        '<ul><li style="text-align: left;font-size: 16px">Ensure that VIS elements conform to the pattern of 8 characters mixed between letters and numbers.</li><br><li style="text-align: left;font-size: 16px">Example of valid VDS:<b> A1B2C3D4, 1234ABCD</b> </li></ul>',
      )
    }
    if(msg.includes("Invalid VDS")){
      Swal.fire('<h3>Solution Notes for VDS Pattern Enforcement</h3>',
        '<ul><li style="text-align: left;font-size: 16px">Ensure that VDS elements conform to the pattern of 6 characters mixed between letters and numbers.</li><br><li style="text-align: left;font-size: 16px">Example of valid VDS:<b>A1B2C3, 123ABC</b> </li></ul>',
      )
    }
    if(msg.includes("Invalid WMI")){
      Swal.fire('<h3>Solution Notes for WMI Pattern Enforcement</h3>',
        '<ul><li style="text-align: left;font-size: 16px">Ensure that WMI elements conform to the list of valid WMI.</li><br><li style="text-align: left;font-size: 16px">Example of list WMI:<br> [VF1|VF3|VF4|VF6|VF7|VF8 ...]</li></ul>',
      )
    }
    if(msg.includes("XML")){
      Swal.fire('<h3>Solution Notes for XML Syntax error</h3>',
        '<ul><li style="text-align: left;font-size: 16px">Identify and resolve XML syntax errors to ensure the XML files are well-formed and valid.</li></ul>' +
        '<ul>\n' +
        '        <li style="text-align: left;font-size: 16px"><strong>Mismatched Tags:</strong> Opening and closing tags do not match.</li>\n' +
        '        <li style="text-align: left;font-size: 16px"><strong>Missing Tags:</strong> Missing closing tags or incomplete elements.</li>\n' +
        '        <li style="text-align: left;font-size: 16px"><strong>Invalid Characters:</strong> Use of illegal characters (e.g., <code>&amp;</code>, <code>&lt;</code>, <code>&gt;</code>) that are not properly escaped.</li>\n' +
        '        <li style="text-align: left;font-size: 16px"><strong>Incorrect Attribute Syntax:</strong> Missing quotes around attribute values or incorrect attribute formatting.</li>\n' +
        '        <li style="text-align: left;font-size: 16px"><strong>Unescaped Characters:</strong> Characters like <code>&amp;</code>, <code>&lt;</code>, and <code>&gt;</code> that need to be escaped as <code>&amp;amp;</code>, <code>&amp;lt;</code>, and <code>&amp;gt;</code>.</li>\n' +
        '    </ul>',
      )
    }}

  getAllNonTraitedIncident() {

    this.api.getAllNonTraitedIncident().subscribe((data: any) => {
      this.apiData = data;
      this.countNoTraited = data.length;
      this.getCountTraitedIncident();
      this.reinitializeTable()

    });
  }

  getCountTraitedIncident() {
    this.api.getAllTraitedIncident().subscribe((data: any) => {
      this.countAll = data.length;

    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }
  reinitializeTable() {
    $('#example').DataTable().destroy();
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    const table = $('#example').DataTable();
    if (table) {
      table.destroy();
    }
  }

}
