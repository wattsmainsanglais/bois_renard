import { Messages } from "@/global";
import { TranslationStrings } from "../BookingWrapper";


export default function GiteDescription({desc, title}: {desc: string, title: string}){


    return (
        <div className="flex flex-col justify-center items-center p-4">
            <h2 className="pb-2">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

