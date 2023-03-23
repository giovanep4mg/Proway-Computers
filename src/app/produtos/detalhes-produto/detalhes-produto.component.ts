import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { CarrinhoService } from './../../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent  implements OnInit {
  // Cria a propriedade, variável "produto" que será a lista de produtos ou pode ser indefinida.
  produto: IProduto | undefined ;

  Quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService : NotificacaoService,
    private CarrinhoService: CarrinhoService,
    ){}

    //Pegar os parametros
  ngOnInit(): void {

    // vai trazer todos os parametros da rota
    const routeParams = this.route.snapshot.paramMap;

    //Para pegar o id do produto,"Number" => converte em "número"
    const produtoId = Number (routeParams.get("id"))

    //passar o id do produto,
    this.produto = this.produtosService.getOne(produtoId);

  }

  // método para adicionar o produto no carrinho
  adicionarAoCarrinho(){

    // "janelinha" de notificação, que o produto foi adicionado ao carrinho.
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");

    //cria uma variável  ligada a "interface produto"
    const produto: IProdutoCarrinho = {

      //pega tudo o que já tem dentro do produto
      ...this.produto!,
      //pega a quantidade do produto
      Quantidade : this.Quantidade
    }
    //retorna o produto escolhido salvando no "localStorage"
    this.CarrinhoService.adicionarAoCarrinho(produto);

  }


}
