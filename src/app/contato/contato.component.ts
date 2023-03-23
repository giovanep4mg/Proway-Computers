import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent  implements OnInit{
// formBuilder, usado para fazer validações,
// os campos foram colocado num grupo onde vai fazer algumas validações.

  formContato = this.fb.group({
    // inicia vazio
    nome: ['',[
    // minímo de caracteres será 4
    Validators.minLength(4),
    // é obrigatório preencher esse campo.
    Validators.required
  ]],
    assunto: ['',[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone:['',[
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['',[
      Validators.email,
      Validators.required
    ]],
    mensagem: ['',[
      Validators.minLength(20),
      Validators.required
    ]]
  });



  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

  }

  enviarFormulario(){
    alert("Sua mensagem foi enviada.");
    this.formContato.reset();
  }



}
