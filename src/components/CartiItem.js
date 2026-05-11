import { Box, Heading, Badge, useColorMode } from "@chakra-ui/react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "./CartContext";
import { useContext } from "react";

const CartItem = ({game, quant}) => {
    const { colorMode } = useColorMode();
    const {id, pictureUrl, price, title} = game;

    const cart = useContext(Context);
    return(
        <Box    display={"flex"} 
                flexDir={"column"} 
                alignContent={"center"} 
                justifyContent={"center"} 
                borderRadius={"10px"} 
                padding={"0.5rem"}
                margin={"1rem"}
                width={"30%"}
                minWidth={"300px"}
                position={"relative"}
                >
                    
            <Box    className="img hover delete gameCard" 
                    display={"flex"}
                    flexDirection={"column"}
                    onClick={() => cart.removeItem(id)}>
                <FontAwesomeIcon icon={faX} className={"delete__icon"}></FontAwesomeIcon>
                <img className='img' src={pictureUrl}/>
            </Box>

            <Box display={"flex"} alignContent={"center"} justifyContent={"space-between"} mt={"0.5rem"} mb={"0.5rem"}>

                <Heading size={"md"} color={colorMode === 'light' ? 'teal' : 'teal.300'} textAlign={"center"} mb={"0.5rem"}>
                    {title + "  "}
                    <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto"}>{quant + " units"}</Badge>
                </Heading>

                <Heading size={"md"} color={colorMode === 'light' ? 'teal' : 'teal.300'}>
                    {"$" + price}
                </Heading>
            </Box>
        </Box>
    )
}   

export default CartItem;