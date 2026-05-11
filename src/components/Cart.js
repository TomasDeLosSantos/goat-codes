import {
    Box,
    Heading,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorMode
} from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./CartContext";
import CartItem from "./CartiItem";
import BuyForm from "./BuyForm";

const Cart = () => {
    const { colorMode } = useColorMode();
    const cart = useContext(Context);
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const finalRef = React.useRef(null)

    return (
        <Box className={colorMode === "light" ? "checkout" : "checkoutDark"} maxWidth={"1320px"} margin={"auto"} padding={"1rem"}>
            <Box maxWidth={"1320px"} margin={"auto"} display={"flex"} justifyContent={"space-between"} alignContent={"center"} padding={"0.5rem"}>
                <Heading color={colorMode === 'light' ? 'teal' : 'teal.300'}>
                    YOUR CART
                    <Button colorScheme={"red"} variant={"solid"} size={"sm"} ml={"1rem"} onClick={cart.clear}>CLEAR</Button>
                </Heading>
                <Heading color={colorMode === 'light' ? 'teal' : 'teal.300'}>
                    {"TOTAL: $" + cart.cart.reduce((a, b) => a + (b.item.price * b.quant), 0)}
                    <Button ml={"1rem"} variant={"solid"} colorScheme={"blue"} size={"lg"} isDisabled={cart.cart.length <= 0} onClick={onOpen}>BUY</Button>
                </Heading>

            </Box>
            <Box display={"flex"} flexWrap={"wrap"}>
                {cart.cart.length > 0
                    ?
                    cart.cart.map(i => <CartItem key={i.item.id} game={i.item} quant={i.quant}></CartItem>)
                    :
                    <NavLink to={"/"} className={"center"}>
                        <Button variant={"solid"} colorScheme={"blue"} margin={"auto"} size={"lg"}>Explore our catalog</Button>
                    </NavLink>
                }
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <BuyForm cart={cart.cart} total={cart.cart.reduce((a, b) => a + (b.item.price * b.quant), 0)}></BuyForm>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Box>


    );
}

export default Cart;