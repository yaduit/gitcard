import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoading() {
  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc" borderRadius={10} duration={1.5}>
    
    <div className='"border border-gray-200 bg-white rounded-xl shadow-lg lg:w-7xl lg:h-[800px] mx-auto mt-3 '>

        <Skeleton count={17} height={18} width="100%" className='mt-3 mb-3'/>

    </div>
    </SkeletonTheme>
  )
}
