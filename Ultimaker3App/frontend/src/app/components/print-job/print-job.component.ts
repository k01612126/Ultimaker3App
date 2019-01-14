import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {PrintJob} from "../../shared/PrintJob";

@Component({
  selector: 'app-print-job',
  templateUrl: './print-job.component.html',
  styleUrls: ['./print-job.component.css']
})
export class PrintJobComponent implements OnInit {
  printJob: PrintJob;



  constructor(private ultimakerService: UltimakerService) {
    this.printJob= new PrintJob();
    this.printJob.time_total = 10;
    this.printJob.time_elapsed = 2;
    this.printJob.name = "hi";
    this.printJob.source = "source";
    this.printJob.source_user = "user";
    this.printJob.source_application = "source application";

    ultimakerService.getPrintJob().subscribe(printJobStatus => {
      this.printJob=printJobStatus;
      this.printJob.time_remaining = this.printJob.time_total - this.printJob.time_elapsed;
    });
  }

  ngOnInit() {
  }

}
