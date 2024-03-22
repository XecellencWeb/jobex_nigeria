
import JobDetail from '@/components/JobDetails'
import Hero from '@/components/hero'
import React from 'react'
import { useRouter } from 'next/router';

export async function getServerSideProps({params}:any){
    const {id} = params;
    // console.log(id)
    // const job =JSON.stringify(Jobs.find(j=>j.id=== id) || null)
    return {
        props: {id}
    }
}

const Job = ({id}:any) => {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
  return (
    <>
    <Hero name='Job Detail'/>
    <JobDetail jobId = {id}/>
    </>
  )
}

export default Job
