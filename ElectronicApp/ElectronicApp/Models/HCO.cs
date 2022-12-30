using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ElectronicApp.Models
{
    
        [BsonIgnoreExtraElements]
        public class HCO
        {
            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string Id { get; set; } 

            [BsonElement("organizationName")]
            public string OrganizationName { get; set; } = string.Empty;

            [BsonElement("address")]
             public string Address { get; set; } = string.Empty;

             [BsonElement("city")]
             public string City { get; set; } = string.Empty;

            [BsonElement("state")]
            public string State { get; set; } = string.Empty;

            [BsonElement("country")]
            public string Country { get; set; } = string.Empty;

            [BsonElement("zipCode")]
            public int ZipCode { get; set; }

            [BsonElement("emailAddress")]
            public string EmailAddress { get; set; } = string.Empty;

            [BsonElement("website")]
            public string Website { get; set; } = string.Empty;

            [BsonElement("primaryContactPerson")]
            public string PrimaryContactPerson { get; set; } = string.Empty;

            [BsonElement("primaryContactPersonMobile")]
            public long PrimaryContactPersonMobile { get; set; } 

            [BsonElement("secondaryContactPerson")]
            public string SecondaryContactPerson { get; set; } = string.Empty;

            [BsonElement("secondaryContactPersonMobile")]
            public long SecondaryContactPersonMobile { get; set; }

            [BsonElement("programsToBeAccredited")]
            public string ProgramsToBeAccredited { get; set; } = string.Empty;

            [BsonElement("status")]
            public string Status { get; set; } = string.Empty;

            [BsonElement("createDate")]
             public DateTime CreateDate { get; set; } = DateTime.Now;

             [BsonElement("createBy")]
            public string CreateBy { get; set; } = string.Empty;
    
            [BsonElement("modifyDate")]
            public DateTime ModifyDate { get; set; } = DateTime.Now;

            [BsonElement("modifyBy")]
            public string ModifyBy { get; set; } = string.Empty;


    }
}
