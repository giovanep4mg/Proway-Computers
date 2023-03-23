import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },

  //quando for colocado na barra de navegação , barra e id irá abrir essa página.
  { path:':id', component: DetalhesProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
