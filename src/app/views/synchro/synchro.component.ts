import { Component, OnInit } from '@angular/core';
import {SynchroService} from '../../services/synchro.service';

@Component({
  selector: 'app-synchro',
  templateUrl: './synchro.component.html',
  styleUrls: ['./synchro.component.css']
})
export class SynchroComponent implements OnInit {

  /** Message of synchro result */
  resultMessage: string;

  synchronizing = false;

  constructor(private service: SynchroService) { }

  ngOnInit() {
  }

  doSynchro() {
    this.synchronizing = true;
    this.service.doSynchro().subscribe(result => {
      this.resultMessage = result.toString();
      this.synchronizing = false;
    });
  }
}
