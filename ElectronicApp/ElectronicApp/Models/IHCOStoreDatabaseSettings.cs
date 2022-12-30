namespace ElectronicApp.Models
{
    public interface IHCOStoreDatabaseSettings
    {
        public string HCODetailsCollectionName { get; set; }

      

        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }
}
