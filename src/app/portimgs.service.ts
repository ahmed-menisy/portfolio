import { Injectable } from '@angular/core';
import { Imglist } from './imglist';

@Injectable({
  providedIn: 'root',
})
export class PortimgsService {
  imgList: Imglist[] = [
    {
      title: 'Special Design',
      url: './assets/images/pro-1.png',
      demo: 'https://ahmed-menisy.github.io/specialDesign-html-css-js/',
    },
    {
      title: 'Crud System',
      url: './assets/images/pro-2.png',
      demo: 'https://ahmed-menisy.github.io/Crud-System/',
    },
    {
      title: 'Angora',
      url: './assets/images/pro-3.png',
      demo: 'https://ahmed-menisy.github.io/angola-bootstrap/',
    },
    {
      title: 'Weather',
      url: './assets/images/pro-4.png',
      demo: 'https://ahmed-menisy.github.io/weather/',
    },
    {
      title: 'Elearning Courses',
      url: './assets/images/pro-5.png',
      demo: 'https://ahmed-menisy.github.io/EleaningCourses/',
    },
    {
      title: 'Simone',
      url: './assets/images/pro-6.png',
      demo: 'https://ahmed-menisy.github.io/simone-css/',
    },
    {
      title: 'Arlo',
      url: './assets/images/pro-7.png',
      demo: 'https://ahmed-menisy.github.io/arlo-bootstrap/',
    },
    {
      title: 'Movies Api',
      url: './assets/images/pro-8.png',
      demo: 'https://ahmed-menisy.github.io/movies-api-cu/',
    },
    {
      title: 'DevFolio',
      url: './assets/images/pro-9.png',
      demo: 'https://ahmed-menisy.github.io/DevFolio-bootstrap/',
    },
  ];
  constructor() {}
}
