import React from 'react'

const App = () => {

const {width, height} = CustomHook()

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen gap-4'>
    <h1 className='font-bold text-3xl'>"Use Window resize Hook"</h1>
    <p className='text-2xl'>Width is : <span className='text-blue-800 font-bold'>{width}</span></p>
    <p className='text-2xl'>height is : <span className='text-blue-800 font-bold'>{height}</span></p>
    </div>
  )
}

export default App