using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieSPA.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public string Rating { get; set; }
    }
}