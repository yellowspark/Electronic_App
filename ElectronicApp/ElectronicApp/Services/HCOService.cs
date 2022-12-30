using ElectronicApp.Models;
using MongoDB.Driver;

namespace ElectronicApp.Services
{
    public class HCOService : IHCOService
    {
        private readonly IMongoCollection<HCO> _hcos;

        public HCOService(IHCOStoreDatabaseSettings hCOStoreDatabase, IMongoClient mongoClient)
        {
           var database= mongoClient.GetDatabase(hCOStoreDatabase.DatabaseName);

           _hcos= database.GetCollection<HCO>(hCOStoreDatabase.HCODetailsCollectionName);
        }
        public HCO Create(HCO hco)
        {
            hco.Status = "Submitted";
            _hcos.InsertOne(hco);
            return hco;
        }

        public List<HCO> Get(string username)
        {
            return _hcos.Find(user => user.CreateBy == username).ToList();

            //return  _hcos.Find(hco => true).ToList();
        }


        public List<HCO> Getallstatus()
        {
            return _hcos.Find(user => user.Status == "Submitted").ToList();

            //return  _hcos.Find(hco => true).ToList();
        }


        public HCO GetbyId(string Id)
        {
            return _hcos.Find(user => user.Id == Id).FirstOrDefault();

            //return  _hcos.Find(hco => true).ToList();
        }


        //public HCO Get(string id)
        //{
        //    return _hcos.Find(hco => hco.Id == id).FirstOrDefault();
        //}

        public void Remove(string id)
        {
            _hcos.DeleteOne(hco => hco.Id == id);
        }

        public void Update(string id, HCO hco)
        {
           
            _hcos.ReplaceOne(hco => hco.Id == id, hco);
        }
    }
}
