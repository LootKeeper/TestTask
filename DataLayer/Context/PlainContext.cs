using DataLayer.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Context
{
    public class PlainContext : DbContext
    {
        public DbSet<PlainModel> PlainModels { get; set; }

        public PlainContext(DbContextOptions<PlainContext> options) 
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
