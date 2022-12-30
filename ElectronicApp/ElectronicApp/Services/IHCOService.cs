using ElectronicApp.Models;

namespace ElectronicApp.Services
{
    public interface IHCOService
    {
        List<HCO> Get(string username);

        List<HCO> Getallstatus();

        HCO GetbyId(string Id);

        //HCO GetallbyId(HCO hco);

        // HCO Get(string id);
        HCO Create(HCO hco);
        void Update(string id, HCO hco);
        void Remove(string id);
    }
}
