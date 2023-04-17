import { Component, Input } from '@angular/core';
import { IItens } from 'src/app/interfaces/itemInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() descricao: string = ''

  listaTeste: IItens[] = [
    {
      "id" : 0,
      "nome" : 'Arroz',
      "quantidade" : 3,
      "status" : 'lista'
    },
    {
      "id" : 1,
      "nome" : 'Feijão',
      "quantidade" : 1,
      "status" : 'carrinho'
    },
  ]

}
