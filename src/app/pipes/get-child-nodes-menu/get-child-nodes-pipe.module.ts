import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GetChildNodesPipe } from './get-child-nodes.pipe'

@NgModule({
  declarations: [GetChildNodesPipe],
  imports: [CommonModule],
  exports: [GetChildNodesPipe],
})
export class GetChildNodesPipeModule {}
