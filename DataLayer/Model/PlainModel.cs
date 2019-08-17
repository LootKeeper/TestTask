using DataLayer.Model.Helpers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Text;

namespace DataLayer.Model
{
    public class PlainModel
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "enum")]
        public PlainEnum Enum { get; set; }
        [DataType(DataType.Date)]
        [JsonProperty(PropertyName = "date")]
        [JsonConverter(typeof(OnlyDateConvertor))]
        public DateTime Date { get; set; }
        [JsonProperty(PropertyName = "firstSwitcher")]
        public bool FirstSwitcher { get; set; }
        [JsonProperty(PropertyName = "secondSwitcher")]
        public bool SecondSwitcher { get; set; }
        [Range(0, 100)]
        [JsonProperty(PropertyName = "range")]
        public int Range { get; set; }
    }
}
