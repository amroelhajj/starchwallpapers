namespace MVCVideoGuide.Data.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public User User { get; set; }
    }
}