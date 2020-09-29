import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activePage: string ='recipes';

  public onHeaderItemClick(item: string) {
    this.activePage = item;
  }
}
