namespace MVCVideoGuide.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public double Cost { get; set; }
        public string Img { get; set; }
        public string Tag { get; set; }
        public User User { get; set; }
    }
}