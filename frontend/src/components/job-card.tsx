"use client"
import { useAppData } from '@/context/AppContext'
import { Job } from '@/type'
import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Building2 } from 'lucide-react'

interface JobCardProps{
    job : Job
}


const JobCard : React.FC<JobCardProps> = ({job}) => {
    const {user , btnLoading} = useAppData()
  return <Card className="w-full max-w-[380px] hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 group">
    <CardHeader className='space-y-4 pb-4'>
        <div className="flex items-start justiify-between gap-3">
            <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                </h3>

<div className="flex items-center gap-2 text-sm opacity-70">
    <Building2 size={16}/>
    <span>{job.company_name}</span>
</div>

            </div>
        </div>
    </CardHeader>
  </Card>
    
  
}

export default JobCard