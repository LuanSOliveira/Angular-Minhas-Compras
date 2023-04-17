import { Component } from '@angular/core';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent {
  listaDescricao: string[] = ['Informe o produto', 'Informe a quantidade'];
  listaTipos: string[] = ['text', 'number']

}
