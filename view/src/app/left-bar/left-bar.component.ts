import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent {

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  public a = this.generateList();
  generateList() {
    let a = [];
    for(let i = 0; i < 30; i++) {
      a.push("リスト" + i);
    }
    return a;
  }

  selectedValue: string = this.a.length >= 1 ? this.a[0] : "Empty";

  onClick(value: string) {
    this.selectedValue = value;
  }

  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
