import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  //faz a ligação entre a banco de dados e o front-End
  produtos: IProduto[] = produtos;



  constructor() { }

  // vai retorna a lista de produtos
  getAll(){
    return this.produtos;

  }

  // vai retorna uma produto de acordo com seu id
  getOne(produtoId: number){
    //retorna um produto,procurar(de acordo com essa condiçao)
    return this.produtos.find(produto => produto.id == produtoId);
  }


}
