namespace ElectronicApp.Models
{
    public interface IUsersInfoDatabaseSettings
    {
        public string UserInfoCollectionName { get; set; }

        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }
}
