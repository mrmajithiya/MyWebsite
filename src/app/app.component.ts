import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'mywebsite';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Check the current route and hide header/footer if it's login or registration
      const currentRoute = this.router.url;
      this.showHeaderFooter = !(currentRoute === '/loginpage' || currentRoute === '/registrationpage');
    });
  }
  
}
