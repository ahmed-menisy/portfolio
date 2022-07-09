import { PortimgsService } from './../portimgs.service';
import { Component, OnInit } from '@angular/core';
import { Imglist } from '../imglist';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  imgList: Imglist[] = [];
  titleImg: string = '';
  urlImg: string = '';
  demo: string = '';
  show: boolean = false;
  constructor(private _imgList: PortimgsService) {}
  ngOnInit(): void {
    this.imgList = this._imgList.imgList;
  }
  // Show Data Model
  showData(item: Imglist) {
    this.titleImg = item.title;
    this.urlImg = item.url;
    this.demo = item.demo;
    this.show = true;
  }
  closeData() {
    this.show = false;
  }
}
