namespace MVCVideoGuide.Data.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public double Wallet { get; set; }
        public bool Admin { get; set; }
    }
}