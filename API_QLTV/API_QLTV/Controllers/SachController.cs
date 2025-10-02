using API_QLTV.Modes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace API_QLTV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SachController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public SachController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select MaSach, TenSach, TheLoai, TacGia, NamXuatBan, NhaXuatBan, ngaynhap, Anh from Sach";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("QLTV");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Sach sach)
        {
            string query = @"INSERT INTO Sach (TenSach, TheLoai, TacGia, NamXuatBan, NhaXuatBan, NgayNhap, Anh)
                 VALUES (N'" + sach.TenSach + @"',
                         N'" + sach.TheLoai + @"',
                         N'" + sach.TacGia + @"',
                         " + sach.NamXuatBan + @",
                         N'" + sach.NhaXuatBan + @"',
                         '" + sach.ngaynhap + @"',
                         N'" + sach.Anh + @"')";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("QLTV");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Thêm thành công");
        }
        [HttpPut]
        public JsonResult Put(Sach sach)
        {
            string query = @"update Sach set 
                             TenSach = N'" + sach.TenSach + @"',
                             TheLoai = N'" + sach.TheLoai + @"',
                             TacGia = N'" + sach.TacGia + @"',
                             NamXuatBan = " + sach.NamXuatBan + @",
                             NhaXuatBan = N'" + sach.NhaXuatBan + @"',
                             ngaynhap = N'" + sach.ngaynhap + @"',
                             Anh = N'" + sach.Anh + @"'
                             where MaSach = " + sach.MaSach + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("QLTV");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Cập nhật thành công");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from Sach where MaSach = " + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("QLTV");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Xóa thành công");
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = Path.Combine(_env.ContentRootPath, "Photos", filename);

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename); 
            }
            catch (Exception)
            {
                return new JsonResult("anh.jpg");
            }
        }


        [Route("GetAllTenTheLoai")]
        [HttpGet]
        public JsonResult GetAllTenTheLoai()
        {
            string query = @"select TenTheLoai from TheLoai";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("QLTV");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    } 
}
