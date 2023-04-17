import { Component } from '@angular/core';

import {IconDefinition, faCartShopping} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  iconCart: IconDefinition = faCartShopping

}
