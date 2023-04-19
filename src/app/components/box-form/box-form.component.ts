import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IItens } from 'src/app/interfaces/itemInterface';
import { ServiceItensService } from 'src/app/services/service-itens.service';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent implements OnInit {
  listaDescricao: string[] = ['Informe o produto', 'Informe a quantidade'];
  listaTipos: string[] = ['text', 'number']

  formulario!: FormGroup

  constructor(
    private ServiceItens: ServiceItensService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      item: ['', Validators.compose([ //O compose é utilizado para quando há a necessidade de se atribuir mais de um validador para o campo.
        Validators.required, //Invalida o form se não ouver nada escrito no campo.
        Validators.pattern(/(.|\s)*\S(.|\s)*/), //Invalida o form se ouver apénas espaços em branco no campo.
      ])],
      quantidade: [1, Validators.compose([
        Validators.required,
        Validators.min(1), //Invalida o form se o valor for abaixo do definido.
      ])],
    })
  }

  listaItens: IItens[] = this.ServiceItens.listaItens

  Submeter(e: Event):void{
    e.preventDefault()

    console.log(this.formulario) //Console para verificar a Validade do form (REMOVER DEPOIS)
    console.log(this.formulario.get('item')?.errors) //Console para verificar o tipo de erro apresentado no campo definido (REMOVER DEPOIS)

    if(this.formulario.valid){      
      let novoItem: IItens = {
        id: this.listaItens.length,
        nome: this.formulario.value.item,
        quantidade: this.formulario.value.quantidade,
        status: 'lista'
      }
      
      this.ServiceItens.listaItens.push(novoItem)
    }
  }

}
