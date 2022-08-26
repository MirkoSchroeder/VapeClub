import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase"

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result) => {
                const id = result.id;
                const item = { id, ...result.data() };
                setProducto(item);
            })
            .catch((error) => {
                console.log(error);
            });
        
    }, [id]);

    return (
        <div>
            <div className="flex justify-center pt-3 sm:text-center">
                <h2 className="text-5xl font-black leading-10 text-gray-800 pt-3 pb-5 uppercase sm:text-4xl">Informacion del producto</h2>
            </div>
            <div className="flex justify-center py-8">
            {Object.keys(producto).length !== 0 ? (
                <ItemDetail item={producto} />
            ) : (
                ""
            )}
            </div>
        </div>
    )

}

export default ItemDetailContainer