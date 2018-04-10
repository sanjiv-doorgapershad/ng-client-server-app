using Microsoft.EntityFrameworkCore;

namespace SampleWebAPI.Models {
    public class DataContext : DbContext {

        public DataContext(DbContextOptions<DataContext> options) : base(options) {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<InventoryItem> InventoryItems { get; set; }
    }

}