import { useState } from 'react'
import { Button } from './components/ui/button'
import { CarouselDemo } from './components/demo/CarouselDemo';
import './App.css'

function App() {
  const [ count, setCount] = useState(0);
  return (
    <>
      <div className='px-auto mx-auto'>
        <CarouselDemo/>
      </div>
      <Button>{count} hellow shadcn</Button>
    </>
  )
}

export default App
