import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tarefas: Tarefa[] = [];
  filtroAtivo: string = 'todas';
  mensagem: string = '';
  tipoMensagem: string = ''; // sucesso ou erro

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe({
      next: (data) => {
        this.tarefas = data;
      },
      error: (err) => {
        console.error(err);
        this.mostrarMensagem('Erro ao carregar tarefas. A API está rodando?', 'erro');
      }
    });
  }

  filtrar(status: string) {
    this.filtroAtivo = status;

    if (status === 'todas') {
      this.carregarTarefas();
      return;
    }

    this.tarefaService.getTarefasPorStatus(status).subscribe({
      next: (data) => {
        this.tarefas = data;
      },
      error: () => {
        this.mostrarMensagem('Erro ao filtrar tarefas.', 'erro');
      }
    });
  }

  deletar(id: number, titulo: string) {
    const confirmar = confirm(`Tem certeza que quer deletar a tarefa "${titulo}"?`);
    if (!confirmar) return;

    this.tarefaService.deletarTarefa(id).subscribe({
      next: () => {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
        this.mostrarMensagem('Tarefa deletada!', 'sucesso');
      },
      error: () => {
        this.mostrarMensagem('Não foi possível deletar a tarefa.', 'erro');
      }
    });
  }

  mostrarMensagem(texto: string, tipo: string) {
    this.mensagem = texto;
    this.tipoMensagem = tipo;
    // sumir a mensagem depois de 3 segundos
    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
  }

  get pendentes() {
    return this.tarefas.filter(t => t.status === 'Pendente').length;
  }

  get concluidas() {
    return this.tarefas.filter(t => t.status === 'Concluída').length;
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }
}
