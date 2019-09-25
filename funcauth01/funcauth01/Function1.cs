using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text;
using System.Net;
using System.Net.Http;

namespace funcauth01
{
    public static class testAuth
    {
        [FunctionName("testAuth")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            Hero hero01 = new Hero();
            var heroes = new[]
            {
              new Hero {  id= 11, name= "Dr Nice01" },
              new Hero {  id= 12, name= "Narco01" },
              new Hero {  id= 13, name= "Bombasto01" },
              new Hero {  id= 14, name= "Celeritas" },
              new Hero {  id= 15, name= "Magneta" },
              new Hero {  id= 16, name= "RubberMan" },
              new Hero {  id= 17, name= "Dynama" },
              new Hero {  id= 18, name= "Dr IQ" },
              new Hero {  id= 19, name= "Magma" },
              new Hero {  id= 20, name= "Tornado" }
            };

            return (ActionResult)new OkObjectResult(heroes);
        }
    }
}

public class Hero
{
    public int id;
    public string name;
}
