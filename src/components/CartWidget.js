import { Button, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Context } from './CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    let cart = useContext(Context);
    return(
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Button leftIcon={<FontAwesomeIcon icon={faCartShopping}/>} colorScheme="teal" variant={"solid"}>CART</Button>
            {cart.cart.length > 0 ? <Badge colorScheme={"blue"} textAlign={"center"} mt={"0.2rem"} width={"-webkit-fit-content"}>{cart.cart.reduce((a, b) => a + b.quant, 0) + " items"}</Badge> : null}
            
        </Box>
    );
}

export default CartWidget;