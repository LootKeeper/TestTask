using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Model.Helpers
{
    public class OnlyDateConvertor : IsoDateTimeConverter
    {
        public OnlyDateConvertor()
        {
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}
