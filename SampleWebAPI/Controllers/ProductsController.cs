using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using SampleWebAPI.Models;
using System.Linq;


namespace SampleWebAPI.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Product> Find()
        {
            return _context.Products.ToList();
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public IActionResult GetById(long id)
        {
            var product = _context.Products.FirstOrDefault(t => t.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return new ObjectResult(product);
        }

        [HttpGet]
        [Route("search")]
        public IEnumerable<Product> Search(string code = "", string name = "") {
            if(!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(name)) {
                return this._context.Products.Where(product => product.Name.Contains(name) || product.Code.Contains(code)).ToList();
            } else if(!string.IsNullOrEmpty(code)) {
                return this._context.Products.Where(product => product.Code.Contains(code)).ToList();
            } else if(!string.IsNullOrEmpty(name)) {
                return this._context.Products.Where(product => product.Name.Contains(name)).ToList();
            } else {
                return new List<Product>();
            }
            
        }

        [HttpPost]
        public IActionResult Create([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }

            _context.Products.Add(product);
            _context.SaveChanges();

            return CreatedAtRoute("GetProduct", new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Product product)
        {
            if (product is null || product.Id != id)
            {
                return BadRequest();
            }

            var productFound = _context.Products.FirstOrDefault(prod => prod.Id == product.Id);

            if (productFound is null)
            {
                return NotFound();
            }

            productFound.Code = product.Code;
            productFound.Name = product.Name;

            _context.Products.Update(productFound);
            _context.SaveChanges();

            return CreatedAtRoute("GetProduct", new { id = product.Id }, product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {

            var foundProduct = _context.Products.FirstOrDefault(prod => prod.Id == id);

            if (foundProduct is null)
            {
                return NotFound();
            }

            _context.Products.Remove(foundProduct);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}