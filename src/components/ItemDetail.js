import { Heading, Text, Box, useColorMode} from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { Context } from './CartContext';

const ItemDetail = ({item = []}) => {
    const { colorMode } = useColorMode();
    
    const cart = useContext(Context);

    const onAdd = (quant) => {
        cart.addItem(item, quant);
    } 

    return(
        <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"} width={"100%"}>
            <img className='img' alt={`${item.title}`} width={"50%"} src={item.pictureUrl}/>
            
            <Box    display={"flex"} 
                    flexDir={"column"} 
                    alignContent={"center"} 
                    justifyContent={"center"} 
                    borderRadius={"10px"} 
                    padding={"0.5rem"}
                    margin={"1rem auto"}
                    width={"40%"}>
                    

                <Heading size={"lg"} color={colorMode === 'light' ? 'teal' : 'teal.300'} textAlign={"center"} mb={"0.5rem"}>
                    {item.title + "  "}
                </Heading>

                <Text fontSize={"lg"} textAlign={"center"}>
                    {item.description}
                </Text>

                <ItemCount title={item.title} stock={item.stock} initial={item.stock > 0 ? 1 : 0} price={item.price} onAdd={onAdd}></ItemCount>
            </Box>
        </Box>
    );
}

export default ItemDetail;