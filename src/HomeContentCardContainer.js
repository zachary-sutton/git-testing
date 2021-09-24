import React, {useEffect, useState} from "react"
import HomeContentCard from "./HomeContentCard"

function HomeContentCardContainer(){

    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>(
                setProducts(json.slice(1, 5))))
                setIsLoading(false)            
    }, [])

    //&& meeans if statement on left is false it won't even bother with the code on the right
    //in this case when products is undefined it returns false
    //when the fetch request is completed the component rerenders and products is populated, returning true - .map will now run
    const mapItems = products && products.map(prod => <HomeContentCard name={prod.title} src={prod.image} desc={prod.description} key={prod.id} />)

    console.log(isLoading)

    const loadingTxt = isLoading ? <h1>Loading please wait...</h1> : mapItems

    return(
        <>
            <h1>3 Products</h1>
            <p>cool tshirts brother</p>
            <div className="home-content-card-container">
                {loadingTxt}
            </div>
        </>
    )
}

export default HomeContentCardContainer