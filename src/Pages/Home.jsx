import React from 'react'
import Navbar from '../Components/Navbar'
import Crausal from '../Components/Crausal'
import '../PagesCss/Home.css'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
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
            image: "https://demo.bagisto.com/bagisto-common/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
            name: "Men"
        }
        ,        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
            name: "Men"
        }
        ,        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
            name: "Men"
        },
        {
            image: "https://demo.bagisto.com/bagisto-common/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
            name: "Men"
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
                                        <Image src={row.image} height={110} width={110} roundedCircle />
                                        <p className='fw-bold fs-5'>{row.name}</p>
                            </div>
                        })
                    }
                </Container>
            }
        </div>
    )
}

export default Home
