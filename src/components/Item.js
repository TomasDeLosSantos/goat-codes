import { Heading, Box, useColorMode, Badge } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, pictureUrl, category }) => {
    const { colorMode } = useColorMode();
    let [loaded, setLoaded] = useState(false);

    return (
        <Box display={"flex"}
            flexDir={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            padding={"0.5rem"}
            margin={"1rem"}
            width={"30%"}
            minWidth={"300px"}
            position={"relative"}>

            <Link to={`/game/${id}`}>
                <img className='img hover' src={pictureUrl} onLoad={() => setLoaded(true)} />
            </Link>

            {loaded ? (
                <Box display={"flex"} alignContent={"center"} justifyContent={"space-between"} mt={"0.5rem"} mb={"0.5rem"}>

                    <Heading size={"md"} color={colorMode === 'light' ? 'teal' : 'teal.300'} textAlign={"center"} mb={"0.5rem"}>
                        {title + "  "}
                        <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto"}>{category}</Badge>
                    </Heading>

                    <Heading size={"md"} color={colorMode === 'light' ? 'teal' : 'teal.300'}>
                        {"$" + price}
                    </Heading>
                </Box>) : null}
        </Box>
    );
}

export default Item;

