import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private elRef: ElementRef,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (this.location.path() !== '') {
        document.querySelector('nav').classList.add('navbar--sticky');
      }
    });
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollNumber =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   if (scrollNumber > 100) {
  //     document.querySelector('nav').classList.add('navbar--purple');
  //   } else {
  //     document.querySelector('nav').classList.remove('navbar--purple');
  //   }
  // }
}
