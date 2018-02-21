import { Component, OnInit } from '@angular/core';
import { Eventobj } from './eventobj';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

    eventList:any[]=[];
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit() {

    if(this.eventList === []){
      
    }
   this.eventList=== this.eventService.getAllEventData();
    console.log(this.eventList);
  }

  addEvent(){
    this.router.navigate(['/event/add']);
  }

  

  showEvent(id:any){
    console.log(id);
    this.router.navigate(['event',id]);

  }
}
