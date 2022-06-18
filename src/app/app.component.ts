import { Component } from '@angular/core'
import { ApiService } from '@services/api.service'
import { Observable } from 'rxjs'
import { MenuItem } from './models/menu-item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public $menu: Observable<MenuItem[]>

  constructor(
    private readonly apiService: ApiService,
  ) {
    this.$menu = this.apiService.getMenu()
  }
}
