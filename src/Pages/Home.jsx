import React from 'react'
import Navbar from '../Components/Navbar'
import Crausal from '../Components/Crausal'
import '../PagesCss/Home.css'
import { Card, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Products from '../Components/Products'
import Game from '../Components/Game'
import Casd from "../Components/Casd"
import Getready from '../Components/Getready'
import Getready2 from '../Components/Getready2'
import Getready3 from '../Components/Getready3'
import Grid from '../Components/Grid'



function Home() {


    const data1 = [
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
            name: "Men"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/3/IZckbPVQSOboHJrXmguJnJA3jPCUD1GfjSZHgtB3.webp",
            name: "Kids"
        }
        ,        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/4/oT8LA8gG6K7UlBgzB3ZVOjczO3iKyRkrVLD6d1s9.webp",
            name: "Women"
        }
        ,        {
            image: "https://www.jiomart.com/images/product/original/493177752/apple-iphone-14-128-gb-blue-digital-o493177752-p593687859-2-202306301807.jpeg?im=Resize=(420,420)",
            name: "Apple"
        }
        ,        {
            image: "https://elcytec.com/wp-content/uploads/2022/05/samsung_galaxy_s22_ultra-1.jpg",
            name: "Samsung"
        }
        ,        {
            image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A4/10548/1689591781105/front-left-side-47.jpg",
            name: "Audi"
        },
        {
            image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/09_18_refresh/s/gw_hura_s_02_m.jpg",
            name: "Lamborghini"
        }
    ]


    const data2 = [
        {
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
            name: "Adorable BunnyHop Baby Shoes",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
            name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price:"As low as $16.99"
        }
        ,        {
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp",
            name: "AeroFit Women's Fitness Performance Jacket",
            price:"As low as $16.99"
        }
        ,        {
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
            name: "All-in-One Smart Casual Outfit Set",
            price:"As low as $16.99"
        }
    
    ]

    const data3 = [
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/3XL8cmo8sM0K8wuJm9wz6csE3rMXBe9pfYG9IlHW.webp",
            name: "Adorable BunnyHop Baby Shoes",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/d6GYuRe8cV9pby9uxfKmhRItjnJ48wVOAFJemptv.webp",
            name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/7ngJKLLNxpwAegtDwhfuVUnrTKS8fSFDUVOdUokB.webp",
            name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/3XL8cmo8sM0K8wuJm9wz6csE3rMXBe9pfYG9IlHW.webp",
            name: "Adorable BunnyHop Baby Shoes",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/KrdvSvksB2A9Zi9nIfcEMaRFxTaeXUUY7a1R8r1K.webp",
            name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price:"As low as $16.99"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/theme/5/qKtsz80jsMSm2hcyrHoyg6c13e8nWyUG7yzayfji.webp",
            name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price:"As low as $16.99"
        }
    
    ]

    return (
        <div>
            <Navbar />
            <Crausal />
            
            <Container className='p-4 get' fluid>
                <h4 className='text-center'>Get UPTO 40% OFF on your 1st order SHOP NOW</h4>
            </Container>
            {
                <Container className='cir-img'>
                    {
                        data1.map((row)=>{
                            return <div className='d-flex flex-column align-items-center gap-4'>
                                        <Image className='img2' src={row.image} height={110} width={110} roundedCircle />
                                        <p className=' name fw-bold pe-auto fs-5'>{row.name}</p>
                            </div>
                        })
                    }
                </Container>
            }

            <h1 className='new'>New Products</h1>
            <div className='product'>
                {
                    data2.map((row)=>{
                       return <Products data={row}/>
                    })
                }
            </div>
            <Container className='btn'>
            <button className='btn1'>View All</button>
            </Container>

            <Game/>

            <div className='casd'>
                {
                    data3.map((row)=>{
                       return <Casd data={row}/>
                    })
                }
            </div>

            <Getready/>

            <h1 className='new'>New Products</h1>
            <div className='product'>
                {
                    data2.map((row)=>{
                       return <Products data={row}/>
                    })
                }
            </div>
            <Container className='btn'>
            <button className='btn1'>View All</button>
            </Container>

            <Game/>

            <Getready2/>
            <h1 className='new'>All Products</h1>
            <div className='product'>
                {
                    data2.map((row)=>{
                       return <Products data={row}/>
                    })
                }
            </div>
            <Container className='btn'>
            <button className='btn1'>View All</button>
            </Container>

            <Getready3/>

               <Grid/>

                
            
        </div>
    )
}

export default Home
