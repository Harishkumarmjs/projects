import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-swiper-example',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminComponent {



}