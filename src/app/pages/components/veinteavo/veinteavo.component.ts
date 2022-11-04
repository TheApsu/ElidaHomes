import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veinteavo',
  templateUrl: './veinteavo.component.html',
  styleUrls: ['./veinteavo.component.scss']
})
export class VeinteavoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTo(url: string){
    window.open(url, '_blank');
  }

}
