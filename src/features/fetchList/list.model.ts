export interface ListInterface {
  id: number;
  date: string;
  emotion: string;
  dayInfo: DayInfo;
  answerList: any;
}

interface DayInfo {
  today: number;
  month: string;
  day: string;
}
