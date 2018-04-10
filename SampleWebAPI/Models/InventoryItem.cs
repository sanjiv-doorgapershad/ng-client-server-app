namespace SampleWebAPI.Models {

    public class InventoryItem {

        public long Id { get; set; }
        public Product Product { get; set; }
        public int RemainingCount { get; set; }
        public int MinimumRemaining { get; set; }
    }
}