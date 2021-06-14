import React, { useState, useEffect } from 'react';
import './Question.scss';
import { RouteComponentProps, withRouter } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

type QuestionComponentProps = RouteComponentProps;

const DIARY_LS = 'diary_list';

interface DayInfo {
  today: number;
  month: string;
  day: string;
}

interface Diary {
  id: number;
  date: string;
  emotion: string;
  content: string[];
  dayInfo: DayInfo;
}

const Question: React.FC<QuestionComponentProps> = ({ history }) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(
    (state) => state.handleCalendar.selectDate
  );
  const emotion = useAppSelector((state) => state.diary.emotion);
  const dayInfo = useAppSelector((state) => state.handleCalendar.dayInfo);

  const [value, setValue] = useState<string>('1. ');
  const [loadedDiary, setLoadedDiary] = useState<Diary[]>([]);

  useEffect(() => {
    const loadedList = localStorage.getItem(DIARY_LS);

    if (loadedList) {
      const parsedList = JSON.parse(loadedList);
      console.log(parsedList);
      setLoadedDiary(parsedList);
    } else {
      console.log('없음');
    }
  }, []);

  //keyPress의 경우, enter키 입력시 해당 숫자를 표시하고 그 다음 줄에 커서가 존재한다.
  //이를 해결하기 위해 keyPress대신 keyUp으로 해당 함수를 변경하면 이를 해결할수있다.
  //(번호 다음줄이 아닌 번호 바로 다음 글자로 입력가능)
  //splice('\n')을 통해 엔터를 기준으로 배열을 만드는데
  //이는 현재 엔터키를 몇번쳤는가 알기 위함이고 백스페이스로 이를 삭제했을때
  //알기 쉽게하기 위함이다.
  const getEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const lines = value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, i + 1 + '. ');
      }
      setValue(lines.join('\n'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const postDiary = () => {
    const postData: Diary = {
      id: loadedDiary.length + 1,
      date: currentDate,
      emotion: emotion,
      content: value.split('\n'),
      dayInfo: dayInfo
    };

    const newList = [...loadedDiary, postData];

    localStorage.setItem(DIARY_LS, JSON.stringify(newList));
    history.push('/main');
  };

  return (
    <div className="question_wrap">
      <div className="question_header_section">
        <p>
          Get specific, Guest! Use detail to describe what you're feeling
          greateful for.
        </p>
      </div>
      <div className="question_answer_section">
        <div className="answer_header">3 Things i am grateful for.</div>
        <textarea
          className="answer"
          value={value}
          onChange={handleChange}
          onKeyUp={getEnter}
        ></textarea>
      </div>
      <button className="post_btn" onClick={() => postDiary()}>
        Done
      </button>
    </div>
  );
};

export default withRouter(Question);
