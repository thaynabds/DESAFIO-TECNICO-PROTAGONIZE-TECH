import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  // endereço da api
  private apiUrl = 'http://localhost:5000/api/tarefas';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  criarTarefa(tarefa: any): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  editarTarefa(id: number, tarefa: any): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  deletarTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // filtrar por status (Pendente ou Concluída)
  getTarefasPorStatus(status: string): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.apiUrl}?status=${status}`);
  }
}
