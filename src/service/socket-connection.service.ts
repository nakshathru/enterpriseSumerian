import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { Observable } from 'rxjs';
import {w3cwebsocket} from 'websocket'

const socketUrl = 'wss://a4nv3t9e1f.execute-api.us-east-1.amazonaws.com/dev';
@Injectable({
  providedIn: 'root'
})
export class SocketConnectionService {

  private client = new w3cwebsocket(socketUrl);


  constructor() {
   }

  getMessage= new Observable (observer => {
    this.client.onmessage = function(e) {
      if (typeof e.data === 'string') {
          observer.next(e.data);
          observer.complete();
          console.log("Received: '" + e.data + "'");
      }
  };
   })





}
