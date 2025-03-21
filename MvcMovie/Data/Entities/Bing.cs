using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MVCVideoGuide.Data.Entities
{
    public class Bing
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Url { get; set; }
        public string Copyright { get; set; }
        public string Title { get; set; }
    }
}
