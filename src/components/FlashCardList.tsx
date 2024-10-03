import { flashCardtype } from "../App"
import Flashcard from "./Flashcard"

type flashcardArray ={
    cards: flashCardtype[]
}

const FlashCardList = ({cards}:flashcardArray) => {
  return (
    <div className="card-grid">
        {cards.map(flashcard => (
            <Flashcard key={flashcard.id} flashcard={flashcard}></Flashcard>
        )
            
        )}
    </div>
  )
}

export default FlashCardList