using API_QLTV.Modes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace API_QLTV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NguoiDungController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public NguoiDungController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpPost]
        public JsonResult DangNhap(NguoiDung nguoiDung)
        {
            string query = @"select COUNT(*) from NguoiDung where TenDangNhap='"+nguoiDung.TenDangNhap+"'and MatKhau='"+nguoiDung.MatKhau+"'";
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
