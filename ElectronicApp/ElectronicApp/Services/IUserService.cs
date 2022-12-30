using ElectronicApp.Models;

namespace ElectronicApp.Services
{
    public interface IUserService
    {
        //List<UsersInfo> Get(UsersInfo usersInfo);
        UsersInfo Get(UsersInfo usersInfo);
        //UsersInfo Get(string user);

        // UsersInfo Create(UsersInfo usersObj);
        UsersInfo Create(UsersInfo usersObj);
        //UsersInfo Create(UsersInfo usersObj);

        //void Update(string id, UsersInfo usersObj);
        //void Remove(string id);
    }
}
