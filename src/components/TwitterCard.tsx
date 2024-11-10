const TwitterCard = () =>
    <article className="flex cursor-pointer bg-[#222] justify-center content-center items-center p-4 hover:bg-gray-800">
        <header className="flex">
            <img className="rounded-full w-12 h-12" src="https://unavatar.io/keuznub" alt="El avatar de keuznub" />
            <div className="flex flex-col mx-3">
                <strong className="text-gray-50">Breixo Pastoriza Carballo</strong>
                <span className="text-gray-500">@keuznub</span>
            </div>
        </header>  

        <aside>
            <button className="px-3 py-1 font-sans bg-white rounded-full shadow text-black">Seguir</button>
        </aside>
        
    </article>


export default TwitterCard