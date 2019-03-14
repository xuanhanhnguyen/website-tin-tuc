using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Website_tin_tuc.Models;

namespace Website_tin_tuc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var hello = new sinhvien();
            hello.ten = "hanh";
            hello.tuoi = "23";
            return View(hello);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}