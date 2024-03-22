"use server"

import JobbexWelcomeEmail from '@/components/email-templates/Welcome'
import {Resend} from 'resend'
const resend = new Resend(process.env.resend_api_key)


export async function testResend({emails,firstName,userId}:{
    emails:string[],
    firstName:string,
    userId:string | number
}){
  await resend.emails.send({
    from:'Jobbex Nigeria <onboarding@resend.dev>',
    to: ['jobbexnigeria@gmail.com'],
    subject: 'Testing',
    react: JobbexWelcomeEmail({
        firstName,
        userId
    })
   })
}