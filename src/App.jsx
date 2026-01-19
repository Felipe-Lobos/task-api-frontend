import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button.jsx'
import { useTasks } from './hooks/useTasks.js'

function App() {
  const {tasks, isLoading}  = useTasks()
  console.log(!isLoading ? tasks.data : 'sin tasks')
  return (
    <>
    <main className='dark bg-background min-h-screen'>
      <Button>shadcn</Button>
       
    </main>
    </>
  )
}

export default App
