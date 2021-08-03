import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    "https://4.imimg.com/data4/AD/OF/ANDROID-53662314/product-500x500.jpeg",
    "https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/orangejewelleryset.jpeg",
    "https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/orangelotusearrings.jpg",
    "https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/pinkgreenbangles.jpg",
    "https://img1.exportersindia.com/product_images/bc-full/2019/10/6696623/handmade-silk-thread-jwelleries-1570973626-5114471.jpeg",
    "https://i.etsystatic.com/14015805/r/il/360f15/1184852982/il_fullxfull.1184852982_3yah.jpg"
  ];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}