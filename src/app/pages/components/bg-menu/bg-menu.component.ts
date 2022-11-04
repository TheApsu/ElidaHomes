import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bg-menu',
  templateUrl: './bg-menu.component.html',
  styleUrls: ['./bg-menu.component.scss']
})
export class BgMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigateByUrl('/contact');
  }

}
