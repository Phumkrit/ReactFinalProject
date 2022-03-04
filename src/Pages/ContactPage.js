import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout, Right, BottomLayout } from '../styles/Layout'
import avatar from '../Img/Portrait2.jpg';

const ContactPage = () => {
  return (
    <>
    <MainLayout>
    <InnerLayout>
    <Title title={'Contact'} span={'Contact'}></Title>
    </InnerLayout>
    </MainLayout>
    </>
  )
}

export default ContactPage