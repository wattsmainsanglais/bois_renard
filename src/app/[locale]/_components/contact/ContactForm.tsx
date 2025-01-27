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


export default function ContactForm({trans}: {trans: {[key: string]: string}}  ) {



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
        <div className=" w-1/2">
        <Card className="flex flex-col items-center ">
            <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            </CardHeader>
            
            <CardContent>
                <form action={submit} ref={ref}>  
                    
                    <div className="flex flex-col items-center">
                        <Input name='name' placeholder="name"></Input>
                        <Input name='email' placeholder="email"></Input> 
                        <Input name='message' placeholder="message"></Input>
                        <Input name='tel' placeholder="tel"></Input>
  
                    </div>
                   
                    {error? <p>{error}</p>:null}
                    {message? <p>{message}</p>:null}


                    <SubmitButton>Send</SubmitButton>
                </form>

            </CardContent>
            
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>  
              
            

           


        

    )
}