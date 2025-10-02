using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json.Serialization;
var builder = WebApplication.CreateBuilder(args);

// Enable cors
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options =>
        options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

// JSON Serializer
builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ContractResolver = new DefaultContractResolver());

builder.Services.AddControllers();

// 👉 Thêm Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(options =>
    options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// 👉 Bật Swagger cho mọi môi trường
app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
            Path.Combine(Directory.GetCurrentDirectory(), "Photos")
            ),
    RequestPath = "/Photos"
});

app.Run();
