import { Component } from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {equal} from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  redColor = '#ff2621';
  yellowColor = '#ff8922';
  blueColor = '#1313ff';
  startColor1 = this.redColor;
  startColor2 = this.yellowColor;
  myFontSize = '30px';
  myPadding = '10px';
  startColorButtonClick = this.yellowColor;
  myMessage = '';
  mySpace = '';

  onClickSentMessage(yourMessage) {
    this.myMessage = yourMessage;
    console.log('Receive Message ==> ' + this.myMessage);

    if (this.myMessage === '') {
      window.alert('Have Space Please Fill Something');
    } else {
      window.alert('Your Message ==> ' + this.myMessage);
    }


  }




  onMouseOver() {
    this.startColor1 = this.blueColor;
  }

  onMouseOverButtonClick() {
    this.startColorButtonClick = this.blueColor;
  }

  onMouseOverLast() {
    this.startColor2 = this.blueColor;
  }

  onMouseOut() {
    this.startColor1 = this.redColor;
  }

  onMouseOutButtonClick() {
    this.startColorButtonClick = this.yellowColor;
  }

  onMouseOutLast() {
    this.startColor2 = this.yellowColor;
  }






  onMyClick() {

    console.log('You Click onMyClick');
    window.alert('You Click onMyClick');

  }

  onMyDoubleClick() {
    window.alert('Double Click');
  }



} // App Component Class
