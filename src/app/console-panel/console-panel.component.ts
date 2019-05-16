import { Component, OnInit, Input, Output } from '@angular/core';
import { Console } from '../models/console.model';

@Component({
  selector: 'app-console-panel',
  templateUrl: './console-panel.component.html',
  styleUrls: ['./console-panel.component.css']
})
export class ConsolePanelComponent implements OnInit {

  @Input()
  consoles: Console[];


  selectedConsole: Console;

  constructor() { }

  ngOnInit() {
  }

  selectConsole(console: Console): void {
    this.selectedConsole = console;
  }

}
