import {Hero} from '../section/hero'
import {Projects} from '../section/projects'
import {Contact} from '../section/contact'
export const Main = () =>{
    return(
        <main
        className='mt-30 flex flex-col gap-20 px-32 py-5'
        >
            <Hero/>
            <Projects/>
            <Contact/>
        </main>
    )
}