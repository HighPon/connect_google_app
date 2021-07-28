import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {
  @Input() selectedTitle: string = "None";

  constructor() { }

  ngOnInit(): void {
  }

}
