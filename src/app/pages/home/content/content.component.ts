import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  tutors = [
    { name: 'Node', descriptions: '', img: 'assets/img/angular.jpg', autor: 'Alexandre dos Santos', hours: '9 horas', rate: 4.5 },
    { name: 'Css', descriptions: '', img: 'assets/img/angular.jpg', autor: 'Vitor Silva Lima', hours: '8 horas', rate: 4.4 },
    { name: 'Js', descriptions: '', img: 'assets/img/angular.jpg', autor: 'Caio Santos', hours: '7.5 horas', rate: 4.0 },
    { name: 'Html', descriptions: '', img: 'assets/img/angular.jpg', autor: 'Alan Brado', hours: '5 horas', rate: 4.1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
