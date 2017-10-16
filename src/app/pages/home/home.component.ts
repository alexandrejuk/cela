import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutors = [
    { name: 'Node', descriptions: '', img: 'assets/img/node.png', autor: 'Alexandre dos Santos Soares' },
    { name: 'Css', descriptions: '', img: 'assets/img/css.png', autor: 'Vitor Silva Lima' },
    { name: 'Js', descriptions: '', img: 'assets/img/js.png', autor: 'Caio Santos' },
    { name: 'Html', descriptions: '', img: 'assets/img/html5.png', autor: 'Alan Brado' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
