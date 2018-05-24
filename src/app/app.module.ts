import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material'
import { MyNavComponent } from './my-nav/my-nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MyDashComponent } from './my-dash/my-dash.component'
import { MyTableComponent } from './my-table/my-table.component'
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  {
    path: '',
    component: MyDashComponent
  },
  { path: 'table', component: MyTableComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
