import { useState } from 'react'
import '../App.css'

function ConclusionPage({setPageCount, scoreCount}) {
  return (
    <>
      <p>Parabens voce terminou sua lição e pontuou: {scoreCount}</p>
      <button onClick={() => setPageCount(2)}>hello</button>
    </>
  )
}

export default ConclusionPage