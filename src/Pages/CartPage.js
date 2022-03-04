import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout, Right, BottomLayout } from '../styles/Layout'
import avatar from '../Img/Portrait2.jpg';

const CartPage = () => {
  return (
    <>
    <MainLayout>
    <InnerLayout>
    <Title title={'Cart'} span={'Cart'}></Title>
    </InnerLayout>
    </MainLayout>
    </>
  )
}

export default CartPage