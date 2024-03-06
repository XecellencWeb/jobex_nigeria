import JobListings from '@/components/JobListings'
import Hero from '@/components/hero'
import React from 'react'

const JobsPage = () => {
  return (
    <>
      <Hero name='Jobs'/>
      <JobListings/>
    </>
  )
}

export default JobsPage
