import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  message:string='something went wrong,pl try after some time';
  code:number=500;
  currentDate: Date = new Date(); 
  normaltext: string | number = 'hey alll!!!!'; 
  gst: number = 12.87;
  actualprice: number = 1994.5678;

}
