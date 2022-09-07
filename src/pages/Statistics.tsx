import { useMemo, useState } from 'react';
import classNames from 'classnames';
import type { TStatisticsInfo } from '../types/types';

const getBgClassName = (answerId: string, studentAnsweid: string, trueAnswerId: string) => {
    switch(true) {
        case(trueAnswerId === answerId && answerId === studentAnsweid): return 'bg-green-400';
        case(trueAnswerId !== studentAnsweid && answerId === studentAnsweid): return 'bg-red-500';
        case(trueAnswerId === answerId && answerId !== studentAnsweid): return 'bg-yellow-100';
        default: return 'bg-blue-100';
    }
};

export const Statistics = () => {
    const [textAreaValue, setTextAreaValue] = useState('');

    const result = useMemo(() => {
        try {
            const input = JSON.parse(textAreaValue) as TStatisticsInfo;

            const trueAnswers = input?.stat?.map((statItem) => ({
                question: statItem.question_id,
                answer: statItem.true_answer_id,
                userAnswer: statItem.answer_id
            })) ?? [];

            const resultData = input?.questions?.map((question) => {
                const trueAnswer = trueAnswers.find(
                    (answer) => question.id == answer.question) ?? { answer: '', question: '', userAnswer: '' };

                return {
                    question: question?.text,
                    answers: question.answers.map((answer) => ({
                        text: answer.text,
                        className: getBgClassName(answer.id, trueAnswer.userAnswer, trueAnswer.answer),
                        id: answer.id
                    }))
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
                <div className="mx-auto w-4/5">
                    {result.map((item, index) => (
                        <div className="mb-5 border rounded-2xl p-4" key={item.question + index}>
                            <div className="font-bold mb-3">{`${index + 1}. ${item.question}`}</div>
                            {item.answers.map((answer) => (
                                <div 
                                    className={classNames("font-semibold mb-2 p-2 rounded-md", answer.className)}
                                    key={answer.id}
                                >
                                    {answer.text}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}