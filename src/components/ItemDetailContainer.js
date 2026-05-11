import { Box, Spinner } from '@chakra-ui/react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore" 

const ItemDetailContainer = () => {
    // const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    let id = useParams().id;

    useEffect(() => {
        const db = getFirestore();
        const game = doc(db, "games", id);
        getDoc(game).then((snapshot) => {
            if(snapshot) setItem(snapshot.data());
        })
    }, [id]);

    return (
        <Box maxWidth="1320px" margin={"auto"} display={"flex"} padding={"3rem"}>
            {/* ESPERO HASTA QUE TENGA LA PROPIEDAD ID PARA QUE APAREZCA EL SPINNER AL CARGAR EL ITEM */}
            {item.hasOwnProperty("id") ? <ItemDetail item={item}></ItemDetail> : <Spinner m={"2rem auto"} size={"lg"} thickness={"4px"} color={"teal"}></Spinner>}
        </Box>
    );
}
export default ItemDetailContainer;