import { Component } from '@angular/core'
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}
}
