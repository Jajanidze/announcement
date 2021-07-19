using announcement_back_end.Dto;
using announcement_back_end.Models;
using announcement_back_end.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace announcement_back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnnouncementController : Controller
    {
        private readonly IAnnouncementRepository _repo;

        public AnnouncementController(IAnnouncementRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return new JsonResult("Success");
        }

        [HttpGet]
        [Route(nameof(GetAllAnnouncement))]
        public async Task<IActionResult> GetAllAnnouncement()
        {
            var announcements = await _repo.GetAllAnnouncement();
            return  Ok(announcements);
        }

        [HttpPost]
        [Route(nameof(CreateAnnouncement))]
        public IActionResult CreateAnnouncement([FromBody] AnnouncementDto announcementDto)
        {

            var newAnnouncement = new Announcement
            {
                Description = announcementDto.Description,
                Image = announcementDto.Image,
                PhoneNumber = announcementDto.PhoneNumber,
                Title = announcementDto.Title

            };
             _repo.CreateAnnouncement(newAnnouncement);
            return Created("Success",newAnnouncement);
        }


        [HttpGet]
        [Route(nameof(GetAnnouncementByTitle))]
        public async Task<IActionResult> GetAnnouncementByTitle(string title)
        {
            var result = await _repo.GetAnnouncementByTitle(title);
            return Ok(result);

        }


       
    }
}
