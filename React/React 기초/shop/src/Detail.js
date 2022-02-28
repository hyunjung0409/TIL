import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

//styled-components 라이브러리 사용
//padding 스타일이 적용된 div를 생성한 것
let 박스 = styled.div`
  padding: 20px;
`;

//props로 스타일링
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let history = useHistory(); //페이지 이동 내역 + 유용한 함수(goBack(), push() 등)
  let { id } = useParams();

  //find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다.
  //그런 요소가 없을 경우, undefinced를 반환한다.
  let 찾는상품 = props.신발.find((data) => id == data.id);

  return (
    <div className="container">
      <박스>
        {/* <제목 색상={'red'}>상세페이지</제목>
        <제목 색상="blue">상세페이지</제목> */}
        <제목 className="red">상세페이지</제목>
      </박스>

      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
      <div className="my-alert-yellow">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾는상품.title}</h4>
          <p>{찾는상품.content}</p>
          <p>{찾는상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
