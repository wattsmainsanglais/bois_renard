import { TranslationStrings } from "../../_lib/types";



export default function GiteDescription({t, title}: {t: TranslationStrings, title: string}){


    return (
        <div className="flex flex-col justify-center items-center p-5 ">
            <h2 className="pb-2 font-bold text-xl">{title}</h2>
            <p className="font-italic">({t.sleep})</p>
            <p className="text-lg pt-2">{t.desc}</p>
            <div className="flex flex-col items-center justify-center pt-2 pb-4 gap-2">
                <h3 className="font-bold text-lg">{t.tarif}</h3>

                <h4 className="font-bold">{t.season}</h4>
                <p className="pb-2">{t.sprice}</p>
                <h4 className="font-bold">{t.off}</h4>
                <p>{t.oprice}</p>
            </div>
            <p>{t.add}</p>
            
        </div>
    )
}

