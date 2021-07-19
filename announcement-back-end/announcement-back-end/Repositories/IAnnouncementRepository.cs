using announcement_back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace announcement_back_end.Repositories
{
    public interface IAnnouncementRepository
    {
        public Task<IEnumerable<Announcement>> GetAllAnnouncement();
        public Announcement CreateAnnouncement(Announcement announcement);
        public Task<Announcement> GetAnnouncementByTitle(string title);

    }
}
