import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['../add-product/add-product.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  mail:string;
  message:string;

  ngOnInit(): void {
  }

}
