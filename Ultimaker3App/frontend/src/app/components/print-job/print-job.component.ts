import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {PrintJob} from "../../shared/PrintJob";
import {Time} from "../../shared/Time";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Http, Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-print-job',
  templateUrl: './print-job.component.html',
  styleUrls: ['./print-job.component.css']
})
export class PrintJobComponent implements OnInit {
  printJob: PrintJob;
  startedPrintJob;
  time_remaining: Time=new Time(0);
  time_elapsed: Time=new Time(0);
  time_total: Time= new Time(0);
 abortedPrintJob;



  constructor(private ultimakerService: UltimakerService,private http: HttpClient) {
    this.printJob= new PrintJob();
    this.printJob.time_total = 0;
    this.printJob.time_elapsed = 0;
    this.printJob.name = "-";
    this.printJob.source = "-";
    this.printJob.source_user = "-";
    this.printJob.source_application = "-";

    ultimakerService.getPrintJob().subscribe(printJobStatus => {
      this.printJob=printJobStatus;
      this.printJob.time_remaining = this.printJob.time_total - this.printJob.time_elapsed;
      this.time_remaining = new Time(this.printJob.time_remaining);
      this.time_elapsed = new Time(this.printJob.time_elapsed);
      this.time_total = new Time(this.printJob.time_total);
    });
  }

  ngOnInit() {
  }

  processFile(event) {
   let fileList: FileList= event.target.files;
   if(fileList.length>0){
     let file: File=fileList[0];
     let formData:FormData= new FormData();
     formData.append('uploadFile', file, file.name);

     this.http.post<any> ("http://140.78.73.163/api/v1/print_job", {
       jobname: "asdfasdf",
       file: formData
     }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="d91232471f868f71d14199a4cbd83c12", uri="/api/v1/print_job", response="0a1b6f57ce9a515933424b37ac7f7eea", qop=auth, nc=00000002, cnonce="3f84ef6089ff35bc"')
         .set('Content-Type', 'application/json')}).map(res=>res.json()).subscribe(result=>this.startedPrintJob)


   }
  }

  printFile() {
    this.ultimakerService.startPrintJob().subscribe(result => { //Auslesen und speichern des Namens des Druckers
      this.startedPrintJob=result;
    });
  }

  abortPrintJob(){
    this.ultimakerService.abortPrintJob().subscribe(result => {
      this.abortedPrintJob = result;
    })
  }
}
