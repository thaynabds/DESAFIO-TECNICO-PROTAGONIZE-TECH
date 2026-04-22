using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProtagonizetechAPI.Data;
using ProtagonizetechAPI.DTOs;
using ProtagonizetechAPI.Models;

namespace ProtagonizetechAPI.Controllers
{
    [ApiController]
    [Route("api/tarefas")]
    public class TarefasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TarefasController(AppDbContext context)
        {
            _context = context;
        }

        // listar todas as tarefas
        // também dá pra filtrar por status passando ?status=Pendente na url
        [HttpGet]
        public async Task<IActionResult> GetTarefas([FromQuery] string? status)
        {
            var tarefas = await _context.Tarefas.ToListAsync();

            if (!string.IsNullOrEmpty(status))
            {
                tarefas = tarefas.Where(t => t.Status == status).ToList();
            }

            return Ok(tarefas);
        }

        // buscar uma tarefa pelo id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTarefa(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);

            if (tarefa == null)
            {
                return NotFound("Tarefa não encontrada.");
            }

            return Ok(tarefa);
        }

        // criar nova tarefa
        [HttpPost]
        public async Task<IActionResult> PostTarefa([FromBody] TarefaDto dto)
        {
            if (string.IsNullOrEmpty(dto.Titulo))
            {
                return BadRequest("O título não pode ser vazio.");
            }

            var novaTarefa = new Tarefa
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                Status = dto.Status,
                DataCriacao = DateTime.Now
            };

            _context.Tarefas.Add(novaTarefa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTarefa), new { id = novaTarefa.Id }, novaTarefa);
        }

        // editar uma tarefa existente
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarefa(int id, [FromBody] TarefaDto dto)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);

            if (tarefa == null)
            {
                return NotFound("Tarefa não encontrada.");
            }

            if (string.IsNullOrEmpty(dto.Titulo))
            {
                return BadRequest("O título não pode ser vazio.");
            }

            tarefa.Titulo = dto.Titulo;
            tarefa.Descricao = dto.Descricao;
            tarefa.Status = dto.Status;

            await _context.SaveChangesAsync();

            return Ok(tarefa);
        }

        // deletar uma tarefa
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarefa(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);

            if (tarefa == null)
            {
                return NotFound("Tarefa não encontrada.");
            }

            _context.Tarefas.Remove(tarefa);
            await _context.SaveChangesAsync();

            return Ok("Tarefa deletada com sucesso.");
        }
    }
}
