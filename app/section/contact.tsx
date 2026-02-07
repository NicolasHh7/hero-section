export const Contact = () =>{
    return(
     <section className="bg-gray-500 px-8 py-5 flex flex-col gap-5 h-[400px] rounded-md">

        <h1
        className="text-white text-[40px]"
        >Contato</h1>
        <div
        className="grid grid-cols-2 gap-4 w-full flex-1"
        >
            {/* Coluna 1 */}
                <div className="w-full flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="" className="text-white">Email:</label>
                        <input 
                            type="email" 
                            placeholder="Digite seu email..." 
                            className="bg-white w-full p-2 outline-none border-2 border-transparent focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all resize-none" // Adicionado w-full
                        />
                    </div>
                    <div className=" bg-white rounded-sm p-5 flex justify-center text-black w-[165px] cursor-pointer">
                        <p className="text-black">Enviar</p>
                    </div>
                </div>
                
                {/* Coluna 2 */}
                <div className="w-full h-full flex flex-col gap-5">
                    <label htmlFor="" className="text-white">Comentário:</label>
                    <textarea 
                        className="bg-white w-full h-full min-h-[100px] p-2 outline-none border-2 border-transparent focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all resize-none" // Adicionado w-full
                    ></textarea>
                </div>
        </div>
  
</section>
    )
}