import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from '../product';


export class ProductData implements InMemoryDbService{
    createDb(){
        const products: IProduct[] = [
            {
                id:1,
                ProductName:'Blue Jhumka',
                code:'jhm 100',
                price:150,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4.5,
                image:"https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/bluejhumkas.jpg"
            },
            {
                id:2,
                ProductName: 'Bangles',
                code:'ban 101',
                price:200,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:3.5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/bangles.jpg'
            },            
            {
                id:3,
                ProductName:'Green Necklace',
                code:'nec 102',
                price:200,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/greennecklace.jpg'
            },            
            {
                id:4,
                ProductName:'Golden Jewellery Set',
                code:'jew 103',
                price:600,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4.5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/goldenjewelleryset.jpg'
            },            
            {
                id:5,
                ProductName:'Blue Gold Bangles',
                code:'ban 104',
                price:300,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/bluegoldenbangles.jpeg'
            },            
            {
                id:6,
                ProductName:'Black Pink Necklace',
                code:'nec 105',
                price:500,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:3,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/blackpinknecklace.jpg'
            },
            {
                id:7,
                ProductName:'Multicolor Necklace',
                code:'nec 106',
                price:500,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:3.5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/multicolournecklace.jpg'
            },
            {
                id:8,
                ProductName:'Red Necklace',
                code:'nec 107',
                price:300,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:3.5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/rednecklace.jpg'
            },
            {
                id:9,
                ProductName:'Blue Jewellery Set',
                code:'jew 108',
                price:500,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4.5,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/royalbluejewelleryset.jpg'
            },
            {
                id:10,
                ProductName:'Pink Jewellery Set',
                code:'jew 109',
                price:800,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/pinkjewelleryset.jpg'
            },
            {
                id:11,
                ProductName:'Brown Bangles',
                code:'ban 110',
                price:400,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:3,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/brownbangles.jpg'
            },
            {
                id:12,
                ProductName:'Blue Yellow Bangles',
                code:'ban 111',
                price:500,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4.7,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/blueyellowbangles.jpg'
            },
            {
                id:13,
                ProductName:'Green Golden Bangles',
                code:'ban 112',
                price:350,
                ProductDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                rating:4.8,
                image:'https://raw.githubusercontent.com/Nithya-99/HMWL_website/master/images/greengoldenbangles.jpg'
            }
        ];
        return {products};
    }

}