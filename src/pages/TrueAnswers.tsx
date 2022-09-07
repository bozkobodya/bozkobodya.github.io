import { useMemo, useState } from 'react';
import { TStatisticsInfo } from '../types/types';
;
export const TrueAnswers = () => {
    const [textAreaValue, setTextAreaValue] = useState('');

    const result = useMemo(() => {
        try {
            const input = JSON.parse(textAreaValue) as TStatisticsInfo;

            const trueAnswers = input?.stat?.map((statItem) => ({
                question: statItem.question_id,
                answer: statItem.true_answer_id
            })) ?? [];

            const resultData = input?.questions?.map((question) => {
                const trueAnswer = trueAnswers.find(
                    (answer) => question.id == answer.question) ?? { answer: '', question: '' };

                return {
                    question: question?.text,
                    answer: question?.answers?.find((answer) => answer.id == trueAnswer.answer)?.text
                }
            })

            return resultData;
        } catch(e) {
            console.log(e);
            return []
        }
    }, [textAreaValue]);

    return (
        <div>
            <textarea
                className="mx-auto border h-96 my-10 block w-4/5 p-2"
                value={textAreaValue}
                onChange={event => setTextAreaValue(event.target.value)}
                placeholder="Вставити"
            />

            {!!result.length && 
                <div className="w-4/5 mx-auto">
                    {result.map((item, index) => (
                        <div className="mb-3" key={item.question + index}>
                            <span className="bg-yellow-100">{item.question}</span>
                            &#160;
                            <span>{item.answer}</span>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}