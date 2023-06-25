import sliderOne from '../photos/slider-01.jpg';
import sliderTwo from '../photos/slider-02.jpg';
import sliderThree from '../photos/slider-03.jpg';
import sliderFour from '../photos/slider-04.jpg';
import { CiLocationOn } from 'react-icons/ci';
import { TfiMoney } from 'react-icons/tfi';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import bannerOne from '../photos/banner-01.jpg';
import bannerTwo from '../photos/banner-02.jpg';
import bannerThree from '../photos/banner-03.jpg';
import bcrypt from 'bcryptjs'


export const slider = [
	{
		image: sliderFour,
		title: 'winter 2022 collection',
		heading: 'Valentin paul essential collection',
		subtitle: 'We offer you the best quality products.'
	},
	{
		image: sliderTwo,
		title: 'winter 2022 collection',
		heading: 'Astro Royal collection',
		subtitle: 'We offer you the best quality products.'
	},
	{
		image: sliderThree,
		title: 'winter 2022 collection',
		heading: 'White tone essential collection',
		subtitle: 'We offer you the best quality products.'
	}
];

export const services = [
	{
		icon: <CiLocationOn />,
		title: 'Free Shipping',
		desc: 'Free shipping for orders over Rs. 2000.'
	},
	{
		icon: <TfiMoney />,
		title: 'Money Gaurantee',
		desc: 'Within 4 days for an exchange.'
	},
	{
		icon: <BsTelephoneInbound />,
		title: 'Online Support',
		desc: '24/7 support service.'
	},
	{
		icon: <CiMoneyCheck1 />,
		title: 'Flexible Payment',
		desc: 'Pay with Multiple credit cards.'
	}
];

export const category = [
	'men',
	'women',
	'jacket',
	'jogger',
	'leggings',
	'shirt',
	'hoodie',
	't-shirt',
	'sleeveless',
	'pant',
	'shorts',
	'shoes',
	'coat',
	'sweater',
	'hat',
	'sweatshirt',
	'top',
	'bag'
];

export const homeBanner = [
	{
		featured: 1,
		title:"Women's New Collections",
		heading: "Big pattners are back in fashion",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
		url: "/shop/women",
		image: bannerOne
	},
	{
		featured: 2,
		title:"Men's New Season",
		heading: "The latest men's trends this season",
		desc: "Don't miss the opportunity",
		url: "/shop/men",
		image: bannerTwo
	},
	{
		featured: 3,
		title:"New Collections",
		heading: "Show your fashion with summer shoes",
		desc: "Don't miss the opportunity",
		url: "/shop/all",
		image: bannerThree
	}
]

export const users = [
	{
		name: 'JohnAdmin',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: true
	},
	{
		name: 'JohnUser',
		email: 'user@example.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: false
	}
]

