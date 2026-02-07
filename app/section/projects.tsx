

export const Projects = () =>{
    return(
       <section 
       className="flex flex-col gap-10"
       >
        <div
        className="flex gap-3"
        >
            <div
             className="flex gap-3 font-bold"
            >
                <p>Todos</p>
                <p>14</p>
            </div>
            <p>/</p>
            <div
             className="flex gap-3"
            >
                <p>Front-End</p>
                <p>14</p>
            </div>
            <p>/</p>
            <div
              className="flex gap-3"
            >
                <p>Full-Stack</p>
                <p>14</p>
            </div>
            <p>/</p>
            <div
             className="flex gap-3"
            >
                <p>Design</p>
                <p>14</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
            {/* Bloco 1: Grow alto para dominar o espaço */}
            <div className="flex-[2] grow bg-blue-500 min-h-[400px] rounded-lg">
                Bloco Grande
            </div>

            {/* Coluna dos 4 blocos: flex-1 e flex-wrap para quebrarem */}
            <div className="flex-1 flex flex-wrap gap-5">
                <div className="grow basis-[45%] bg-slate-200 rounded">1</div>
                <div className="grow basis-[45%] bg-slate-200 rounded">2</div>
                <div className="grow basis-[45%] bg-slate-200 rounded">3</div>
                <div className="grow basis-[45%] bg-slate-200 rounded">4</div>
            </div>
        </div>
       </section>
    )
}