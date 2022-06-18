import { Pipe, PipeTransform } from '@angular/core'
import { MenuItem } from '@models/menu-item.model'

@Pipe({ name: 'getChildNodes' })
export class GetChildNodesPipe implements PipeTransform {
  public transform(menu: MenuItem[], id: number): MenuItem[] {
    return menu.filter((item: MenuItem) => item.parentId === id)
  }
}
