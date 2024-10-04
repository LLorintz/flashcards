import { useEffect, useState } from "react"
import FlashCardList from "./components/FlashCardList"
import { getQuestions } from "./api/Api"
import './app.css'

//https://opentdb.com/api.php?amount=10&category=18

export type flashCardtype = {
  id:number,
  question:string,
  correct_answer:string,
}

const mock:flashCardtype[]=[
  {id:1, question:"asd?", correct_answer:'fgh'},
  {id:2, question:"asdasd?", correct_answer:'fghfgh'},
]
function App() {

  useEffect(() => {
    const fetchquestions = async()=> {
      const questions = await getQuestions();
      console.log(questions)
      setFlashcards(questions);
    }
    fetchquestions();
  },[])
  const [flashcards, setFlashcards] = useState<flashCardtype[]>(mock)
  return (
    <div className="container">
   <FlashCardList cards = {flashcards}></FlashCardList>
    </div>
  )
}

export default App
