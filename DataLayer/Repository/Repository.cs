using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataLayer.Context;
using DataLayer.Model;

namespace DataLayer.Repository
{
    public class Repository : IRepository
    {
        PlainContext _context;
        public Repository(PlainContext context)
        {
            this._context = context;
        }
        public PlainModel Create(PlainModel model)
        {
            _context.PlainModels.Add(model);
            _context.SaveChanges();
            return model;
        }

        public PlainModel Get(int id)
        {
            return _context.PlainModels.Find(id);
        }

        public IEnumerable<PlainModel> GetAll()
        {
            return _context.PlainModels.Take(_context.PlainModels.Count());
        }

        public PlainModel Update(PlainModel model)
        {
            _context.PlainModels.Update(model);
            _context.SaveChanges();
            return model;
        }
    }
}
