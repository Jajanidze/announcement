using announcement_back_end.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace announcement_back_end.Repositories
{
    public class AnnouncementRepository:IAnnouncementRepository
    {
        private readonly AnnouncementContext _context;
        public AnnouncementRepository(AnnouncementContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Announcement>> GetAllAnnouncement()
        {
            return  await _context.Announcements.ToListAsync();
        }

        public Announcement CreateAnnouncement(Announcement announcement)
        {
            var ann = _context.Announcements.Add(announcement);
            _context.SaveChanges();
            return announcement;
        }

        public async Task<Announcement> GetAnnouncementByTitle(string title)
        {
            var result = await _context.Announcements.FirstOrDefaultAsync(o => o.Title == title);
            return result;
        }
    }
}
