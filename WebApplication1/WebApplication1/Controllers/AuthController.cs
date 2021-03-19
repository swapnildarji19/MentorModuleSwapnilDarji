using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
                return BadRequest("Invalid client request");

            if(user.UserName == "swapnil" && user.Password == "qwerty")
            {
                return Ok();
            }
            return Unauthorized();
        }
    }
}
