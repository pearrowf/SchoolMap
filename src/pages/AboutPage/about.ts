import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class className {
@ViewChild('layout') canvasRef;
   image = 'http://p6cdn4static.sharpschool.com/UserFiles/Servers/Server_117406/Image/Pickizzle/FHS%201st%20floor%20map.jpg';
ngAfterViewInit() {
  let canvas = this.canvasRef.nativeElement;
   let context = canvas.getContext('2d');

    

    }

    //methodName() {
        // this.ionicCanvas.toggleDrawingMode()
        // this.ionicCanvas.addText("string")
        // this.ionicCanvas.undo()
        // this.ionicCanvas.save()
   }

