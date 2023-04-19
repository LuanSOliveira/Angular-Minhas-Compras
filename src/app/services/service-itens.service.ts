import { Injectable } from '@angular/core';
import { IItens } from '../interfaces/itemInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceItensService {

  listaItens: IItens[] = [
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

  constructor() { }
}
