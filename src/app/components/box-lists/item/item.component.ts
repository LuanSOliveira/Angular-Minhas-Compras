import { Component, Input } from '@angular/core';

import { IconDefinition, faReply, faShare, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() nome: string = ''
  @Input() quantidade: number = 0
  @Input() status: string = ''

  iconLixo: IconDefinition = faTrash

  DefineIcon(): IconDefinition {
    if(this.status === 'lista'){
      return faShare
    }
    else{
      return faReply
    }
  }

}
