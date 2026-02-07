import Image from "next/image";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";

export const Hero = () =>{
    return(
       <section
       className="grid grid-cols-[2fr_1fr] gap-50 items-center "
       >
            <div
            className="flex flex-col gap-6"
            >
                <h1
                className="font-bold text-[50px]"
                >Prazer!<br/> Eu sou Nicolas Henrique</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus deleniti dignissimos sint sit quidem, blanditiis ipsum ab aperiam recusandae pariatur consequatur aspernatur alias commodi id dolore velit dolorem, enim aliquam? Earum officiis totam hic quidem repellendus qui excepturi beatae sapiente veniam expedita. Quaerat ratione quidem eaque autem beatae, aliquam laudantium?</p>
                
                <div
                className="flex gap-5 items-center"
                >
   <div
                className="bg-black rounded-sm p-5 flex justify-center text-white w-[165px]"
                >   
                    <p>Saiba mais</p>
                </div>
                <div
                className="shadow-black shadow-md flex gap-5 rounded-sm text-[28px] border w-fit justify-center p-5">
                    <FaGithub />
                    <FaSquareInstagram />
                    <FaLinkedin />
                </div>
                </div>
             
            </div>
            <div
            className="rounded-full w-fit p-10 border shadow-black shadow-md"
            >
                <div
                className="relative w-50 h-50 rounded-full  overflow-hidden"
                >
                <Image
                src="/nicolas.jpeg"
                fill
                alt="Foto"
                className="cover"
                />
                </div>
                <div
                className="flex items-center rounded-full bg-white px-3 py-2 shadow-black shadow-md gap-2 absolute top-50 right-30 "
                >
                    <FaComputer 
                    className="
                    text-[20px] 
                    text-green-500
                    "/>
                    <p>Desenvolvo Sistemas</p>
                </div>
                <div
                className="flex items-center rounded-full bg-white px-3 py-2 shadow-black shadow-md gap-2 absolute top-100 right-90 "
                >

                    <FaRobot 
                    className="
                    text-[20px] 
                    text-blue-500
                    "/>
                    <p>Estudando programação</p>
                </div>
            </div>
       </section>
    )
}