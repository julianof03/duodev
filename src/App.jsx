import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fortwood from './questions.jsx'
import './App.css'
import Questions from './questions.jsx'
import Lessons from './pages/lessonsPage.jsx'
import ConclusionPage from './pages/conclusionPage.jsx'
import QuestionariePage from './pages/questionariePage.jsx'

function App() {
  const [pageCount, setPageCount] = useState(0)
  const [scoreCount, setScoreCount] = useState(0)

  const Pages =[
    [
      <Lessons 
        setPageCount = {setPageCount}
        setScoreCount = {setScoreCount}
     ></Lessons>

    ],

    [
      <ConclusionPage 
        setPageCount = {setPageCount}
        scoreCount = {scoreCount}
     ></ConclusionPage>
      ],
    
    [<QuestionariePage setPageCount = {setPageCount}></QuestionariePage>],
  
]
  return (
    <>
      {Pages[pageCount]}
    </>
  )
}

export default App
