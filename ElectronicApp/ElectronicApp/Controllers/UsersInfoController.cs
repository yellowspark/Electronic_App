using ElectronicApp.Models;
using ElectronicApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ElectronicApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UsersInfoController : ControllerBase
    {
        private readonly IUserService userServiceObj;

        public UsersInfoController(IUserService userServiceObj)
        {
            this.userServiceObj = userServiceObj;
        }
        // GET: api/<UsersInfoController>

        [HttpPost("Login")]
        public ActionResult<UsersInfo> Get([FromBody] UsersInfo valueusers)
        {
            return userServiceObj.Get(valueusers);
        }

        // GET api/<UsersInfoController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<UsersInfoController>
        [HttpPost("Register")]
        public ActionResult<UsersInfo> Post([FromBody] UsersInfo valueusers)
        {
          return Ok(userServiceObj.Create(valueusers));
            // userServiceObj.Create(valueusers);
            // return CreatedAtAction(nameof(Get), new { id = valueusers.Id }, valueusers);


           

        }

        // PUT api/<UsersInfoController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<UsersInfoController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
