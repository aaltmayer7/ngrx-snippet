import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-snippet-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
