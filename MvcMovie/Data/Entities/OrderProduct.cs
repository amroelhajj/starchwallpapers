namespace MVCVideoGuide.Data.Entities
{
    public class OrderProduct
    {
        public int Id { get; set; }
        public Order Order { get; set; }
        public Product Product { get; set; }
        //public int Quantity { get; set; }
    }
}