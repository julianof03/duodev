import { useState } from 'react'
import '../App.css'

function Lessons({ setPageCount , setScoreCount}) {
    const [count, setCount] = useState(0)
    const [QuestionCount, setQuestionCount] = useState(0)
    const [Answer, setAnswer] = useState(0);
    const [StreakCount, setStreakCount] = useState(0)
    const Headers = ([
        "quanto é 1 + 1?",

        "quanto é 10 + 2?",
        "quanto é 10 * 10?",

    ])
    const options = [
        {
            colum: ["2", "5", "12", "1", "0"]
        },
        {
            colum: ["14", "200", "12", "10", "40"]
        },
        {
            colum: ["100", "50", "1000", "10", "0"]
        },
    ];
    const QuestionTemplate = [
        0,
        2,
        0,
    ]

    function ConfirmAnswer(ChosedQuestion, Answer) {

        if (QuestionCount == Headers.length - 1) {
            setQuestionCount(QuestionCount + 1);
            EndQuestionarie()
            if (QuestionTemplate[ChosedQuestion] == Answer) {
                setScoreCount(StreakCount + 1)
            }
            else{
                setScoreCount(StreakCount)
            }
            
            return;
        }
        if (QuestionTemplate[ChosedQuestion] == Answer) {
            console.log("vc acertou")
            setStreakCount(StreakCount + 1);
            setQuestionCount(QuestionCount + 1);
        }
        else {
            console.log("vc erroooooooooooou")
            setQuestionCount(QuestionCount + 1);
        }

    }
    function EndQuestionarie() {
        setPageCount(1)
    }


    console.log(options[QuestionCount])
    return (
        <>
            <div className='Main'>
                <div className='TopBar'></div>
                <div className='QuestionHolder'>
                    <div className='QuestionHeader'>{Headers[QuestionCount]}</div>
                    <div className='QuestionOptions'>
                        <ul>
                            {options[QuestionCount].colum.map((opt, i) => (
                                <button onClick={() => setAnswer(i)} key={i}>{opt}</button>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => ConfirmAnswer(QuestionCount, Answer)}>hello</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lessons
