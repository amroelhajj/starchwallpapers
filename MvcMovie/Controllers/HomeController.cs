using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;
using MVCVideoGuide.Data;
using MVCVideoGuide.Data.Entities;

namespace MvcMovie.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private readonly VideoDbContext _context;

    public HomeController(ILogger<HomeController> logger, VideoDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Index2(User p)
    {
        _context.Database.EnsureCreated();

        if (!_context.Users.Any())
        {
            if (p != null)
            {
                _context.Users.AddRange(p);
            }
        }
        //else
        //{
        //    _context.Users.RemoveRange(_context.Users);
        //}
        _context.SaveChanges();

        return RedirectToAction("Index");
    }

    public IActionResult Index3(NASA p)
    {
        _context.Database.EnsureCreated();

        bool exists = _context.NASAIotd.Any(n => n.Date == p.Date); // Query der checker om datoen allerede eksisterer. Returnerer boolsk værdi.

        if (!exists) // Hvis datoen allerede eksisterer i databasen sker intet.
        {
            _context.NASAIotd.Add(p);
            _context.SaveChanges();
        }

        //_context.NASAIotd.RemoveRange(_context.NASAIotd);
        //_context.SaveChanges();

        return RedirectToAction("Index");
    }

    public IActionResult Index4(Bing p)
    {
        _context.Database.EnsureCreated();

        bool exists = _context.BingIotd.Any(b => b.Date == p.Date); // Query der checker om datoen allerede eksisterer. Returnerer boolsk værdi.

        if (!exists) // Hvis datoen allerede eksisterer i databasen sker intet.
        {
            _context.BingIotd.Add(p);
            _context.SaveChanges();
        }

        //_context.BingIotd.RemoveRange(_context.BingIotd);
        //_context.SaveChanges();

        return RedirectToAction("Index");
    }

    public IActionResult NASAIotd()
    {
        List<NASA> result = _context.NASAIotd.OrderBy(p => p.Id).ToList();
        return View(result);
    }

    public IActionResult BingIotd()
    {
        List<Bing> result = _context.BingIotd.OrderBy(p => p.Id).ToList();
        return View(result);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult ShowProducts()
    {
        List<Product> result = _context.Products.OrderBy(p => p.Id).ToList();
        return View(result);
    }

    public IActionResult About()
    {
        return View();
    }

    [HttpGet]
    public IActionResult AddProduct()
    {
        return View();
    }

    [HttpPost]
    public IActionResult AddProduct(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}