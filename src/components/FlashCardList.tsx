import { flashCardtype } from "../App"
import Flashcard from "./Flashcard"

type flashcardArray ={
    cards: flashCardtype[]
}

const FlashCardList = ({cards}:flashcardArray) => {
  return (
    <div className="card-grid">
         {cards.length > 0 ? (
        cards.map(flashcard => (
          <Flashcard key={flashcard.id} flashcard={flashcard} />
        ))
      ) : (
        <p>Nincs kérdés elérhető.</p>
      )}
    </div>
  )
}

export default FlashCardList