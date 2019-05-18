import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Console } from '../models/console.model';

@Component({
  selector: 'app-console-panel',
  templateUrl: './console-panel.component.html',
  styleUrls: ['./console-panel.component.css']
})
export class ConsolePanelComponent implements OnInit {

  @Input()
  consoles: Console[];

  @Output()
  selectedConsole = new EventEmitter<Console>();

  constructor() { }

  ngOnInit() {
  }

  selectConsole(consoleSelected: Console): void {
    this.selectedConsole.emit(consoleSelected);
    console.log("this.selectedConsole is " + this.selectedConsole);

  }
}
