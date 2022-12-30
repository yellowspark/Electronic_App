﻿namespace ElectronicApp.Models
{
    public class UsersInfoDatabaseSettings: IUsersInfoDatabaseSettings
    {
        public string UserInfoCollectionName { get; set; } = string.Empty;

        public string ConnectionString { get; set; } = string.Empty;

        public string DatabaseName { get; set; } = string.Empty;
    }
}
