import React from 'react'
import "./SearchResult.sass"
import SearchBar from '../../Components/SearchBar/SearchBar'
import ZeviLogo from "../../Assets/ZeviLogo.png"
import Arrow from "../../Assets/Arrow.png"
import ReactSimpleStarRating from "react-rating-stars-component"
import SearchClothGrid from '../../Components/SearchClothGrid/SearchClothGrid'
import { faker } from '@faker-js/faker'
import {Link} from 'react-router-dom'
export default function SearchResult() {

    const clothItems = [];

    for (let i = 0; i < 8; i++) {
        const imageUrl = faker.image.image();
        const clothName = faker.commerce.productName();
        const price1 = faker.commerce.price();
        const price2 = faker.commerce.price();
        const number1 = faker.datatype.number(5)
        const number2 = faker.datatype.number(300)
        clothItems.push({ imageUrl, clothName, price1, price2, number1, number2 })
    }

    return (
        <div className="search-result-container">
            <SearchBar className="search-bar" />
            <Link to={"/"}>
            <img src={ZeviLogo} alt="zevi-logo" className='zevi-logo' />
            </Link>
            <p className='header'>Search Results</p>
            <div className="left-side-bar">
                <div className="brand-box">
                    <div>BRAND</div>
                    <div><img src={Arrow} alt="arrow" /></div>
                </div>
                <div className='brand-child'>
                    <div className='a'>
                        <div className='square-one'></div>
                        <div>Mango</div>
                    </div>
                    <div className='b'>
                        <div className='square-two'></div>
                        <div>H&M</div>
                    </div>
                </div>
                <div className='line'></div>
                <div className="brand-box1">
                    <div>PRICE RANGE</div>
                    <div><img src={Arrow} alt="arrow" /></div>
                </div>
                <div className='brand-child1'>
                    <div className='a'>
                        <div className='square-one1'></div>
                        <div>Under 500</div>
                    </div>
                    <div className='b'>
                        <div className='square-two1'></div>
                        <div>1000 To 3000</div>
                    </div>
                </div>
                <div className='line1'></div>
                <div className="brand-box">
                    <div>RATINGS</div>
                    <div><img src={Arrow} alt="arrow" /></div>
                </div>
                <div className='brand-child'>
                    <div className='a'>
                        <div className='square-one'></div>
                        <div><ReactSimpleStarRating ratingValue={3} size={20} value={5} edit={false} /></div>
                    </div>
                    <div className='b'>
                        <div className='square-two'></div>
                        <div><ReactSimpleStarRating ratingValue={3} size={20} value={4} edit={false} /></div>
                    </div>
                    <div className='b'>
                        <div className='square-two'></div>
                        <div><ReactSimpleStarRating ratingValue={3} size={20} value={3} edit={false} /></div>
                    </div>
                    <div className='b'>
                        <div className='square-two'></div>
                        <div><ReactSimpleStarRating ratingValue={3} emptyColor='#CDCCC8' size={20} value={2} edit={false} /></div>
                    </div>
                    <div className='b'>
                        <div className='square-two'></div>
                        <div><ReactSimpleStarRating emptyColor='#ffffff' size={20} value={1} edit={false} /></div>
                    </div>
                </div>

            </div>
            <div className='right-side-bar'>
                <SearchClothGrid clothItems={clothItems} />
            </div>
        </div>
    )
}
