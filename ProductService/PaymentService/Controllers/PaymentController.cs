using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using Newtonsoft.Json;



namespace PaymentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public List<Product> products { get; set; }

        public IEnumerable<UserProduct> userProducts { get; set; }
       
        public PaymentController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }


        //POST api/<PaymentController>
        [HttpPost]
        public async Task<IActionResult> Check([FromBody] List<UserProduct> userProduct)
        {
            var response = await _httpClient.GetAsync("https://localhost:44361/api/Product");

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                var products = JsonConvert.DeserializeObject<List<Product>>(responseStream);

                Boolean isAvailable = true;
 
                foreach (UserProduct p in userProduct)
                {
                    IEnumerable<int> availableQuantity = from product in products
                                            where product.id == p.id
                                            select product.availability;
                    int avail = availableQuantity.First();

                    if (avail < p.quantity)
                    {
                        isAvailable = false;
                    }
                }

                if(isAvailable == true)
                {
                    Random rand = new Random();
                    int randomLessThan100 = rand.Next(100);

                    if (1 == (randomLessThan100 & 1))
                    {
                        return Ok();
                    }
                    return StatusCode(500);
                }
                else
                {
                    return StatusCode(422);
                }
            }
            else
            {
                products = new List<Product>();
            }
            return Unauthorized();
        }

    }
}
