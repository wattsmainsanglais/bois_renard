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
        <div className=" w-1/2 ">
        <Card className="flex flex-col items-center backdrop-blur-xl ">
            <CardHeader>
            <CardTitle>{t.title}</CardTitle>
           
            </CardHeader>
            
            <CardContent className="flex justify-center w-3/5">
                <form action={submit} ref={ref} className="flex flex-col justify-center items-center w-full">  
                    
                    <div className="flex flex-col items-center space-y-3 w-full">
                        <Input name='name' placeholder={t.name}></Input>
                        <Input name='email' placeholder={t.email}></Input> 
                        <Input name='tel' placeholder={t.tel}></Input>
                        <Textarea name='message' rows={5} placeholder={t.message}></Textarea>
  
                    </div>
                   
                  


                    <SubmitButton>Send</SubmitButton>
                </form>

            </CardContent>
            
            <CardFooter>
                {error? <p>{error}</p>:null}
                {message? <p>{message}</p>:null}
            </CardFooter>
        </Card>
        </div>  
              
            

           


        

    )
}