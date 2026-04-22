import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  // dados do formulário
  titulo: string = '';
  descricao: string = '';
  status: string = 'Pendente';

  editando: boolean = false;
  tarefaId: number | null = null;
  mensagem: string = '';
  tipoMensagem: string = '';
  salvando: boolean = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // verifica se tem id na url (se sim é edição)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.tarefaId = parseInt(id);
      this.carregarTarefa(this.tarefaId);
    }
  }

  carregarTarefa(id: number) {
    this.tarefaService.getTarefaById(id).subscribe({
      next: (tarefa) => {
        this.titulo = tarefa.titulo;
        this.descricao = tarefa.descricao;
        this.status = tarefa.status;
      },
      error: () => {
        this.mostrarMensagem('Não consegui carregar a tarefa.', 'erro');
      }
    });
  }

  salvar() {
    if (!this.titulo.trim()) {
      this.mostrarMensagem('O título é obrigatório!', 'erro');
      return;
    }

    const dados = {
      titulo: this.titulo,
      descricao: this.descricao,
      status: this.status
    };

    this.salvando = true;

    if (this.editando && this.tarefaId) {
      this.tarefaService.editarTarefa(this.tarefaId, dados).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.mostrarMensagem('Erro ao salvar. Tente novamente.', 'erro');
          this.salvando = false;
        }
      });
    } else {
      this.tarefaService.criarTarefa(dados).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.mostrarMensagem('Erro ao criar tarefa.', 'erro');
          this.salvando = false;
        }
      });
    }
  }

  mostrarMensagem(texto: string, tipo: string) {
    this.mensagem = texto;
    this.tipoMensagem = tipo;
    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
  }
}
