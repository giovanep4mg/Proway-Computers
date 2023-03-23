import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  //itens recebe uma interface "IProdutoCarrinho", que pega tudo do vetor "IProduto",e que vai iniciar vazia
  itens: IProdutoCarrinho[] = [] ;

  constructor() { }

  // método que vai trazer a lista de itens salva no navegador, no "local storage"
  obtemCarrinho(){
    /**
     * JSON.parse => vai modificar de string para objeto.
     * se não tiver uma string , vai pegar um VETOR vazio "lista vazia".
     */
    this.itens = JSON.parse(localStorage.getItem("carrinho") || " [] " );
    return this.itens;

  }

  //
  adicionarAoCarrinho( produto: IProdutoCarrinho){
    // acrescenta o novo produto no carrinho
    this.itens.push(produto);

    // salvar esses produtos no "localStorage",convertendo de objeto para string
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  //método remover do carrinho
  removerProdutoCarrinho(produtoId: number){
    // vai filtra os ids que estão dentro do "itens" e apagar só o que foi selecionado
    this.itens = this.itens.filter(item => item.id != produtoId);

    //atualiza o  localStorage
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  // método
  limparCarrinho(){
    //para limpar o carrinho, vai receber um vetor vazio
    this.itens = [] ;

    //para limpar o "localStorage"
    localStorage.clear();

    //atualiza o  localStorage
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
