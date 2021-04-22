using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // GET: api/<ProductController>
        [HttpGet]
        public List<Product> Get()
        {
            Product product1 = new Product()
            {
                Id = 101,
                Name = "Product 1",
                Availability = 1,
                Description = "Product 1 Description"
            };

            Product product2 = new Product()
            {
                Id = 102,
                Name = "Product 2",
                Availability = 6,
                Description = "Product 2 Description"
            };

            Product product3 = new Product()
            {
                Id = 103,
                Name = "Product 3",
                Availability = 5,
                Description = "Product 3 Description"
            };

            Product product4 = new Product()
            {
                Id = 104,
                Name = "Product 4",
                Availability = 34,
                Description = "Product 4 Description"
            };

            List<Product> products = new List<Product>(2);
            products.Add(product1);
            products.Add(product2);
            products.Add(product3);
            products.Add(product4);

            Console.WriteLine(products);
            foreach (Product aPart in products)
            {
                Console.WriteLine(aPart.Id);
                Console.WriteLine(aPart.Name);
                Console.WriteLine(aPart.Availability);
                Console.WriteLine(aPart.Description);
            }

            return products;
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProductController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
