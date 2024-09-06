import React from 'react'
import Button from '../../Session1/Button'
import Company from '../../Session1/company'
import Header from '@/app/layouts/Header'
import Page from '../../Session1/page'
import Footer from '@/app/layouts/Footer'
import Icon from '../../Session1/icon'
import Image from '../../Session1/image'

export default function index() {
  return (
    
    <div style={{ padding: '10px', marginTop: '50px', color: '#000'} }>
    {/*BT3*/}
    <Page/>

    {/*BT4*/}
    <Company/>

    {/*BT5*/}
    <Button>Thêm</Button>
    <Button>Xóa</Button>
    <Button>Sửa</Button>

    {/*BT7*/}
    <Header/>

    {/*BT8*/}
    <Footer/>

     {/*BT10*/}
     <Icon/>

     
     {/*BT12*/}
     <Image/>
    </div>
    
  )
}

