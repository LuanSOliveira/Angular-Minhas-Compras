import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPaiComponent } from './components/container-pai/container-pai.component';
import { ContainerSobreComponent } from './components/container-sobre/container-sobre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'minhasCompras',
    pathMatch: 'full'
  },
  {
    path: 'minhasCompras',
    component: ContainerPaiComponent,
  },
  {
    path: 'sobre',
    component: ContainerSobreComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
