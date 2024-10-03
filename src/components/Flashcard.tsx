import { useState } from "react"
import { flashCardtype } from "../App"

type flashcardObject={
    flashcard:flashCardtype
}

const Flashcard = ({flashcard}:flashcardObject) => {
  const[flip,setFlip] = useState<boolean>(false)
  return (
    <div 
    className={`card ${flip? 'flip' : ''}`} 
    onClick={()=>setFlip(!flip)}>
        <div className="front">
            {flashcard.question}
        </div>
        <div className="back">{flashcard.answer}</div>
    </div>
  )
}

export default Flashcard