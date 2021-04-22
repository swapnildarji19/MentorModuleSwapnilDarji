using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PaymentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public List<Product> products { get; set; }

        public IEnumerable<UserProduct> userProducts { get; set; }
        public PaymentController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                "https://localhost:44361/api/Product");

            var client = _clientFactory.CreateClient();

            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            
            var response = await client.SendAsync(request);
            
            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStreamAsync();
          
                products = await JsonSerializer.DeserializeAsync
                    <List<Product>>(responseStream);

         
                foreach (Product p in products)
                {
                    Console.WriteLine(p.Id);
                    Console.WriteLine(p.Name);
                    Console.WriteLine(p.Availability);
                    Console.WriteLine(p.Description);
                }
          
                
                return Ok();
            }
            else
            {
                products = new List<Product>();
            }
            return Unauthorized();
        }

        // GET: api/<PaymentController>
        //[HttpGet]
        //public IActionResult Get()
        //{
        //    Random rand = new Random();
        //    int randomLessThan100 = rand.Next(100);

        //    if (1 == (randomLessThan100 & 1))
        //    {
        //        return Ok();
        //    }
        //    return Unauthorized();
        //}

        // GET api/<PaymentController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PaymentController>
        //[HttpPost]
        //public async Task<string> Check([FromBody]UserProduct userProduct)
        //{
        //    Console.WriteLine("Hi!");
        //    var request = new HttpRequestMessage(HttpMethod.Get,
        //        "https://localhost:44361/api/Product");

        //    var client = _clientFactory.CreateClient();

        //    client.DefaultRequestHeaders.Accept.Add(
        //        new MediaTypeWithQualityHeaderValue("application/json"));

        //    var response = await client.GetAsync("products");
        //    Console.WriteLine(response);
        //    if (response.IsSuccessStatusCode)
        //    {
        //        Console.WriteLine("-----!");
        //        var responseStream = await response.Content.ReadAsStreamAsync();
        //        Console.WriteLine(responseStream);
        //        products = await JsonSerializer.DeserializeAsync
        //            <List<Product>>(responseStream);

        //        //foreach (int i in products)
        //        //{
        //        //    Console.WriteLine(i);
        //        //}
        //        //int result = from s in products
        //        //             where s.Id == 103
        //        //             select s.Id;
        //        Console.WriteLine(products);
        //        IEnumerable<int> result = from s in products
        //                                  where s.Id == 103
        //                                  select s.Availability;
        //        Console.WriteLine(result);
        //        int res = result.First();
        //        if (res == 5)
        //        {
        //            return "true";
        //        }
        //        else
        //        {
        //            return "false";
        //        }

        //    }
        //    else
        //    {
        //        products = new List<Product>();
        //        Console.WriteLine("Hi!");
        //    }
        //    return "hidsf";
        //}

        // PUT api/<PaymentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PaymentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
