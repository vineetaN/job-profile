"use client"
import { useAppData } from '@/context/AppContext'
import React from 'react'
import Company from "./components/company"
import Skills from "./components/skills"
import Loading from "@/components/loading"
import Info from './components/info'
import Skill from './components/skills'

const AccountPage = () => {
const {isAuth , user , loading}
 = useAppData();

 if(loading) return <Loading/>

  return <>
  {user &&   <div className='w-[90%] md:w-[60%] m-auto'> 
    <Info user={user} isYourAccount={true}/>

   {
    user.role==="jobseeker" && 
    (
    <Skills user = {user} isYourAccount={true}/>

    )
   }


   {
    user.role==="recruiter" && 
    (
    <Company/>
    )
   }
  </div>
  }
  </>
  
  
}

export default AccountPage