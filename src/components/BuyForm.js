import { useForm } from "react-hook-form";
// import { Heading } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import {
    Box,
    Heading,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    useColorMode
} from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from "firebase/firestore" 
import { Context } from "./CartContext";



const BuyForm = ({cart, total}) => {
    const { colorMode } = useColorMode();
    const [ticket, setTicket] = useState({buyer: {}, items: [], total: total});
    const [buyer, setBuyer] = useState({});
    const [purchaseID, setPurchaseID] = useState("");
    const cartCont = useContext(Context);
    
    useEffect(() => {
        if(cart.length > 0){
            let buyItems = [];
            cart.map(g => buyItems = [...buyItems, {id: g.item.id, title: g.item.title, price: g.item.price, quant: g.quant}]);
            setTicket({...ticket, items: buyItems, total: total});
        } else{
            setTicket({...ticket, items: [], total: 0});
        }
    }, [cart, ticket, total]);
    
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setBuyer({ ...buyer, [name]: value });
		setTicket({ ...ticket, buyer: buyer });
	}
    
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async () => {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, 'purchases'), {
			ticket,
		});
        setPurchaseID(docRef.id);
        cartCont.clear();
        reset();
    }

    return (
        <Box padding={"2rem"}>
            <Heading color={colorMode === 'light' ? 'teal' : 'teal.300'}>BUY CHECKOUT</Heading>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* NAME INPUT */}
                <FormControl onChange={handleOnChange} isInvalid={errors.name} padding={"1rem 0rem"}>
                    <FormLabel color={colorMode === 'light' ? 'teal' : 'teal.300'} htmlFor='name'>NAME</FormLabel>
                    <Input
                        id='name'
                        placeholder='name'
                        {...register('name', {
                            required: 'This field is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                        variant={"filled"} 
                        focusBorderColor={"teal.500"}
                        _placeholder={{color: colorMode === 'light' ? 'teal' : 'teal.300', opacity: "0.7"}}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                
                {/* PHONE INPUT */}
                <FormControl onChange={handleOnChange} isInvalid={errors.phone} padding={"1rem 0rem"}>
                    <FormLabel color={colorMode === 'light' ? 'teal' : 'teal.300'} htmlFor='name'>PHONE NUMBER</FormLabel>
                    <Input
                        id='phone'
                        placeholder='Phone Number'
                        type={"number"}
                        {...register('phone', {
                            required: 'This field is required',
                            // minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                        
                        variant={"filled"} 
                        focusBorderColor={"teal.500"}
                        _placeholder={{color: colorMode === 'light' ? 'teal' : 'teal.300', opacity: "0.7"}}
                    />
                    <FormErrorMessage>
                        {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                </FormControl>

                {/* EMAIL INPUT */}
                <FormControl onChange={handleOnChange} isInvalid={errors.email} padding={"1rem 0rem"}>
                    <FormLabel color={colorMode === 'light' ? 'teal' : 'teal.300'} htmlFor='name'>EMAIL</FormLabel>
                    <Input
                        id='email'
                        placeholder='Email'
                        type={"email"}
                        {...register('email', {
                            required: 'This field is required',
                            // minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                        
                        variant={"filled"} 
                        focusBorderColor={"teal.500"}
                        _placeholder={{color: colorMode === 'light' ? 'teal' : 'teal.300', opacity: "0.7"}}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                
                <Box>
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                        FINISH
                    </Button>
                    
                    {purchaseID !== "" ? <Heading color={colorMode === 'light' ? 'teal' : 'teal.300'} size={"md"} padding={"1rem 0rem"} lineHeight={"1.8rem"}> Your purchase ID: <span className={colorMode === 'light' ? 'span' : 'spanDark'}>{purchaseID}</span>  <br></br> Please, save it carefully. <br></br> Thanks for shopping with us! </Heading> : null}

                </Box>
            </form>

        </Box>
    )
}

export default BuyForm;