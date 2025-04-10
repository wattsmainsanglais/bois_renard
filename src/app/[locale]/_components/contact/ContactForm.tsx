'use client'
import { useRef, useState } from "react"

import { submitContactForm } from "../../_lib/submitContactForm"
import { SubmitButton } from "../buttons/SubmitButton"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneCallIcon } from "lucide-react"


export default function ContactForm({t}: {t: {[key: string]: string}}  ) {



    const ref = useRef<HTMLFormElement>(null)

    const [error, setError] = useState<string | undefined>('')
    const [message, setMessage] = useState<string | undefined>('')

    async function submit(data: FormData){
        
        setError('')
        setMessage('')

       const {message, error} = await submitContactForm(data)
       if(error){
        setError(error)
       } else {
        setMessage(message)
       }

       ref.current?.reset()


    }


    return  (
        <div id="Contact" className=" w-3/4 md:w-3/5 lg:w-1/2 ">
        <Card className="flex flex-col items-center backdrop-blur-xl gap-5">
            <CardHeader>
            <CardTitle className="text-xl color-forestgreen">{t.title}</CardTitle>
           
            </CardHeader>
            
            <CardContent className="flex justify-center w-3/4 lg:w-3/5 p-2 ">
                <form action={submit} ref={ref} className="flex flex-col justify-center items-center w-full gap-3">  
                    
                    <div className="flex flex-col items-center space-y-3 w-full mb-2">
                        <Input className="" name='name' placeholder={t.name} required></Input>
                        <Input name='email' placeholder={t.email} required></Input> 
                        <Input name='tel' placeholder={t.tel} required></Input>
                        <Textarea name='message' rows={5} placeholder={t.message} required></Textarea>
  
                    </div>
                   
                  


                    <SubmitButton>Send</SubmitButton>
                </form>

            </CardContent>
            
            <CardFooter>
                <div className="flex flex-col lg:flex-row w-1/1 gap-4">
                    <div className="flex gap-2">
                        <PhoneCallIcon />
                        <p>+33 6 1238 4838</p>
                    </div>
                    <div className="flex gap-2">
                        <MailIcon />
                        <p>welcome@giteduboisrenard.fr</p>
                    </div>
                </div>
                {error? <p className="text-red">{error}</p>:null}
                {message? <p>{message}</p>:null}
            </CardFooter>
        </Card>
        </div>  
              
            

           


        

    )
}