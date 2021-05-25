import React from 'react';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <div className="main_wrap">
      <div className="main_header">
        <div className="time_line">Time line</div>
      </div>
      <hr className="header_line"></hr>
      <hr className="header_line"></hr>
      <div className="phrase_section">
        <div className="phrase">
          To live is to suffer, to survive is to find some meaing in the
          suffering.
        </div>
      </div>
      <div className="date_section">
        <div className="today">25</div>
        <div className="other_date">26 27</div>
      </div>
      <div className="greeting_section">
        <div className="greeting">Hello, Guest</div>
        <button className="start_btn">Write Something</button>
      </div>
    </div>
  );
};

export default Main;
