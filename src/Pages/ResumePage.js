import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const Resume = () => {
  return (
    <MainLayout>
    <InnerLayout>
    <Title title={'Resume'} span={'Resume'}></Title>
    </InnerLayout>
    </MainLayout>
  )
}

export default Resume