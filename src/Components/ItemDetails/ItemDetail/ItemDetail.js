import ItemCount from "../../ItemCount/ItemCount";
import { cartContext } from "../../Context/CartContext.js";
import { useContext } from "react";

const ItemDetail = ({ item }) => {
    const { addProduct } = useContext(cartContext);

    const onAdd = (cantidad) => {
        addProduct(item, cantidad)
    }
    return (
        
        <div className="mb-3 max-w-xl md:border-y" id={item.id}>
            <div className="row g-0">
                <div className="col-md-4 flex items-center">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.producto} />
                </div>
                <div className="col-md-8 sm:text-center">
                    <div className="card-body">
                        <div>
                            <h5 className="card-title pt-2 uppercase font-bold justify-center">{item.producto}</h5>
                        </div>
                        <p className="card-text font-bold">Precio: ${item.precio}</p>
                        <p className="card-text font-bold">Tipo: {item.tipo}</p>
                        <p className="card-text font-bold">Puffs: {item.puff}</p>
                        <p className="card-text font-bold">Sabor: {item.sabor}</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ItemDetail;