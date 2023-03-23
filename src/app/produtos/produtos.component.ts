import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {
  // produtos recebe um vetor "IProduto" ou não é definida.
  produtos: IProduto [] | undefined;

  //Para importa os serviços de produtos, serviços de rotas
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    ){}


  //Para obter todos os produtos na inicialização
  ngOnInit(): void {
    //para pegar todos os produtos de "IProduto", do banco de dados.
    const produtos = this.produtosService.getAll();

    //quando tiver uma mudança na descrição, ele vai pegar a rota de acordo com essa descrição, que vai ficar em letra minuscula
    //Quando o usuário digitar no campo de pesquisa = "descricao", vai deixar tudo em letras minúsculas = "lowerCase",
    //vai pegar a rota desse "produto"
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();


      // Se o campo de pesquisa estiver preenchido,
      // pega a descricao em letras minúsculas,
      // filtra, para vê se tem esse produto de acordo com a "descricao", ai vai mostrar ele ou eles.
      if(descricao){
          this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
          return;
      }
      //se não tiver nada na "descricao", vai fazer nada , apenas mostrar a página produtos.
      this.produtos = produtos;

    });

}

}
