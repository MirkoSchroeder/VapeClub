import ItemCount from "../../ItemCount/ItemCount";
import { cartContext } from "../../Context/CartContext.js";
import { useContext } from "react";

const ItemDetail = ({ item }) => {
    const { addProduct } = useContext(cartContext);

    const onAdd = (cantidad) => {
        addProduct(item, cantidad)
    }
    return (
        
        <div class="mb-3 max-w-xl md:border-y" id={item.id}>
            <div class="row g-0">
                <div class="col-md-4 flex items-center">
                    <img src={item.image} class="img-fluid rounded-start" alt={item.producto} />
                </div>
                <div class="col-md-8 sm:text-center">
                    <div class="card-body">
                        <div className="sm:flex sm:justify-center">
                            <h5 class="card-title pt-2 uppercase font-bold">{item.producto}</h5>
                        </div>
                        <p class="card-text font-bold">Precio: ${item.precio}</p>
                        <p class="card-text font-bold">Tipo: {item.tipo}</p>
                        <p class="card-text font-bold">Puffs: {item.puff}</p>
                        <p class="card-text font-bold">Sabor: {item.sabor}</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>


        /* <div className="flex flex-row justify-center py-11" id={item.id}>
            <Card className="flex flex-row">
                <Card.Img variant="top" className="h-fit m-auto mr-50 md:max-w-sm border-r-solid border-r-2 border-r-black" src={item.image} />
                <Card.Body>
                    <div className="ml-5">
                        <Card.Title className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.producto}</Card.Title>
                        <Card.Text>
                            <p className="text-3xl text-gray-900">Precio: ${item.precio}</p>
                            <p>Tipo: {item.tipo}</p>
                            <p>Puffs: {item.puff}</p>
                            <p>Sabor: {item.sabor}</p>
                        </Card.Text>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </Card.Body>
            </Card>
        </div> */
    )

}


export default ItemDetail;