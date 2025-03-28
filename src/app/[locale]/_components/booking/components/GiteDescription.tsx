


export default function GiteDescription({desc, title}: {desc: string, title: string}){


    return (
        <div className="flex flex-col justify-center items-center p-5 ">
            <h2 className="pb-2 font-bold text-xl">{title}</h2>
            <p className="text-lg">{desc}</p>
        </div>
    )
}

