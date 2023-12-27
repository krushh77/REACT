import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import './../../Styles/Allproduct.css'
import { Router, useNavigate } from 'react-router-dom'


const AllProducts = () => {
    const [products , setproducts] = useState ([]);
    console.log(products, "products")


    const router =useNavigate();
    

    async function getData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data, "response.data")
            setproducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    function Routing(id){
        // toast(id)
        router(`/singleproduct/${id}`);
    }

    useEffect(() => {
        // toast.success("Component rendered on browser...")
        getData();
    }, [])
    return (
 <div>
            {products?.length ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map((product) => (
                    <div onClick={() => Routing(product.id)} style={{ height: '500px', width: "25%", border: '2px solid black', marginBottom: '30px', cursor: 'pointer' }}>
                        <img style={{ height: "400px", margin: 'auto' }} src={product.image} />
                        <h1>{product.title}</h1>
                        <h3>${product.price}/-</h3>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
    )
}


export default AllProducts