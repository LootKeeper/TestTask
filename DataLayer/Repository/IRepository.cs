using DataLayer.Model;
using System;
using System.Collections.Generic;

namespace DataLayer.Repository
{
    public interface IRepository
    {
        PlainModel Get(int id);
        IEnumerable<PlainModel> GetAll();
        PlainModel Create(PlainModel model);
        PlainModel Update(PlainModel model);
    }
}
