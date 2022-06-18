import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MenuItem } from '@models/menu-item.model'

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedMenuComponent {
  @Input() public set menu(menu: MenuItem[]) {
    this.nestedMenu = menu
    this.firstLevel = this.nestedMenu.filter((item: MenuItem) => !item.parentId)
  }

  public nestedMenu: MenuItem[] = []

  public firstLevel: MenuItem[] = []

  public trackByNode(_: number, item: MenuItem): number {
    return item.id
  }
}
