import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {


  constructor(private snackBar: MatSnackBar) { }


  //método
  notificar(mensagem: string){
    this.snackBar.open(mensagem, "OK",

    //configuração de quanto tempo vai durar, e onde vai ficar a "janelinha"
    { duration: 2000 ,
    verticalPosition: "top",
    horizontalPosition: "center"

  });


  }

}
