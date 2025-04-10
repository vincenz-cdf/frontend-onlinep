import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  years: string = "";
  days: string= "";
  hours: string= "";
  minutes: string= "";
  seconds: string= "";

  backgroundImage: string = 'assets/images/yo.png'; // Replace with your actual image filename


  constructor() { }

  ngOnInit(): void {
    console.log("test")
    this.startTimer();
  }

  startTimer() {
    const startTime = new Date(); // The start time from the screenshot
    setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startTime.getTime();

      // Calculate each time unit
      let yearsNum = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      let daysNum = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      let hoursNum = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutesNum = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let secondsNum = Math.floor((difference % (1000 * 60)) / 1000);

      // Format each time unit with two digits
      this.years = yearsNum.toString().padStart(2, '0');
      this.days = daysNum.toString().padStart(2, '0');
      this.hours = hoursNum.toString().padStart(2, '0');
      this.minutes = minutesNum.toString().padStart(2, '0');
      this.seconds = secondsNum.toString().padStart(2, '0');
    }, 1000);
  }
}