

import {useTranslations} from 'next-intl';


export default function About(){

    const t = useTranslations("About")

    return (

        <div id="About" className="mt-10 mb-10 w-[100vw] p-10 bg-forestgreen opacity-85 flex flex-col items-center space-y-4 text-white">

            <h1>{t("Title")}</h1>

            <p className="text-center">{t("P1")}</p>
            <p className="text-center">{t("P2")}</p>
        </div>


    )

}