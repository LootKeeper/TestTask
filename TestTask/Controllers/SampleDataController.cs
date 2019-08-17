using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataLayer.Model;
using DataLayer.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TestTask.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        IRepository _repository;
        public SampleDataController(IRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet("models")]
        public IEnumerable<PlainModel> GetPlainModels()
        {
            return this._repository.GetAll();
        }

        [HttpGet("model/{id}")]
        public PlainModel GetPlainModel(int id)
        {
            return this._repository.Get(id);
        }

        [HttpPost("model")]
        public PlainModel CreatePlainModel([FromBody]PlainModel model)
        {
            if (ModelState.IsValid)
            {
                model = this._repository.Create(model);
            }

            return model;
        }

        [HttpPut("model")]
        public PlainModel UpdatePlainModel([FromBody]PlainModel model)
        {
            if (ModelState.IsValid)
            {
                model = this._repository.Update(model);
            }

            return model;
        }
    }
}
