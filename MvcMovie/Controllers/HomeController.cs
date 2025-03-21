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

    public IActionResult Index2(Persons p)
    {
        _context.Database.EnsureCreated();

        if (!_context.People.Any())
        {
            if (p != null)
            {
                _context.People.AddRange(p);
            }
        }
        else
        {
            _context.People.RemoveRange(_context.People);
        }
        _context.SaveChanges();

        return RedirectToAction("Index");
    }

    public IActionResult Index3(NASA p)
    {
        _context.Database.EnsureCreated();

        if (!_context.NASAIotd.Any())
        {
            if (p != null)
            {
                _context.NASAIotd.AddRange(p);
            }
        }
        else
        {
            _context.NASAIotd.RemoveRange(_context.NASAIotd);
        }
        _context.SaveChanges();

        return RedirectToAction("Index");
    }

    public IActionResult Index4(Bing p)
    {
        _context.Database.EnsureCreated();

        if (!_context.BingIotd.Any())
        {
            if (p != null)
            {
                _context.BingIotd.AddRange(p);
            }
        }
        else
        {
            _context.BingIotd.RemoveRange(_context.BingIotd);
        }
        _context.SaveChanges();

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
        List<Product> result = _context.Products.OrderBy(p => p.Cost).ToList();
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