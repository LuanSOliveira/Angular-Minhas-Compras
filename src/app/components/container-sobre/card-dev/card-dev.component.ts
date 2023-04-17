import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dev',
  templateUrl: './card-dev.component.html',
  styleUrls: ['./card-dev.component.scss']
})
export class CardDevComponent {
  @Input() imagem: string = ''
  @Input() nome: string = ''
  @Input() email: string = ''
  @Input() linkedin: string = ''
  @Input() github: string = ''

}
