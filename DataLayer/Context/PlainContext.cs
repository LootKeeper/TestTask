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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PlainModel>().HasData(
                new PlainModel()
                    { Id = 1, Name = "Test1", Enum = DataLayer.Model.Helpers.PlainEnum.One, FirstSwitcher = false, Range = 20, SecondSwitcher = true, Date = DateTime.Now.AddDays(1)},
                new PlainModel()
                    { Id = 2, Name = "Test2", Enum = DataLayer.Model.Helpers.PlainEnum.Two, FirstSwitcher = true, Range = 80, SecondSwitcher = false, Date = DateTime.Now},
                new PlainModel()
                    { Id = 3, Name = "Test3", Enum = DataLayer.Model.Helpers.PlainEnum.Three, FirstSwitcher = false, Range = 50, SecondSwitcher = false, Date = DateTime.Now }
                );
        }
    }
}