export const products = [
    {
        "name": "Nylon Puffer Gilet",
        "featured" : true,
        "rating": 4.5,
        "price": 4500,
        "discount": 8,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon4-500x750.jpeg"
        ],
        "category": [
            "women","jacket"
        ],
		"stock": 56
    },
    {
        "name": "Basic Colored Sweatpants With Elastic Hems",
        "featured" : false,
        "rating": 3.5,
        "price": 2000,
        "discount": 24,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg"
        ],
        "category": [
            "women","jogger"
        ],
		"stock":10
    },
    {
        "name": "Basic High-Neck Puff Jacket",
        "featured" : true,
        "rating": 4.5,
        "price": 6000,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg"
        ],
        "category": [
            "women","jacket"
        ],
		"stock":52
    },
    {
        "name": "Basic Relax Fit Leggings",
        "featured" : false,
        "rating": 3.5,
        "price": 2000,
        "discount": 17,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings4-500x750.jpeg"
        ],
        "category": [
            "women","leggings"
        ],
		"stock": 10
    },
    {
        "name": "Check Overshirt With Pocket Detail",
        "featured" : false,
        "rating": 2.5,
        "price": 2200,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt4-500x750.jpg"
        ],
        "category": [
            "men","shirt"
        ],
		"stock": 2
    },
    {
        "name": "Rose Printed Hoodie",
        "featured" : true,
        "rating": 4.5,
        "price": 3200,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh4-500x750.jpg"
        ],
        "category": [
            "women","hoodie"
        ],
		"stock": 20
    },
    {
        "name": "World Wfeaturede Cup Print T-Shirt",
        "featured" : false,
        "rating": 4.5,
        "price": 2000,
        "discount": 8,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg"
        ],
        "category": [
            "men","t-shirt"
        ],
		"stock": 1
    },
    {
        "name": "Sleeveless Ribbed Short Dress Black",
        "featured" : false,
        "rating": 3.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack4-500x750.jpeg"
        ],
        "category": [
            "women","sleeveless"
        ],
		"stock": 15
    },
    {
        "name": "Slogan Hoodie With Label Detail",
        "featured" : false,
        "rating": 1.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan4-500x750.jpg"
        ],
        "category": [
            "women","hoodie"
        ],
		"stock": 30
    },
    {
        "name": "Slogan Hoodie With Label Detail",
        "featured" : false,
        "rating": 1.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/nylon4-500x750.jpg"
        ],
        "category": [
            "women","jacket"
        ],
		"stock": 22
    },
    {
        "name": "Pouch Pocket Hoodie Orange",
        "featured" : true,
        "rating": 2.5,
        "price": 2800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocketmen1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocketmen2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocketmen3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocketmen4-500x750.jpeg"
        ],
        "category": [
            "men","hoodie"
        ],
		"stock": 25
    },
    {
        "name": "Sleeveless Ribbed Short Dress",
        "featured" : true,
        "rating": 4.5,
        "price": 3800,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleev1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleev2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleev3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleev4-500x750.jpeg"
        ],
        "category": [
            "women","sleeveless"
        ],
		"stock": 20
    },
    {
        "name": "Short Sleeve T-Shirt With Landscape Graphic",
        "featured" : false,
        "rating": 2.5,
        "price": 1200,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/graphic1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/graphic2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/graphic3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/graphic4-500x750.jpg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 6
    },
    {
        "name": "Short Dress With Knotted Skirt",
        "featured" : false,
        "rating": 2.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/knotted1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/knotted2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/knotted3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/knotted4-500x750.jpeg"
        ],
        "category": [
            "women","sleeveless"
        ],
		"stock": 22
    },
    {
        "name": "Ripstop Cargo Trousers With Pockets",
        "featured" : false,
        "rating": 3.5,
        "price": 2400,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/trousers1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/trousers2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/trousers3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/trousers4-500x750.jpeg"
        ],
        "category": [
            "men","pant"
        ],
		"stock": 18
    },
    {
        "name": "Ripped Wfeaturede-Leg ’90s Jeans",
        "featured" : true,
        "rating": 4.5,
        "price": 2800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/wfeaturedeleg1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/wfeaturedeleg2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/wfeaturedeleg3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/wfeaturedeleg4-500x750.jpg"
        ],
        "category": [
            "women","pant"
        ],
		"stock": 29
    },
    {
        "name": "Ripped Mom Jeans – Contains Recycled Cotton",
        "featured" : false,
        "rating": 1.5,
        "price": 3000,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ripped1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ripped2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ripped3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ripped4-500x750.jpeg"
        ],
        "category": [
            "women","pant"
        ],
		"stock": 35
    },
    {
        "name": "Ripped Flared Vintage Jeans",
        "featured" : false,
        "rating": 2.5,
        "price": 1500,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/flared1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/flared2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/flared3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/flared4-500x750.jpg"
        ],
        "category": [
            "women","pant"
        ],
		"stock": 204    },
    {
        "name": "Ribbed V-Neck Cardigan With Rhinestone Detail",
        "featured" : false,
        "rating": 3.5,
        "price": 1800,
        "discount": 21,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ribbed1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ribbed2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ribbed3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/ribbed4-500x750.jpg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 5
    },
    {
        "name": "Ribbed Cropped T-Shirt With Buttons",
        "featured" : true,
        "rating": 2.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/buttons1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/buttons2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/buttons3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/buttons4-500x750.jpg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 20
    },
    {
        "name": "Relaxed Fit Pla featured Flannel Shirt",
        "featured" : false,
        "rating": 3.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt4-500x750.jpeg"
        ],
        "category": [
            "men","shirt"
        ],
		"stock": 28
    },
    {
        "name": "Quilted Bomber Jacket With Ribbed Trims",
        "featured" : false,
        "rating": 3.5,
        "price": 4000,
        "discount": 32,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber1-1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber1-2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber1-3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber1-4-500x750.jpg"
        ],
        "category": [
            "men","jacket"
        ],
		"stock": 8
    },
    {
        "name": "Pouch Pocket Hoodie",
        "featured" : false,
        "rating": 4.5,
        "price": 3800,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocket1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocket2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocket3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocket4-500x750.jpeg"
        ],
        "category": [
            "men","hoodie"
        ],
		"stock": 2
    },
    {
        "name": "Plush Bermuda Sweat Shorts",
        "featured" : true,
        "rating": 3.5,
        "price": 2200,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/plush1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/plush2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/plush3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/plush4-500x750.jpg"
        ],
        "category": [
            "men","shorts"
        ],
		"stock": 27
    },
    {
        "name": "Blue Starter Logo T-shirt",
        "featured" : false,
        "rating": 4.5,
        "price": 4000,
        "discount": 30,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/starter1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/starter2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/starter3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/starter4-500x750.jpeg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 6
    },
    {
        "name": "Oversized V-neck T-shirt",
        "featured" : false,
        "rating": 3.5,
        "price": 2600,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/vneck1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/vneck2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/vneck3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/vneck4-500x750.jpeg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 35
    },
    {
        "name": "Oversized Denim Jacket",
        "featured" : true,
        "rating": 3.5,
        "price": 3200,
        "discount": 13,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/denim1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/denim2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/denim3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/denim4-500x750.jpg"
        ],
        "category": [
            "men","jacket"
        ],
		"stock": 28
    },
    {
        "name": "Oversized Corduroy Shirt",
        "featured" : false,
        "rating": 1.5,
        "price": 2200,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corduroy1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corduroy2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corduroy3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corduroy4-500x750.jpeg"
        ],
        "category": [
            "women","shirt"
        ],
		"stock": 25
    },
    {
        "name": "Oversize Varsity Hoodie",
        "featured" : false,
        "rating": 3,
        "price": 3200,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/varsity1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/varsity2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/varsity3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/varsity4-500x750.jpeg"
        ],
        "category": [
            "women","hoodie"
        ],
		"stock": 6
    },
    {
        "name": "Oversize Hoodie With Zipper",
        "featured" : false,
        "rating": 3.5,
        "price": 3000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipper1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipper2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipper3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipper4-500x750.jpeg"
        ],
        "category": [
            "men","jacket"
        ],
		"stock": 22
    },
    {
        "name": "Naruto Itachi Print T-shirt",
        "featured" : false,
        "rating": 2.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/naruto1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/naruto2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/naruto3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/naruto4-500x750.jpeg"
        ],
        "category": [
            "men","t-shirt"
        ],
		"stock": 58
    },
    {
        "name": "Loose-fit Jeans",
        "featured" : false,
        "rating": 3,
        "price": 400,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/loose1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/loose2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/loose3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/loose4-500x750.jpg"
        ],
        "category": [
            "men","pant"
        ],
		"stock": 2
    },
    {
        "name": "Long Sleeve Graphic T-shirt",
        "featured" : false,
        "rating": 3.5,
        "price": 3500,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleeve1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleeve2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleeve3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sleeve4-500x750.jpg"
            
        ],
        "category": [
            "women","t-shirt",
        ],
		"stock": 20
    },
    {
        "name": "Long Sleeve Sweatshirt Dress",
        "featured" : false,
        "rating": 3.5,
        "price": 2500,
        "discount": 7,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dress1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dress2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dress3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/dress4-500x750.jpg"
            
        ],
        "category": [
            "women","t-shirt",
        ],
		"stock": 7
    },
    {
        "name": "Lightweight Zipped Bomber Jacket",
        "featured" : false,
        "rating": 4.5,
        "price": 2600,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipped1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipped2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipped3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/zipped4-500x750.jpeg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 44
    },
    {
        "name": "Knee-High Heeled Boots",
        "featured" : false,
        "rating": 4.5,
        "price": 6000,
        "discount": 20,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/boots1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/boots2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/boots3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/boots4-500x750.jpeg"
        ],
        "category": [
            "women","shoes"
        ],
		"stock": 16
    },
    {
        "name": "Hot Stuff Hoodie",
        "featured" : false,
        "rating": 4.5,
        "price": 3200,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/stuff1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/stuff2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/stuff3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/stuff4-500x750.jpeg"
        ],
        "category": [
            "women","hoodie"
        ],
		"stock": 8
    },
    {
        "name": "Feminine-cut Blazer",
        "featured" : false,
        "rating": 2.5,
        "price": 4200,
        "discount": 12,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blazer1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blazer2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blazer3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blazer4-500x750.jpg"
        ],
        "category": [
            "women","coat"
        ],
		"stock": 27
    },
    {
        "name": "Faux Suede Jacket With Pockets",
        "featured" : true,
        "rating": 5,
        "price": 3400,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/suede1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/suede2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/suede3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/suede4-500x750.jpg"
        ],
        "category": [
            "men","jacket"
        ],
		"stock": 9
    },
    {
        "name": "Faux Leather Blazer",
        "featured" : false,
        "rating": 2.5,
        "price": 2400,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/faux1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/faux2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/faux3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/faux4-500x750.jpg"
        ],
        "category": [
            "women","coat"
        ],
		"stock": 20
    },
    {
        "name": "Double-Breasted Coat",
        "featured" : false,
        "rating": 3.5,
        "price": 2400,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/breasted-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/breasted2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/breasted3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/breasted4-500x750.jpeg"
        ],
        "category": [
            "women","coat"
        ],
		"stock": 20
    },
    {
        "name": "Daisy Jacquard Knit Cardigan",
        "featured" : false,
        "rating": 3.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cardigan1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cardigan2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cardigan3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cardigan4-500x750.jpg"
        ],
        "category": [
            "women","sweater"
        ],
		"stock": 20
    },
    {
        "name": "Cropped Short Sleeve T-shirt With Embro featured Detail",
        "featured" : false,
        "rating": 4.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cropped1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cropped2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cropped3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/cropped4-500x750.jpeg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 20
    },
    {
        "name": "Cropped Satin Bomber Jacket",
        "featured" : false,
        "rating": 4.5,
        "price": 4500,
        "discount": 22,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bomber4-500x750.jpg"
        ],
        "category": [
            "women","jacket"
        ],
		"stock": 20
    },
    {
        "name": "Corduroy Bucket Hat",
        "featured" : false,
        "rating": 4.5,
        "price": 1600,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bucket3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bucket2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bucket1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/bucket4-500x750.jpg"
        ],
        "category": [
            "men","hat"
        ],
		"stock": 20
    },
    {
        "name": "Burger King Flaming Hot Sweatshirt",
        "featured" : false,
        "rating": 3.5,
        "price": 2600,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/burger1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/burger2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/burger3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/burger4-500x750.jpeg"
        ],
        "category": [
            "women","sweatshirt"
        ],
		"stock": 20
    },
    {
        "name": "Brown Mountain Graphic Sweatshirt",
        "featured" : false,
        "rating": 4.0,
        "price": 3800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/mountain1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/mountain2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/mountain3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/mountain4-500x750.jpeg"
        ],
        "category": [
            "women","sweatshirt"
        ],
		"stock": 20
    },
    {
        "name": "Brown Arizona Sweatshirt",
        "featured" : false,
        "rating": 3.0,
        "price": 2500,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/arizona1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/arizona2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/arizona3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/arizona4-500x750.jpeg"
        ],
        "category": [
            "women","sweatshirt"
        ],
		"stock": 20
    },
    {
        "name": "Belted Trench Coat",
        "featured" : false,
        "rating": 4.5,
        "price": 2500,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/belted1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/belted2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/belted3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/belted4-500x750.jpg"
        ],
        "category": [
            "women","coat"
        ],
		"stock": 20
    },
    {
        "name": "Basic Slim Fit Chinos Trousers",
        "featured" : false,
        "rating": 4.5,
        "price": 3200,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/chinos1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/chinos2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/chinos3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/chinos4-500x750.jpeg"
        ],
        "category": [
            "men","jogger"
        ],
		"stock": 20
    },
    {
        "name": "Basic Mom Jeans Blue",
        "featured" : true,
        "rating": 4.5,
        "price": 3000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blue1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blue2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/blue3-500x750.jpeg"
        ],
        "category": [
            "men","jogger"
        ],
		"stock": 29
    },
    {
        "name": "Varsity Jacket With Patch Details",
        "featured" : true,
        "rating": 4.5,
        "price": 4000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/jacket1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/jacket2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/jacket3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/jacket4-500x750.jpg"
        ],
        "category": [
            "women","jacket"
        ],
		"stock": 7
    },
    {
        "name": "Basic Oversize Fleece Sweatshirt",
        "featured" : false,
        "rating": 4.5,
        "price": 2700,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweat1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweat2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweat3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweat4-500x750.jpeg"
        ],
        "category": [
            "women","sweater"
        ],
		"stock": 98
    },
    {
        "name": "Asymmetric Long Sleeve Top With High Neck",
        "featured" : false,
        "rating": 3.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/asym1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/asym2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/asym3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/asym4-500x750.jpeg"
        ],
        "category": [
            "women","top"
        ],
		"stock": 45
    },
    {
        "name": "Sweater With Chain Detail",
        "featured" : false,
        "rating": 3.5,
        "price": 1800,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweater1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweater2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweater3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/sweater4-500x750.jpg"
        ],
        "category": [
            "women","sweater"
        ],
		"stock": 20
    },
    {
        "name": "Shoulder Bag With A Mock Croc Finish",
        "featured" : false,
        "rating": 3.5,
        "price": 4000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shoulder1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shoulder2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shoulder3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/shoulder4-500x750.jpeg"
        ],
        "category": [
            "women","bag"
        ],
		"stock": 29
    },
    {
        "name": "Strappy Corset Top",
        "featured" : false,
        "rating": 3.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corset1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corset2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corset3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/corset4-500x750.jpeg"
        ],
        "category": [
            "women","top"
        ],
		"stock": 20
    },
    {
        "name": "Soft Shoulder Bag",
        "featured" : false,
        "rating": 3.5,
        "price": 2800,
        "discount": 10,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/softbag1-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/softbag2-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/softbag3-500x750.jpeg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/softbag4-500x750.jpeg"
        ],
        "category": [
            "women","bag"
        ],
		"stock": 25
    },
    {
        "name": "Tie-Dye Lines Sweatshirt",
        "featured" : true,
        "rating": 3.5,
        "price": 3000,
        "discount": 12,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/lines1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/lines2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/lines3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/lines4-500x750.jpg"
        ],
        "category": [
            "women","sweatshirt"
        ],
		"stock": 8
    },
    {
        "name": "The Rolling Stones Groovy T-Shirt",
        "featured" : false,
        "rating": 4.5,
        "price": 2000,
        "discount": null,
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum",
        "image": [
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/groovy1-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/groovy2-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/groovy3-500x750.jpg",
            "https://klbtheme.com/clotya/wp-content/uploads/2022/04/groovy4-500x750.jpg"
        ],
        "category": [
            "women","t-shirt"
        ],
		"stock": 29
    }
    
]