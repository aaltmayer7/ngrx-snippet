import {Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, AfterViewInit, OnChanges} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Game} from '../../models/game.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesListComponent implements AfterViewInit, OnChanges {
  @Input() games: Game[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Game>;
  displayedColumns: string[] = ['name', 'actions'];

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    if (isNullOrUndefined(this.dataSource)) {
      this.dataSource = new MatTableDataSource(this.games);
    } else {
      this.dataSource.data = this.games;
    }
  }
}
