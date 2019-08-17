using DataLayer.Model.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Text;

namespace DataLayer.Model
{
    public class PlainModel
    {
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        public PlainEnum Enum { get; set; }
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        public bool FirstSwitcher { get; set; }
        public bool SecondSwitcher { get; set; }
        [Range(0, 100)]
        public int Range { get; set; }
    }
}
