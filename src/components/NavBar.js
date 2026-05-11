import { Heading, Button, Box, useColorMode } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faComputerMouse, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
import "../styles/nav.css"
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <header>
            <nav className='nav__cont'>
                <NavLink to={"/"}>
                    <Heading textAlign={"center"} letterSpacing={"0.3rem"} fontWeight={"700"} size={"lg"} color={colorMode === 'light' ? 'teal' : 'teal.300'}>goat.codes</Heading>
                </NavLink>
                <Box display={"flex"} flexDir={"column"} w={"40%"} className={""}>

                    <ul className="nav__menu">
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/"}>
                                <Button  leftIcon={<FontAwesomeIcon icon={faGamepad}/>} colorScheme="teal" variant={"ghost"}>ALL</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/pc"}>
                                <Button  leftIcon={<FontAwesomeIcon icon={faComputerMouse}/>} colorScheme="teal" variant={"ghost"}>PC</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/ps4"}>
                                <Button  leftIcon={<FontAwesomeIcon icon={faPlaystation}/>} colorScheme="teal" variant={"ghost"}>PS4</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/xbox"}>
                                <Button  leftIcon={<FontAwesomeIcon icon={faXbox}/>} colorScheme="teal" variant={"ghost"}>XBOX</Button>
                            </NavLink>
                        </li>
                    </ul>

                </Box>

                <Box display={"flex"}>
                    <Button onClick={toggleColorMode} mr={"1rem"} borderRadius={"100%"} colorScheme={"teal"} variant={"ghost"}>
                        {colorMode === 'light' ? <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> : <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
                    </Button>

                    <NavLink to={"/cart"}>
                        <CartWidget></CartWidget>
                    </NavLink>
                </Box>
                
            </nav>
        </header>
    );
}

export default NavBar;
