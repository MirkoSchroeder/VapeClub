import React from 'react'
import Item from '../Item/Item';
import { useParams } from "react-router-dom"
import Carousel from '../Carousel/Carousel';
import vapeSoon from '../../assets/vapecomingsoon.svg'
import { Link } from 'react-router-dom';



const ItemList = ({ items }) => {
    
    const { categoryName } = useParams()

    return (
        <div>
            <div>
            {
                (() => {
                    if(categoryName === undefined) {
                            return (
                                <div>
                                    <Carousel/>
                                    <h1 className='text-5xl uppercase pt-[1%] font-black leading-10 text-gray-800'>Productos de la tienda</h1>
                                    <div className="flex flex-wrap justify-around py-5">
                                    {
                                    items.map(item => <Item item={item} key={item.id} />)
                                    }
                                </div>
                                </div>) 
                        } else if (categoryName === "descartables") {
                        return (
                                <div>
                                    <h1 className='text-5xl pt-[1%] font-black leading-10 text-gray-800 sm:text-2xl'>{categoryName.toUpperCase().replace(/-/g, " ")}</h1>
                                    <div className="flex flex-wrap justify-around py-5">
                                        {
                                        items.map(item => <Item item={item} key={item.id} />)
                                        }
                                    </div>
                                </div>
                            )
                        } else if (categoryName === "pods" || "kit-de-inicio") {
                            return (
                                <div className='flex flex-col items-center pb-[152px]'>
                                    <h1 className='text-5xl pt-[1%] font-black leading-10 text-gray-800 pb-7'>{categoryName.toUpperCase().replace(/-/g, " ")}</h1>
                                    <Link to="/" className='flex flex-col items-center'><img className="w-48" src={vapeSoon} alt="" /><p className='text-5xl pt-[1%] font-black leading-10 text-gray-800 sm:text-3xl'>Próximamente...</p></Link>
                                </div>
                            )
                        }
                })()
            }
        </div>
            {/* <div>
                {categoryName === undefined ? (
                    <div>
                        <Carousel/>
                        <h1 className='text-5xl font-bold uppercase pt-[1%]'>Productos de la tienda</h1>
                        </div>) : (<h1 className='text-5xl font-bold'>{categoryName.toUpperCase().replace(/-/g, " ")}</h1>)}
                        <div className="flex flex-wrap justify-around py-5">
                        {
                        items.map(item => <Item item={item} key={item.id} />)
                        }
                </div>
            </div> */}
        </div>
    )
}

export default ItemList;