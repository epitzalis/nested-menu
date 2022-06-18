import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GetChildNodesPipeModule } from
  '@pipes/get-child-nodes-menu/get-child-nodes-pipe.module'
import { NestedMenuComponent } from './nested-menu.component'

@NgModule({
  declarations: [NestedMenuComponent],
  imports: [CommonModule, GetChildNodesPipeModule],
  exports: [NestedMenuComponent],
})
export class NestedMenuModule {}
