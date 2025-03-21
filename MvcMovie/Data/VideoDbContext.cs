using Microsoft.EntityFrameworkCore;
using MVCVideoGuide.Data.Entities;

namespace MVCVideoGuide.Data
{
    public class VideoDbContext : DbContext

    {
        private readonly IConfiguration _config;

        public VideoDbContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Persons> People { get; set; }
        public DbSet<NASA> NASAIotd { get; set; }
        public DbSet<Bing> BingIotd { get; set; }

        //public DbSet<OrderProduct> OrderProduts { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config.GetConnectionString("VideoDbConnection"));
        }
    }
}