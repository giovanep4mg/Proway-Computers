import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";

  //para pesquisar seja na página principal ou na página de contato
  pesquisar(){
    // se tiver uma descricao
    if(this.descricao){
      // pega a descricao do produto e navega até a página de produtos, e lá verifica se tem a descricao do produto
      this.router.navigate(["produtos"],{queryParams:{ descricao: this.descricao}});
       return;
    }
    // se não tem nada na descricao, apenas vai navegar até a página, produtos
    this.router.navigate(["produtos"]);
  }

  constructor(
    private router: Router,
    ){}

  ngOnInit(): void {

  }

}
