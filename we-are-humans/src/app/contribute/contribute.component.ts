import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }


  openGithub(): void {
    window.open('https://github.com/shlokagarwal/wearehumans');
  }

}
