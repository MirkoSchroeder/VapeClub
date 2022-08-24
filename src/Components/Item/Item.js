import React from 'react'
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({item}) => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-[5%]" id={item.id}>
            <figure class="px-10 pt-10">
                <img src={item.image} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title uppercase text-lg">{item.producto}</h2>
                <p className='font-bold'>${item.precio}</p>
                <div class="card-actions flex justify-center">
                    <Link to={`/item/${item.id}`}>
                        <button class="cta">
                            <span class="hover-underline-animation font-bold"> Mas información </span>
                            <svg id="arrow-horizontal" className='hidden' xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Item