import { useState } from 'react'
import '../App.css'

function QuestionariePage({setPageCount}) {
  return (
    <>
      <p>Opa, estas são todas as lições</p>
      <button onClick={() => setPageCount(2)}>hello</button>
    </>
  )
}

export default QuestionariePage