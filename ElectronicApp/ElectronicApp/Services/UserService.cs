using ElectronicApp.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ElectronicApp.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<UsersInfo> _users;

        //private readonly IMongoCollection<UserRole> _useroles;

        //public UserService(IUsersInfoDatabaseSettings infoDatabaseSettings, IHCOStoreDatabaseSettings hCOStoreDatabaseSettings, IMongoClient client)
        
        public UserService(IUsersInfoDatabaseSettings infoDatabaseSettings, IMongoClient client)
        {
           var db= client.GetDatabase(infoDatabaseSettings.DatabaseName);

            _users= db.GetCollection<UsersInfo>(infoDatabaseSettings.UserInfoCollectionName);

           // _useroles = db.GetCollection<UserRole>(hCOStoreDatabaseSettings.UserRolesCollectionName);
        }
        //public UsersInfo Create(UsersInfo usersObj)

        public UsersInfo Create(UsersInfo usersObj)
        {
            var result = _users.Find(x => x.Username == usersObj.Username || x.Email== usersObj.Email).FirstOrDefault();
            if (result == null)
            {
                _users.InsertOne(usersObj);
                return usersObj;

                //return "Successfully Registered";
            }
            return result;
        }
        //public UsersInfo Get([FromBody] UsersInfo valueusers)
        public UsersInfo Get( UsersInfo valueusers)
        {
            return _users.Find(usersObj => usersObj.Username == valueusers.Username & usersObj.Password == valueusers.Password).FirstOrDefault();

            // var userinfo = _users.Find(usersObj => usersObj.Username == valueusers.Username & usersObj.Password == valueusers.Password).ToList();
            // var userrole = userinfo.Where(x => x.Username == "devish" )
            //    if (a.Count == 0)
            //    {
            //       //_users.InsertOne(usersObj);
            //        // return usersObj;

            //        return "Login fails";

            //    }
            //    return "Login success";
        }

        //public UsersInfo Get(string user)
        //{
        //    throw new NotImplementedException();

        //}

        //public void Remove(string id)
        //{
        //    throw new NotImplementedException();
        //}

        //public void Update(string id, UsersInfo usersObj)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
