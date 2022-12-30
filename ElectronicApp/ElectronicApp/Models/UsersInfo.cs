using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ElectronicApp.Models
{
    [BsonIgnoreExtraElements]
    public class UsersInfo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("userName")]
        public string Username { get; set; } = string.Empty;

        [BsonElement("firstName")]
        public string Firstname { get; set; } = string.Empty;

        [BsonElement("LastName")]
        public string Lastname { get; set; } = string.Empty;

        [BsonElement("password")]
        public string Password { get; set; } = string.Empty;

        [BsonElement("email")]
        public string Email { get; set; } = string.Empty;

        [BsonElement("gender")]
        public string Gender { get; set; } = string.Empty;

        [BsonElement("role")]
        public string Role { get; set; } = string.Empty;


    }
}
