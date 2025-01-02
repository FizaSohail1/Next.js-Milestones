import { NextResponse } from "next/server";

export async function GET() {
    const data = [

      {
        "id": "1",
        "title": "Classic Black T-Shirt",
        "category": "T-shirts",
        "rating": 4,
        "price": 19.99,
        "image": "https://m.media-amazon.com/images/I/81GzNWP4cuL._AC_SY500_.jpg"
    },
    {
        "id": "2",
        "title": "Violet T-Shirt",
        "category": "T-shirts",
        "rating": 4,
        "price": 21.99,
        "image": "https://m.media-amazon.com/images/I/81790N8YviL._AC_SX425_.jpg"
    },
    {
        "id": "3",
        "title": "Stripped T-Shirt",
        "category": "T-shirts",
        "rating": 3,
        "price": 17.99,
        "image": "https://m.media-amazon.com/images/I/71you9DHGhL._AC_SY500_.jpg"
    },
    {
        "id": "4",
        "title": "Classic red Polo T-Shirt",
        "category": "T-shirts",
        "rating": 3,
        "price": 24.99,
        "image": "https://m.media-amazon.com/images/I/71NQ-celUxL._AC_SX522_.jpg"
    },
    {
        "id": "5",
        "title": "Charcoal Black T-Shirt",
        "category": "T-shirts",
        "rating": 5,
        "price": 22.99,
        "image": "https://m.media-amazon.com/images/I/71lO+bbpayL._AC_SY500_.jpg"
    },
    {
        "id": "6",
        "title": "Casual Grey T-Shirt",
        "category": "T-shirts",
        "rating": 4,
        "price": 18.99,
        "image": "https://m.media-amazon.com/images/I/91IgFvuv4kL._AC_SX522_.jpg"
    },
    {
        "id": "7",
        "title": "Plane Casual T-Shirt",
        "category": "T-shirts",
        "rating": 4,
        "price": 20.99,
        "image": "https://m.media-amazon.com/images/I/71sFn-JftqL._AC_SY500_.jpg"  
    },
    {
        "id": "8",
        "title": "Vintage Style T-Shirt",
        "category": "T-shirts",
        "rating": 3,
        "price": 23.99,
        "image": "https://m.media-amazon.com/images/I/71kDpw9yPIL._AC_SX522_.jpg"   
    },
        {
            "id": "9",
            "title": "Ladies-TShirt",
            "price": 23.00,
            "image": "/arrival1.png",
            "category": "T-shirts",
            "rating": 5,  
          },
          {
            "id": "10",
            "title": "Jeans-Jacket",
            "price":32.70,
            "image": "/arrival5.jpg",
            "category": "T-shirts",
            "rating": 4,
          },
          {
            "id": "11",
            "title": "Ladies-Hoodies",
            "price":17.25,
            "image": "/arrival6.jpg",
            "rating": 3,
            "category": "T-shirts",
          },
          {
            "id": "12",
            "title": "Stylish Bracelet",
            "price": 15.00,
            "image": "/arrival4.jpg",
            "rating": 4,
            "category": "jewellery",
          },
          {
            "id": "13",
            "title": "Silver-Bracelet",
            "price": 13.54,
            "image": "/arrival7.jpg",
            "rating": 5,
            "category": "jewellery",
          },
          {
            "id": "14",
            "title": "Golden Hoop Earrings",
            "price": 123.54,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/81SFI8Zv8nL._AC_SY625_.jpg",
            "category": "jewellery",
          },
          {
            "id": "15",
            "title": "Crystal Jewelery Collection",
            "price": 120.00,
            "rating": 4,
            "image": "https://m.media-amazon.com/images/I/71W9Bk416aL._AC_SY625_.jpg",
            "category": "jewellery", 
          },
          {
            "id": "16",
            "title": "Pearls Necklace",
            "price": 100.00,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/51e++CFtS2L._AC_SY625_.jpg",
            "category": "jewellery",
          },
          {
            "id": "17",
            "title": "Golden breaclet set",
            "price": 50.20,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/61sP-HGoXEL._AC_SY575_.jpg",
            "category": "jewellery",
          },
          {
            "id": "18",
            "title": "Nike-Sneakers",
            "price": 40.00,
            "image": "/arrival9.jpg",
            "rating": 5,
            "category": "footwear", 
          },
          {
            "id": "19",
            "title": "New Casual Comfort Cross Trainer",
            "price": 60.00,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/61Ht6pj0JiL._AC_SX500_.jpg",
            "category": "footwear",
          },
          {
            "id": "20",
            "title": "Women's Flats Shoes",
            "price": 60.00,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/71gyleEVlaL._AC_SY500_.jpg",
            "category": "footwear", 
          },
          {
            "id": "21",
            "title": "Women's Flat Sandals",
            "price": 29,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/61Ni1cJ-MnL._AC_SY500_.jpg",
            "category": "footwear",
          },
          {
            "id": "22",
            "title": "Casual Sports Shoes",
            "price": 55.00,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/81MP8ZAtORL._AC_SX500_.jpg",
            "category": "footwear",
          },
          {
            "id": "23",
            "title": "Classic Leather Loafers Casual ",
            "price": 25.00,
            "rating": 4,
            "image": "https://m.media-amazon.com/images/I/51n03d4UwrL._AC_SY500_.jpg",
            "category": "footwear",
          },

          {
            "id": "24",
            "title": "Ladies-TShirt",
            "price": 23.00,
            "image": "/arrival1.png",
            "category": "New-arrival",
            "rating": 5,
          },
          {
            "id": "25",
            "title": "Jeans-Jacket",
            "price": 32.70,
            "image": "/arrival5.jpg",
            "category": "New-arrival",
            "rating": 4,
          },
          {
            "id": "26",
            "title": "Women's Flat Sandals",
            "price": 29,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/61Ni1cJ-MnL._AC_SY500_.jpg",
            "category": "New-arrival",
          },
          {
            "id": "27",
            "title": "Ladies-Hoodies",
            "price": 17.25,
            "image": "/arrival6.jpg",
            "rating": 3,
            "category": "New-arrival",
          },
          {
            "id": "28",
            "title": "Stylish Bracelet",
            "price": 15.00,
            "image": "/arrival4.jpg",
            "rating": 4,
            "category": "New-arrival",  
          },
          {
            "id": "29",
            "title": "Women's Flat Sandals",
            "price": 29,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/61Ni1cJ-MnL._AC_SY500_.jpg",
            "category": "New-arrival",
          },
          {
            "id": "30",
            "title": "Pearls Necklace",
            "price": 100.00,
            "rating": 5,
            "image": "https://m.media-amazon.com/images/I/51e++CFtS2L._AC_SY625_.jpg",
            "category": "New-arrival", 
          },
          {
            "id": "31",
            "title": "Stripped T-Shirt",
            "category": "New-arrival",
            "rating": 3,
            "price": 17.99,
            "image": "https://m.media-amazon.com/images/I/71you9DHGhL._AC_SY500_.jpg"  
        }
  

    ];

   return NextResponse.json(data)
}