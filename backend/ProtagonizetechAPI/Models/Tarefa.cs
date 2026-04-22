namespace ProtagonizetechAPI.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = "";
        public string Descricao { get; set; } = "";
        // status pode ser "Pendente" ou "Concluída"
        public string Status { get; set; } = "Pendente";
        public DateTime DataCriacao { get; set; } = DateTime.Now;
    }
}
