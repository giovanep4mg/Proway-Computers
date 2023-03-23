import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    /*
      total vai receber a soma da prévia dos produtos, que já tinha no carrinho
      com o preço do produto vezes a quantidade do produto.
    */
     this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.Quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number){
    // vai filtra os ids que estão dentro do "itens", e excluir somente o id selecionado
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id != produtoId);

    //para remover dentro do localStorage
    this.carrinhoService.removerProdutoCarrinho(produtoId);

    //calcular o total novamente
    this.calcularTotal();
  }

  comprar(){
    //exibe essa mensagem quando a compra for realizada
    alert("Compra realizada com sucesso!!");

    //depois limpa o carrinho
    this.carrinhoService.limparCarrinho();

    //e volta para a página de produtos
    this.router.navigate(["produtos"]);
  }

}
