namespace ElectronicApp.Models
{
    public class HCOStoreDatabaseSettings : IHCOStoreDatabaseSettings
    {
        public string HCODetailsCollectionName { get; set; } = string.Empty;

        

        public string ConnectionString { get; set; } = string.Empty;

        public string DatabaseName { get; set; } = string.Empty;
    }
}
