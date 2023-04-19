import { Component, Input } from '@angular/core';
import { IItens } from 'src/app/interfaces/itemInterface';
import { ServiceItensService } from 'src/app/services/service-itens.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() descricao: string = ''
  @Input() statusLista: string = ''

  constructor (private ServiceItens: ServiceItensService){
    
  }

  listaItens: IItens[] = this.ServiceItens.listaItens

}
