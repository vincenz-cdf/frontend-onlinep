import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'energy-forge-front';

  constructor(private router: Router) { }

  ngAfterViewInit() {
    console.log(this.router.url)
    if (this.router.url.includes('4Ma9AZferq5')) {
      console.log('URL contains 4Ma9AZferq5');
      // Additional logic here if the URL contains '4Ma9AZferq5'
    }
  }
}
