export interface DiaryData {
  emotion: string;
  questionList: string[];
  //list: List[]; // 전체 다이어리 리스트를 관리하는 state 위치에 대해 고민이 필요하다.
  answerList: AnswerList;
}

interface List {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

interface AnswerList {
  [question: string]: string[];
}
