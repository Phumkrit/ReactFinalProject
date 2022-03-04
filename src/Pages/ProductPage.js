import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout, Right, BottomLayout } from '../styles/Layout'
import avatar from '../Img/Portrait2.jpg';

const ProductPage = () => {
  return (
    <>
    <MainLayout>
    <InnerLayout>
    <Title title={'Product'} span={'Product'}></Title>
    </InnerLayout>
    </MainLayout>
    </>
  )
}

export default ProductPage