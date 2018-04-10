using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

using SampleWebAPI.Models;

namespace SampleWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class InventoryController : Controller
    {
        private readonly DataContext _context;

        public InventoryController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<InventoryItem> GetAllInventoryItems() 
        {
            return _context.InventoryItems.ToList();
        }
    }
}