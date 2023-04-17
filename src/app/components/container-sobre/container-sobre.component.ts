import { Component } from '@angular/core';
import { IDevs } from 'src/app/interfaces/itemInterface';

@Component({
  selector: 'app-container-sobre',
  templateUrl: './container-sobre.component.html',
  styleUrls: ['./container-sobre.component.scss']
})
export class ContainerSobreComponent {

  devs: IDevs[] = [
    {
      imagem: 'https://github.com/LuanSOliveira.png',
      nome: 'Luan Santos',
      email: 'l.u.a.n@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/luan-santos-oliveira-4b2a011a3/',
      github: 'https://github.com/LuanSOliveira',
    },
    {
      imagem: 'https://github.com/eduvinicius.png',
      nome: 'Eduardo Vinicius',
      email: 'eduvinicius6@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/eduardo-vinicius-barbosa-83067921b/',
      github: 'https://github.com/eduvinicius',
    },
  ]

}
