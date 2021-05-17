import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-program',
  templateUrl: './space-program.component.html',
  styleUrls: ['./space-program.component.scss']
})
export class SpaceProgramComponent implements OnInit {

  constructor() { }
  @Input() mission;
  ngOnInit() {
  }

}
