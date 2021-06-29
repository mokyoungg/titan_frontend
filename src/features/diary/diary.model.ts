export interface DiaryData {
  emotion: string;
  questionList: string[];
  //list: List[]; // 전체 다이어리 리스트를 관리하는 state 위치에 대해 고민이 필요하다.
  answerList: AnswerList;
  edit: boolean;
}

interface List {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

// const data1: DiaryData = {
//   emotion: 'good',
//   list: null,
//   answerList: {'dkd':['asfsdf']},
//   questionList: [1,2,3]
// }

interface AnswerList {
  [question: string]: string[];
}
