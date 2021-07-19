using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace announcement_back_end.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
    }
}
