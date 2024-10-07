import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-corosoul',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './corosoul.component.html',
  styleUrls: ['./corosoul.component.css'],
})
export class CorosoulComponent implements AfterViewInit {
  private swiper!: Swiper; 

  constructor() {}

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  nextSlide() {
    this.swiper.slideNext(); 
  }

  prevSlide() {
    this.swiper.slidePrev();
}
}
