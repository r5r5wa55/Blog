import { Button, Navbar ,TextInput } from "flowbite-react";
import { Link ,useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; 
import {FaMoon} from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white ">
            <span className="text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 rounded-lg">Affiliate VvE</span>
            Blog
        </Link>
        <form >
          <TextInput 
            className="hidden lg:inline "
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}>
          </TextInput>
          <Button className=" lg:hidden w-12 h-10" color="gray" pill><AiOutlineSearch/></Button>
        </form>
        <Link className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 sm:inline hidden" color="gray" pill><FaMoon /></Button>
          <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
          <Navbar.Toggle />
        </Link>
        <Navbar.Collapse>
          <Navbar.Link active={path==="/"} as={'div'}>
              <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path==="/about"} as={'div'}>
              <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/projects'} as={'div'}>
              <Link to='/projects' >Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
