/*eslint-disable*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const data = '4pace9ray';

  let [글제목, 글제목변경] = useState(['구리 카페', '구리 배달 맛집', '주변 병원']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [입력값, 입력값변경] = useState('');

  let [누른제목, 누른제목변경] = useState(0);
  let [모달, 모달변경] = useState(false);

  const 글정렬 = () => {
    const listCopy = [...글제목];
    listCopy.sort();
    글제목변경(listCopy);
  };

  const 좋아요클릭 = (i) => {
    const likeCopy = [...좋아요];
    likeCopy[i]++;
    좋아요변경(likeCopy);
  };

  const 리스트추가 = () => {
    const listCopy = [...글제목];
    listCopy.unshift(입력값);
    글제목변경(listCopy);

    const likeCopy = [...좋아요];
    likeCopy.unshift(0);
    좋아요변경(likeCopy);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div> Blog </div>
        <div style={{ color: 'grey', fontSize: '10px' }}>{data}</div>
      </div>

      {/* 배열.map( (요소, 인덱스, 배열) => { return 요소 } ) */}
      {글제목.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
                모달변경(!모달);
              }}
            >
              {글}
              <span>
                <button onClick={() => 좋아요클릭(i)}>👍</button>
                {좋아요[i]}
              </span>
            </h3>
            <p>2월 24일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="btn-set">
        <button onClick={글정렬}>정렬</button>
      </div>

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button onClick={리스트추가}>저장</button>
      </div>

      {모달 === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목: {props.글제목[props.누른제목]} </h2>
      <p>날짜: 2월 24일</p>
    </div>
  );
}

export default App;
