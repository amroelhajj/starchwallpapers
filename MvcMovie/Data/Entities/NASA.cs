using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MVCVideoGuide.Data.Entities
{
    public class NASA
    {
        public int Id { get; set; }
        public string Copyright { get; set; }
        public string Date { get; set; }
        public string Tooltip { get; set; }
        public string Hdimg { get; set; }
        public string Title { get; set; }
        public string Thumbnail { get; set; }
    }
}