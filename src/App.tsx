import { useEffect, useState } from "react"
import FlashCardList from "./components/FlashCardList"
import './app.css'

//https://opentdb.com/api.php?amount=10&category=18

export type flashCardtype = {
  id:number,
  question:string,
  answer:string,
}

const getQuestions = async ()=>{
  try{
  const response = await fetch('https://opentdb.com/api.php?amount=10')
  if (response.status === 429) {
    console.error('Túl sok kérés. Próbálkozz később.');
    return;
  }
  const data = await response.json()
  if (data.response_code === 5) {
    console.error('Nincs eredmény az API hívásra.');
  }else{
  console.log(data)
  }
  }catch(error){
    console.error('error: ', error)
  }
}



const mock:flashCardtype[]=[
  {id:1, question:"asd?", answer:'fgh'},
  {id:2, question:"asdasd?", answer:'fghfgh'},
]
function App() {
  useEffect(() => {
    getQuestions();
  },[])
  const [flashcards, setFlashcards] = useState<flashCardtype[]>(mock)
  return (
    <>
   <FlashCardList cards = {flashcards}></FlashCardList>
    </>
  )
}

export default App
