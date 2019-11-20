import { Component, OnInit } from '@angular/core';
import { SocketConnectionService } from 'src/service/socket-connection.service';

@Component({
  selector: 'app-monitor-one',
  templateUrl: './monitor-one.component.html',
  styleUrls: ['./monitor-one.component.scss']
})
export class MonitorOneComponent implements OnInit {
    message:any;
  constructor( private socket : SocketConnectionService) { }
  

  ngOnInit() {
this.socket.getMessage.subscribe(data=>{
  console.log(data);
  this.message=data
})
  }

}
