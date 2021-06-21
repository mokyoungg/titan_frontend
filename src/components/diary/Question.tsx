import React, { useState, useEffect } from 'react';
import './Question.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IconContext } from 'react-icons';
import { BiCheck } from 'react-icons/bi';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { handleAnswer } from '../../features/diary/diarySlice';
import { ListInterface } from '../../features/fetchList/list.model';

interface QuestionComponentProps extends RouteComponentProps<any> {
  question: any;
  index: number;
} //= RouteComponentProps;

const DIARY_LS = 'diary_list';

//history와 부모 컴포넌트에서 내려오는 props를 같이 사용하려면
//(props, {history}) 가 아닌 props로 전부를 받아와 사용해야한다.
//(props, {history}) 형태의 경우, 두번째 인자의 값을 undefined로 받음.
const Question: React.FC<QuestionComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(
    (state) => state.handleCalendar.selectDate
  );
  const emotion = useAppSelector((state) => state.diary.emotion);
  const dayInfo = useAppSelector((state) => state.handleCalendar.dayInfo);
  const answer = useAppSelector((state) => state.diary.answerList);

  const [value, setValue] = useState<string>('1. ');
  const [loadedDiary, setLoadedDiary] = useState<ListInterface[]>([]);

  useEffect(() => {
    const loadedList = localStorage.getItem(DIARY_LS);

    if (loadedList) {
      const parsedList = JSON.parse(loadedList);
      setLoadedDiary(parsedList);
    } else {
      //console.log('없음');
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
    const question = props.question;
    dispatch(handleAnswer({ question: question, value: e.target.value }));
  };

  const postDiary = () => {
    const postData: ListInterface = {
      id: loadedDiary.length + 1,
      date: currentDate,
      emotion: emotion,
      dayInfo: dayInfo,
      answerList: answer
    };

    const newList = [...loadedDiary, postData];

    localStorage.setItem(DIARY_LS, JSON.stringify(newList));
    props.history.push('/main');
  };

  return (
    <div className="question_wrap">
      {/* <div className="progress_bar">
        <div className="current_progress2"></div>
      </div> */}
      <div className="question_header_section">
        <p>
          {/* Get specific, Guest! Use detail to describe what you're feeling
          greateful for. */}
          {props.question}
        </p>
      </div>
      <div className="question_answer_section">
        {/* <div className="answer_header">3 Things i am grateful for.</div> */}
        <textarea
          className="answer"
          value={value}
          onChange={handleChange}
          onKeyUp={getEnter}
        ></textarea>
      </div>
      {props.index === 2 && (
        <div className="complete_btn" onClick={() => postDiary()}>
          <IconContext.Provider value={{ color: '#000' }}>
            <BiCheck />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default withRouter(Question);
