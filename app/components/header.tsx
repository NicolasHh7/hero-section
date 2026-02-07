import {Nav} from './nav'
import { FaReact } from "react-icons/fa";

export const Header = () =>{
    return(
        <header
        className='
        flex 
        justify-between 
        items-center 
        px-32 py-5
        fixed
        z-999
        bg-white
        w-full
        '>
            <FaReact
            className='text-[40px]'
            />
            <Nav/>
        </header>
    )
}