"use client"
import React from 'react'
import Loading from "@/components/loading"
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero'
import CarrerGuide from '@/components/carrer-guide'
import ResumeAnalyzer from '@/components/resume-analyser'
import { useAppData } from '@/context/AppContext'

const Home = () => {

  const {loading} = useAppData();
  if(loading) return <Loading />
  return (
    <div>
<Hero></Hero>
<CarrerGuide/>
<ResumeAnalyzer/>
    </div>
  )
}

export default Home