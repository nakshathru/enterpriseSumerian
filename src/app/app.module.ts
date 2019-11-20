import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MonitorOneComponent } from './monitor-one/monitor-one.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'wss://a4nv3t9e1f.execute-api.us-east-1.amazonaws.com/dev', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    MonitorOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
