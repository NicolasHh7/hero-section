import {Nav} from './nav'
import { FaReact } from "react-icons/fa";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


export const Footer = () =>{
    return(
        <footer className='px-32 py-5 bg-blue-700 text-white mt-[50px]'>
            <div className='flex flex-col gap-5' >
                <FaReact className='text-[50px]' />
                <p
                className='w-[300px]'
                >Eu sou Nicolas. Sou desenvolvedor Front-End. Agradeço pela visita e volte sempre.</p>
                <div
                className="flex justify-between items-center"
                >
                    <p>@ 2026 Nicolas Henrique</p>
                    <div
                        className="shadow-gray-400 bg-black text-white shadow-md flex gap-5 rounded-sm text-[28px] border w-fit justify-center p-5">
                        <FaGithub />
                        <FaSquareInstagram />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </footer>
    )
}