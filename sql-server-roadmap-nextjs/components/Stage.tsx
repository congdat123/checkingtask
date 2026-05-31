'use client'
export default function Stage({title,done,onToggle}:{title:string,done:boolean,onToggle:()=>void}){
return <div className='border rounded-xl p-4 mb-3 bg-white flex justify-between'>
<div>
<h2 className='font-bold'>{title}</h2>
<p className='text-sm text-gray-600'>Study goal and references</p>
</div>
<button onClick={onToggle} className='px-3 py-1 rounded bg-blue-600 text-white'>
{done?'Done':'Mark'}
</button>
</div>
}