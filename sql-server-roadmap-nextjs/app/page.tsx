'use client'
import {useEffect,useState} from 'react'
import {roadmap} from '../data/roadmap'
import Stage from '../components/Stage'

export default function Page(){
const [done,setDone]=useState<number[]>([])
useEffect(()=>{
const saved=localStorage.getItem('progress')
if(saved)setDone(JSON.parse(saved))
},[])
function toggle(i:number){
const next=done.includes(i)?done.filter(x=>x!==i):[...done,i]
setDone(next)
localStorage.setItem('progress',JSON.stringify(next))
}
const percent=Math.round(done.length/roadmap.length*100)

return <main className='max-w-4xl mx-auto p-8'>
<h1 className='text-4xl font-bold mb-2'>SQL Server Roadmap</h1>
<p className='mb-6'>Progress: {percent}%</p>
<div className='w-full bg-gray-200 h-3 rounded mb-8'>
<div className='bg-green-500 h-3 rounded' style={{width:`${percent}%`}}/>
</div>
{roadmap.map((x,i)=>
<Stage key={x}
title={`Giai đoạn ${i+1}: ${x}`}
done={done.includes(i)}
onToggle={()=>toggle(i)}
/>
)}
</main>
}