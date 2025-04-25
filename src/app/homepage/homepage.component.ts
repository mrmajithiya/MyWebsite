import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class HomepageComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      // Import ScrollMagic dynamically
      const ScrollMagic = (await import('scrollmagic')).default;

      const controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        triggerElement: ".wel2div",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
      })
        .setClassToggle(".wel2div", "visible") // add class to reveal
        // .addIndicators() // Uncomment if you have added the plugin
        .addTo(controller);
    }
  }
}
