import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleTotalList } from '../fetchList/fetchListSlice';
import { handleModal } from '../modal/modalSlice';

const DIARY_LS = 'diary_list';

const editDiary = (props: any) => {
  const dispatch = useAppDispatch();

  const [answerArr, setAnswerArr] = useState<any>();
  const [answerStr, setAnswerStr] = useState<any>();
  const [edit, setEdit] = useState<boolean>(false);
  const [loadedList, setLoadedList] = useState<any>();

  const { record } = props.location.state;

  useEffect(() => {
    const stringAnswerList = arrToString(record.answerList);
    setAnswerArr(record.answerList);
    setAnswerStr(stringAnswerList);

    const fetchedList = localStorage.getItem(DIARY_LS);

    if (fetchedList) {
      const parsedList = JSON.parse(fetchedList);
      setLoadedList(parsedList);
    }
  }, []);

  const arrToString = (obj: any) => {
    let result: any = {};
    for (let key in obj) {
      result[key] = obj[key].toString().replaceAll(',', `\n`);
    }
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newAnswerStr = { ...answerStr, [name]: value };
    const newAnswerArr = { ...answerArr, [name]: value.split(`\n`) };
    setAnswerStr(newAnswerStr);
    setAnswerArr(newAnswerArr);
  };

  const handleEdit = () => {
    const newRecord = { ...record, answerList: answerArr };

    const newList = loadedList.map((el: any) => {
      if (el.id === newRecord.id) {
        return newRecord;
      } else {
        return el;
      }
    });

    localStorage.setItem(DIARY_LS, JSON.stringify(newList));
    dispatch(handleTotalList(newList));
    setEdit(!edit);
  };

  const handleDelete = () => {
    const newList = loadedList.filter((el: any) => el['id'] !== record['id']);
    localStorage.setItem(DIARY_LS, JSON.stringify(newList));
    dispatch(handleTotalList(newList));
    alert('삭제되었습니다.');
    props.history.push('/main');
  };

  const handlePage = () => {
    props.history.push('/main');
  };

  return {
    answerArr,
    answerStr,
    edit,
    handleChange,
    handleEdit,
    handleDelete,
    handlePage
  };
};

export default editDiary;
