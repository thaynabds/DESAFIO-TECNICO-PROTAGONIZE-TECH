namespace ProtagonizetechAPI.DTOs
{
    // usei DTO pra não expor o model direto na requisição
    public class TarefaDto
    {
        public string Titulo { get; set; } = "";
        public string Descricao { get; set; } = "";
        public string Status { get; set; } = "Pendente";
    }
}
