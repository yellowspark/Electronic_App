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
    public class HCOsController : ControllerBase
    {
        private readonly IHCOService hCOServiceObj;

        public HCOsController(IHCOService hCOServiceObj )
        {
            this.hCOServiceObj = hCOServiceObj;
        }
        // GET: api/<HCOsController>
        [HttpGet]
        public ActionResult<List<HCO>> Get(string username)
        {
            return Ok(hCOServiceObj.Get(username));
        }


        [HttpGet("Status")]
        public ActionResult<List<HCO>> Getallstatus()
        {
            return Ok(hCOServiceObj.Getallstatus());
        }

        [HttpGet("byId")]
        public ActionResult<HCO> GetbyId(string Id)
        {
            return Ok(hCOServiceObj.GetbyId(Id));
        }


        //[HttpGet("AllbyId")]
        //public ActionResult<List<HCO>> GetallbyId(HCO hco)
        //{
        //    return Ok(hCOServiceObj.GetallbyId(hco.Id));
        //}

        // GET api/<HCOsController>/5
        //[HttpGet("{id}")]
        //public ActionResult<HCO> Get(string id)
        //{
        //    var hco = hCOServiceObj.Get(id);
        //    if (hco == null)
        //    {
        //        return NotFound($"HCO with Id = {id} not found");
        //    }

        //    return hco;
        //}

        // POST api/<HCOsController>
        [HttpPost]
        public ActionResult<HCO> Post( [FromBody] HCO hco)
        {
            //try
            //{
            //    return hCOServiceObj.Create(hco);
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}

            // return CreatedAtAction(nameof(Get), new { id = hco.Id }, hco);

            return hCOServiceObj.Create(hco);
        }

        // PUT api/<HCOsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] HCO hco)
        {
            var existinghCO = hCOServiceObj.Get(id);
            try
            {
                if (existinghCO == null)
                {
                    return NotFound($"HCO with Id = {id} not found");
                }

                hCOServiceObj.Update(id, hco);
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }

            return NoContent();
        }

        // DELETE api/<HCOsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var hCO = hCOServiceObj.Get(id);
            try
            {
                if (hCO == null)
                {
                    return NotFound($"HCO with Id = {id} not found");
                }

                hCOServiceObj.Remove(id);
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }


            return Ok($"HCO with Id = {id} deleted");
        }
    }
}
