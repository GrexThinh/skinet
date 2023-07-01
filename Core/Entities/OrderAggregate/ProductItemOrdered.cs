using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productName, string pitureUrl)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PitureUrl = pitureUrl;
        }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PitureUrl { get; set; }
    }
}