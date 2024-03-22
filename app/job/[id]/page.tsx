
import JobDetail from '@/components/JobDetails'
import Hero from '@/components/hero'
import React from 'react'

// export async function getServerSideProps({params}:any){
//     const {id} = params;
//     // console.log(id)
//     // const job =JSON.stringify(Jobs.find(j=>j.id=== id) || null)
//     return {
//         props: {id}
//     }
// }

const Job = ({params}:any) => {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
  return (
    <>
    <Hero name='Job Detail'/>
    <JobDetail jobId = {params}/>
    </>
  )
}

export default Job
