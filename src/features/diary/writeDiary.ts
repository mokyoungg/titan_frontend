import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleAnswer } from './diarySlice';
import { ListInterface } from '../fetchList/list.model';

const DIARY_LS = 'diary_list';

const writeDiary = (props: any) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((state) => state.date.selectDate);
  const emotion = useAppSelector((state) => state.diary.emotion);
  const dayInfo = useAppSelector((state) => state.date.dayInfo);
  const answerList = useAppSelector((state) => state.diary.answerList);

  const [value, setValue] = useState<string>('1. ');
  const [loadedList, setLoadedList] = useState<ListInterface[]>([]);

  useEffect(() => {
    const fetchList = localStorage.getItem(DIARY_LS);

    if (fetchList) {
      const parsedList = JSON.parse(fetchList);
      setLoadedList(parsedList);
    }
  }, []);

  //keyPress의 경우, enter키 입력시 해당 숫자를 표시하고 그 다음 줄에 커서가 존재한다.
  //이를 해결하기 위해 keyPress대신 keyUp으로 해당 함수를 변경하면 이를 해결할수있다.
  //(번호 다음줄이 아닌 번호 바로 다음 글자로 입력가능)
  //splice('\n')을 통해 엔터를 기준으로 배열을 만드는데
  //이는 현재 엔터키를 몇번쳤는가 알기 위함이고 백스페이스로 이를 삭제했을때
  //알기 쉽게하기 위함이다.
  //textarea element
  const applyEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const lines = value.split(`\n`);
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, i + 1 + '. ');
      }
      setValue(lines.join(`\n`));
    }
  };

  //textarea element
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const question = props.question;
    dispatch(handleAnswer({ question: question, value: e.target.value }));
  };

  const postDiary = () => {
    const postData: ListInterface = {
      id: loadedList.length + 1,
      date: currentDate,
      emotion: emotion,
      dayInfo: dayInfo,
      answerList: answerList
    };

    const newList = [...loadedList, postData];

    localStorage.setItem(DIARY_LS, JSON.stringify(newList));
    props.history.push('/main');
  };

  return { value, applyEnter, handleChange, postDiary };
};

export default writeDiary;
