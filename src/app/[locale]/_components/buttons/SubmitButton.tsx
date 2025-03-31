'use client'

import { Loader } from 'lucide-react'
import { Button, ButtonProps } from '@/components/ui/button'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

import { VariantProps } from 'class-variance-authority'





export const SubmitButton = ({ children }: { children: ReactNode }) => {

    const { pending } = useFormStatus()
    return (
      
      <Button className='text-white bg-forestgreen' type="submit" disabled={pending}>
        {pending ? <Loader className="animate-spin" /> : children}
      </Button>
     
    )
  }