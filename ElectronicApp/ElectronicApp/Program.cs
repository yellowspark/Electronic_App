using ElectronicApp.Models;
using ElectronicApp.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<HCOStoreDatabaseSettings>(
                builder.Configuration.GetSection("EAppDatabaseSettings"));

builder.Services.AddSingleton<IHCOStoreDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<HCOStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s =>
        new MongoClient(builder.Configuration.GetValue<string>("EAppDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IHCOService, HCOService>();



builder.Services.Configure<UsersInfoDatabaseSettings>(
                builder.Configuration.GetSection("EAppDatabaseSettings"));

builder.Services.AddSingleton<IUsersInfoDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<UsersInfoDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s =>
        new MongoClient(builder.Configuration.GetValue<string>("EAppDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers();

//builder.Services.AddCors(o => o.AddPolicy("corsApi", builder =>
//{
//    builder.AllowAnyOrigin()
//           .AllowAnyMethod()
//           .AllowAnyHeader();
//}));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//CORS Enabled

//builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
//{
//    build.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
//}));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowOrigin");

app.UseHttpsRedirection();

//app.UseCors("corsApi");

app.UseAuthorization();

app.MapControllers();

app.Run();


/* https://localhost:7255/
*/