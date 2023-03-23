import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  // rota para a página de produtos
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then((m) => m.ProdutosModule) },

  // rota pata a página produtos, quando não for digitado nada
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  //rota para a página carrinho
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },

  //rota para a página contato
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },

  //rota para carregar a página não encontrada
  {path:'**',component: NaoEncontradaComponent}

];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
