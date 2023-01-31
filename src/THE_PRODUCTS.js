const products = [
  {
    id: 1,
    name: "Redmi Smartphone 2023",
    price: 8000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/5hwfgHR/Xiaomi-Redmi-10-5-G.jpg",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 2,
    name: "Lumin skin care products",
    price: 85,
    quantity: 58,
    imgUrl: "https://i.ibb.co/4R2VHj3/Pro-Advanced-Aqueous-V3-960x1209-29b3aec5-5c0b-46f2-85b5-281a70b822d2.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 5,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 3,
    name: "Glossy lip gloss",
    price: 10,
    quantity: 58,
    imgUrl: "https://i.ibb.co/MPcjgr9/LIP-GLOSS-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 4,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 4,
    name: "Lip sleeping mask",
    price: 150,
    quantity: 58,
    imgUrl: "https://i.ibb.co/ZVtR20f/Laneige-Gummy-Bear-Sleeping-Mask-Lip-Glowy-Balm-for-Fall-2020-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "6",
    },
    brandDetails: {
      brandName: "Laneige",
      topBrand: true,
    },
  },
  {
    id: 5,
    name: "Beauty slik balm",
    price: 120,
    quantity: 58,
    imgUrl: "https://i.ibb.co/59Fmt1D/Huda-Beauty-launches-new-lip-balm-treatment-Silk-Balm-for-your-best-looking-lips-yet-removebg-previe.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 6,
    name: "Ultra dout myth olive",
    price: 600,
    quantity: 48,
    imgUrl: "https://i.ibb.co/Zdgjdgk/garnier-shampoo-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 7,
    name: "Water sleeping mask cream",
    price: 7700,
    quantity: 258,
    imgUrl: "https://i.ibb.co/zVmdy7d/fc630559-d568-4e93-a011-3fed39a23644-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Computer",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "Laneige",
      topBrand: true,
    },
  },
  {
    id: 8,
    name: "Finger nails tool box",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/y5xWyLj/f876c0f4-d15f-4fd6-b4bb-8700f4055dba.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 9,
    name: "Healthy pure aloe vera",
    price: 258,
    quantity: 58,
    imgUrl: "https://i.ibb.co/mBwLWpY/ee3c46a9-ae4e-429f-80ee-af49c4bfadda.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 10,
    name: "Eye Pencil",
    price: 66,
    quantity: 58,
    imgUrl: "https://i.ibb.co/cN8Jb5v/ea60517a-4a5a-4290-8e3d-24c226d98515.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 11,
    name: "Pre probiotic",
    price: 6000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/PWky2sm/e38889be-00b6-4c27-bce0-79e771c6a072-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 12,
    name: "Panthenol barrier cream",
    price: 700,
    quantity: 58,
    imgUrl: "https://i.ibb.co/swwqLjP/dd4d727d-80bc-466d-a907-531e3f0089e6-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 13,
    name: "Purple glycerol acrylic nails",
    price: 500,
    quantity: 71,
    imgUrl: "https://i.ibb.co/dmFrQ7Q/d7d6cc1b-3bac-4774-9a71-fdc329f28b43-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 14,
    name: "Face beautifying potion",
    price: 300,
    quantity: 45,
    imgUrl: "https://i.ibb.co/T0hFnLf/d7c45804-ed15-4b3b-955e-7450ec2c7a04-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 15,
    name:"Healthy glow foundation",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/6WQ22hq/cfe8ab9d-e30a-423a-8db0-a2f69d5ec495-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 16,
    name: "Apple devices",
    price: 100000,
    quantity: 28,
    imgUrl: "https://i.ibb.co/xzwZjds/b451e268-70aa-4f9c-8def-65d5151e0cd8-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "Apple",
      topBrand: true,
    },
  },
  {
    id: 17,
    name: "4-inches edge samsung",
    price: 7500,
    quantity: 18,
    imgUrl: "https://i.ibb.co/T2r0M7T/bdd964f9-5c5e-4ce5-a1d2-f1953c885d5a-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 4,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "Samsung",
      topBrand: true,
    },
  },
  {
    id: 18,
    name: "Iphone",
    price: 28000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/S0KdZ5R/iphone.jpg",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 19,
    name: "Open-Close, Flip Samsung",
    price: 8000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/74LkHFw/Gallery-01-B2-5-G-Black-Front-Table-Top-1600x1200.webp",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 20,
    name: "Iphone 14 - dual processor",
    price: 16280,
    quantity: 58,
    imgUrl: "https://i.ibb.co/Sm96NNT/Xiaomi-Redmi-10-5-G.jpg",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 21,
    name: "Iphone",
    price: 42000,
    quantity: 18,
    imgUrl: "https://i.ibb.co/KLJ5syx/dc35560a-4ab8-4f17-9615-446ff95ad67b-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 22,
    name: "Redmi phone and tablet",
    price: 15000,
    quantity: 2,
    imgUrl: "https://i.ibb.co/qj6QWnD/d98823c5-6c0b-4b46-a28c-eec05bdb7bef-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 23,
    name: "Samsung sleek tablet device",
    price: 150000,
    quantity: 5,
    imgUrl: "https://i.ibb.co/CzZM4fb/66052e1d-e0cf-4b0a-9c49-fd2a2f2847b4.jpg",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 24,
    name: "Redmi ugreen Smartphone",
    price: 6500,
    quantity: 48,
    imgUrl: "https://i.ibb.co/M5Zvb6z/4804b2d0-8f32-4d84-b21b-30a09d9e84a6-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 25,
    name: "Redmi Pink phone",
    price: 26000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/K9dv3s9/90b298ae-4397-4846-8507-ae59d84cf676-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 26,
    name: "Lady-Like Apple Phone",
    price: 162000,
    quantity: 98,
    imgUrl: "https://i.ibb.co/Gnd0HZ9/51f47854-d1aa-4e16-aa71-85981418b4c3-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 27,
    name: "Brown ring samsung smartphone",
    price: 27000,
    quantity: 65,
    imgUrl: "https://i.ibb.co/PQYHBrb/9de57b2f-0896-4f21-8380-fe9f54cd01be-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 28,
    name: "Samsung slide open tablet",
    price: 178000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/djnxKSQ/9ba5ae66-7d43-4d9b-aec9-173e4ad7691c-removebg-preview-1.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "11",
    },
    brandDetails: {
      brandName: "Samsung",
      topBrand: true,
    },
  },
  {
    id: 29,
    name: "Redmi black phone ",
    price: 38000,
    quantity: 58,
    imgUrl: "https://i.ibb.co/j3qqrj0/9ba1ae07-555d-42e6-9b9d-19b650b7331c-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 30,
    name: "Wide screen tablet-desktop",
    price: 248000,
    quantity: 8,
    imgUrl: "https://i.ibb.co/fD1pBJz/001-gallery-LC34-J791-WTNXZA.webp",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "41",
    },
    brandDetails: {
      brandName: "Samsung",
      topBrand: true,
    },
  },
  {
    id: 31,
    name: "Android smartphone",
    price: 248000,
    quantity: 8,
    imgUrl: "https://i.ibb.co/4dxkVDf/3e037a67-3397-4e96-8b74-7cbd9fb26654-removebg-preview-1.png",
    categoryDetails: {
      MainCategory: "Phones & Tablets",
      subCategory: "Mobile Phones",
      category: "Smartphones",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        " ehhh Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],
      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: false,
      percentageDecrease: "41",
    },
    brandDetails: {
      brandName: "Samsung",
      topBrand: true,
    },
  },
  {
    id: 32,
    name:"Ladies pink set nail cutter",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/zmHyP5r/0ef3264c-4cb1-4cf5-b0ed-0a50a1c5487c.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 33,
    name:"Fenty beauty eye liner",
    price: 200,
    quantity: 858,
    imgUrl: "https://i.ibb.co/QbsdcLs/0f2d7e17-80a2-4e83-863c-9217f4713ad5-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 34,
    name:"Glassy make up brushes",
    price: 2500,
    quantity: 188,
    imgUrl: "https://i.ibb.co/3RvZ5P0/2d82828e-3582-457f-b698-4f26867f821a.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 35,
    name:"Thick black eye liner",
    price: 45,
    quantity: 58,
    imgUrl: "https://i.ibb.co/dk63WkB/4e8dd9fe-54a7-458f-b0ed-9659a4e382b4.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 36,
    name:"Water weight foundation",
    price: 60,
    quantity: 58,
    imgUrl: "https://i.ibb.co/hLP9Ktz/5d8a1fbf-0422-42b4-94e5-4ac0d979f0bc.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 37,
    name:"Glossy pink artificial nails",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/cYvj7Qb/5a5c2af2-758e-4690-a6bc-0e91d294325d-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 38,
    name:"Prep plus primer",
    price: 260,
    quantity: 58,
    imgUrl: "https://i.ibb.co/y6j3hC8/8b6a601b-bddf-41a1-8e65-6e06b7c6d03a-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 39,
    name:"Dietary supplement",
    price: 1850,
    quantity: 58,
    imgUrl: "https://i.ibb.co/tp2YrhH/8f427213-25d6-4315-9816-c244b502f28a.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 40,
    name:"Chocolate concealer and brush",
    price: 123,
    quantity: 58,
    imgUrl: "https://i.ibb.co/K92Ypv6/9b7ba8c9-9435-4e6f-92b0-c0bb066756b5.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 41,
    name:"Lemon sage body butter",
    price: 450,
    quantity: 58,
    imgUrl: "https://i.ibb.co/37q4BCs/37-Beauty-Products-Under-10-That-Feel-Like-They-Should-Cost-More-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 42,
    name:"Make you beautiful cream",
    price: 1700,
    quantity: 58,
    imgUrl: "https://i.ibb.co/P5V5Qgt/61e0e702-5db2-42b4-b8bf-f544eb05879c-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 43,
    name:"Fenty beauty lip gloss",
    price: 90,
    quantity: 58,
    imgUrl: "https://i.ibb.co/Dzp25R8/093dcdea-9be2-4a17-972d-42a98744f555.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 44,
    name:"Lipton milk tea",
    price: 89,
    quantity: 58,
    imgUrl: "https://i.ibb.co/54j8pPm/167b52f5-2813-483b-b7c7-e695f84d3784.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 45,
    name:"Brown nails",
    price: 100,
    quantity: 85,
    imgUrl: "https://i.ibb.co/jys4C3m/264eb251-d7ab-4c14-b5f3-d3ecf8d46b2e-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 46,
    name:"Laneige lip gloss balm",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/52rrNJ4/6558341e-33ec-4165-9d34-3fb20c97d697-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 47,
    name:"Daily seed probiotic",
    price: 100,
    quantity: 58,
    imgUrl: "https://i.ibb.co/6mK6jdw/a6a21377-5a27-438b-bf34-9c1092239bcd.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 48,
    name:"Fenty make up brush",
    price: 670,
    quantity: 58,
    imgUrl: "https://i.ibb.co/Qrk1my9/a475e0d3-839d-4c99-b05a-1a18ffecc103.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 49,
    name:"Color pop eye shawdow",
    price: 25,
    quantity: 58,
    imgUrl: "https://i.ibb.co/x5cYgQn/bdfe9f96-3273-45d3-8fa3-1107aa27facf.jpg",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 50,
    name:"Skin exfoliant",
    price: 450,
    quantity: 58,
    imgUrl: "https://i.ibb.co/rfwM81x/Best-of-Paula-s-Choice-Skin-Care-Cleansers-Serums-Moisturizers-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 51,
    name:"Vitamins collection",
    price: 650,
    quantity: 58,
    imgUrl: "https://i.ibb.co/b1k43Ms/ccaf1603-3743-4dcf-b059-ca740da93582-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 52,
    name:"Purple square shaped nails",
    price: 10,
    quantity: 58,
    imgUrl: "https://i.ibb.co/DM4FrX2/cf049c4c-f3d2-4e57-96dd-6adacf288aa8-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 53,
    name:"Purple square shaped nails",
    price: 10,
    quantity: 58,
    imgUrl: "https://i.ibb.co/DM4FrX2/cf049c4c-f3d2-4e57-96dd-6adacf288aa8-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 54,
    name:"Brown square shaped nails",
    price: 10,
    quantity: 58,
    imgUrl: "https://i.ibb.co/0t9v6VR/677b8080-6776-450c-8c7a-04a6319e2ec1-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 55,
    name:"Oval acrylic nails",
    price: 17,
    quantity: 58,
    imgUrl: "https://i.ibb.co/kHcq44t/3233a9fc-03c1-423c-9102-9bfda17fca58-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Beauty & Health",
      subCategory: "Make Up",
      category: "Lip Gloss",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 56,
    name:"Southwest airline sweatshirt",
    price: 49,
    quantity: 8,
    imgUrl: "https://i.ibb.co/jknXTtJ/Southwest-Airline-Perks-Car-Rentals-More-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 57,
    name:"Coporate gown",
    price: 200,
    quantity: 58,
    imgUrl: "https://i.ibb.co/3C5wdCd/kate-skumen-PJRabku-H3-Q-unsplash-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 58,
    name:"Blue gown",
    price: 540,
    quantity: 58,
    imgUrl: "https://i.ibb.co/pKkLCzT/james-lewis-ohiyig-Dml-Yc-unsplash-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 59,
    name:"African made ankara",
    price: 170,
    quantity: 58,
    imgUrl: "https://i.ibb.co/tMmxf6y/hush-naidoo-jade-photography-1v-Bex-Pe-DD3o-unsplash.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 60,
    name:"Flower hoodie",
    price: 550,
    quantity: 58,
    imgUrl: "https://i.ibb.co/HDZFpHj/f3da5827-3008-4bbe-a07b-c5e527a91985.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 61,
    name:"Beautiful home dress",
    price: 107,
    quantity: 58,
    imgUrl: "https://i.ibb.co/S3gS071/dfea8714-79f7-4b1f-9b57-d3e40a137e3b-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 62,
    name:"Versace up and down",
    price: 177,
    quantity: 58,
    imgUrl: "https://i.ibb.co/kSfwpFF/dce9637f-60b5-4140-963e-eedee8a0ae35-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 63,
    name:"Fancy top",
    price: 17,
    quantity: 58,
    imgUrl: "https://i.ibb.co/PQFFYC0/cristofer-maximilian-Aq-LIk-Oz-WDAk-unsplash-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 64,
    name:"White sweatshirt and jean",
    price: 17,
    quantity: 58,
    imgUrl: "https://i.ibb.co/K6vGych/clothes.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 65,
    name:"Black cardigan",
    price: 17,
    quantity: 58,
    imgUrl: "https://i.ibb.co/gS8Fdsz/a66f5647-66a5-430b-8cdd-f77e05f6e059-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 66,
    name:"Black dinner gown",
    price: 17,
    quantity: 58,
    imgUrl: "https://i.ibb.co/1JrVPJG/333bb238-b8fc-46a1-a856-d7ae6c69f7c6-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 67,
    name:"Brown head warmer",
    price: 23,
    quantity: 58,
    imgUrl: "https://i.ibb.co/Y3BdzBz/069a53cd-177c-49fa-bfbb-a2c4bbeee2d2.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 68,
    name:"Outing Shorts",
    price: 60,
    quantity: 58,
    imgUrl: "https://i.ibb.co/mDcpsVj/63cc87d3-550e-4b36-9167-362a0263d6e8.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 69,
    name:"Adidas black hoodie",
    price: 350,
    quantity: 58,
    imgUrl: "https://i.ibb.co/jgyq4FH/6a1e0c50-9393-449b-b5a6-25c6267d596d-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 70,
    name:"Loius vuitton",
    price: 1780,
    quantity: 58,
    imgUrl: "https://i.ibb.co/FbNM42q/3f80725b-e727-4bbc-841b-33ab587545e7-removebg-preview-1.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Clothing",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 71,
    name:"Flower cream heels",
    price: 158,
    quantity: 58,
    imgUrl: "https://i.ibb.co/ZBcJyKs/pexels-scott-webb-137603-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 72,
    name:"Monicore heels",
    price: 118,
    quantity: 58,
    imgUrl: "https://i.ibb.co/mzk6WPt/pexels-monicore-134064.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 73,
    name:"Give me a name",
    price: 158,
    quantity: 58,
    imgUrl: "https://i.ibb.co/Tv3C5pc/pexels-melvin-buezo-2529148.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 74,
    name:"Red heels",
    price: 458,
    quantity: 58,
    imgUrl: "https://i.ibb.co/417W6DV/pexels-bella-zhong-3782789.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 75,
    name:"White heels",
    price: 420,
    quantity: 58,
    imgUrl: "https://i.ibb.co/FBR4Hnt/pexels-git-stephen-gitau-1801279-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 76,
    name:"Red paris heels",
    price: 408,
    quantity: 58,
    imgUrl: "https://i.ibb.co/RSn8YG5/pexels-bella-zhong-3076787.jpg",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 77,
    name:"Sneakers",
    price: 58,
    quantity: 58,
    imgUrl: "https://i.ibb.co/T1nZ82G/pexels-bella-zhong-2731977-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 78,
    name:"Black-white sneakers",
    price: 44,
    quantity: 58,
    imgUrl: "https://i.ibb.co/BT0dZMy/pexels-aditya-aiyar-1407354-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 79,
    name:"Pure white sneakers",
    price: 108,
    quantity: 58,
    imgUrl: "https://i.ibb.co/tLw9kFq/METALLIC-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 80,
    name:"Louis vuitton",
    price: 158,
    quantity: 58,
    imgUrl: "https://i.ibb.co/tLw9kFq/METALLIC-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 81,
    name:"Purple jordan",
    price: 158,
    quantity: 58,
    imgUrl: "https://i.ibb.co/2yFFHVq/Jordan-1-Court-Purple-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 82,
    name:"Bristocpam",
    price: 39,
    quantity: 58,
    imgUrl: "https://i.ibb.co/cXtRzB8/jakob-owens-Wzncg-Ws3-RJ4-unsplash-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 83,
    name:"White-brown louis vuitton",
    price: 1444,
    quantity: 58,
    imgUrl: "https://i.ibb.co/BsN2kmv/075e79af-02a2-4da8-8baa-380da95e38d5-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  {
    id: 84,
    name:"Purple jordans",
    price: 1598,
    quantity: 58,
    imgUrl: "https://i.ibb.co/jzkz3h8/P-i-n-t-e-r-e-s-t-S-n-e-a-B-a-e-removebg-preview.png",
    categoryDetails: {
      MainCategory: "Fashion",
      subCategory: "Women's Fashion",
      category: "Shoes",
      topCategory: true,
    },
    productDetails: {
      sku: "21Y7FG08",
      rating: 140,
      stars: 3,
      description:{
        description: "THe tv is so good that upu can use for the production of a movie in your house oh yeah! yoh read that right",
        features: [
          "[Polyester] Durable and anti-wrinkle thigh high socks. It is not easy to break.",
"[Elasticity] knee socks have high elasticity and elastic resilience.",
"[Soft] soft and comfortable, good stretch ability.",
"[Thigh socks] flexible, comfortable and stylish.",
"[Comfortable toes] good stability stocking, the fabric is not easy to slip, and the toes are not tight to avoid pain."      
        ]
      },
      specifications: [
        "24 inches",
        "curved eeeeeeeeeeeeeeee edger right",
        "bright screen",
      ],
      delivery: [
        "Buy now and get it delivered in few days",
        "Express delivery",
        "Very affordable"
      ],

      colors: ["#FFFFFF", "#000000", "#FB5216"],
    },
    additionalDetails: {
      flashSales: true,
      percentageDecrease: "21",
    },
    brandDetails: {
      brandName: "LED",
      topBrand: true,
    },
  },
  
];
export default products;
