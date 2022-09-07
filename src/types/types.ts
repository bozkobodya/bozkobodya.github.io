type TAnswer = {
    id: string;
    text: string;
};

type TQuestion = {
    answers: TAnswer[];
    userAnswer: string;
    id: string;
    text: string;
};

type TStatItem = {
    answer_id: string;
    question_id: string;
    true_answer_id: string;
};

export type TStatisticsInfo = {
    questions: TQuestion[];
    stat: TStatItem[]
};