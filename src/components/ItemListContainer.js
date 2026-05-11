import { Heading, Box, useColorMode } from '@chakra-ui/react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    const { colorMode } = useColorMode();
    let category = useParams().category;
    if(greeting === undefined){
        greeting = category + " games";
    }
    return (
        <Box maxWidth="1320px" margin={"auto"}>
            <Heading size={"2xl"} color={colorMode === 'light' ? 'teal' : 'teal.300'}>{greeting}</Heading>
            <ItemList category={category}></ItemList>
        </Box>
    );
}
export default ItemListContainer;