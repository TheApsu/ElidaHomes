import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-green-btn',
  templateUrl: './green-btn.component.html',
  styleUrls: ['./green-btn.component.scss']
})
export class GreenBtnComponent implements OnInit {
  @Input() contact: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goContact(){
    this.router.navigateByUrl('contact');
  }
}
