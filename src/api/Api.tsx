import { flashCardtype } from "../App";

export const getQuestions = async ():Promise<flashCardtype[]>=>{
    try{
    const response = await fetch('https://opentdb.com/api.php?amount=10')
    if (response.status === 429) {
      console.error('Túl sok kérés. Próbálkozz később.');
      return[];
    }
    const data = await response.json()
    if (data.response_code === 5) {
      console.error('Nincs eredmény az API hívásra.');
      return[]
    }
      const formattedResults= data.results.map((item:flashCardtype, index:number) => (
        {
          id:index+1,
          question: decodeString(item.question),
          correct_answer:decodeString(item.correct_answer)
        }
      ))
   //   console.log(data.results)
      return formattedResults
    
    }catch(error){
      console.error('error: ', error)
      return[];
    }
  }

  const decodeString=(str:string)=>{
    const textarea = document.createElement('textarea') as HTMLTextAreaElement;
    textarea.innerHTML=str;
    return textarea.value;
  }

const Api = () => {
  return (
    <></>
  )
}

export default Api