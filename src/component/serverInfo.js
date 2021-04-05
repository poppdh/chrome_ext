import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';

import View from './view';


function ServerInfo() {
  // 선택된 자음 색인
  const [indexSet, setIndexSet] = useState('');

  // 선택된 서버명
  const [detailSet, setdetailSet] = useState('');

  // ajax 통신중 보여줄 loader
  const [isLoadS, setisLoadS] = useState(true);

  const [serverList, setServerList] = useState([]);

  const [viewState, setViewState] = useState(false);
  const [viewData, setViewData] = useState([]);



  const hanIndex = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  function addList(w){
    console.log('업무 능력 답답해서 만든 페이지');
    setViewState(false);

    setisLoadS(true);
    setIndexSet(w);
    axios.post('http://poppdh11.cafe24.com/surfadmin/locker.php')
    .then(function (res) {
      setServerList(res.data.result);
      setisLoadS(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function vDraw(x){
    setisLoadS(true);
    setViewState(true);
    axios.post('http://poppdh11.cafe24.com/surfadmin/locker.php')
    .then(function (res) {
      setViewData(res.data.result);
      setisLoadS(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  return(
    <>
    <div className="side_nav">
      <ul>
        {hanIndex.map((x, i) => {
          return(
            <li key={i}><button type="button" className={indexSet === x ? 'a' : ''} onClick={() => addList(x)}>{x}</button></li>
          )
        })}
      </ul>
    </div>
    <div className="contents">
      <h1>서버/관리자 정리</h1>
      {indexSet === '' ? <p className="n_sel">선택된 정보가 없습니다.</p> : 
      <>
        {isLoadS ? <div className="ui active centered inline loader"></div> : 
          <>
          {viewState ? <View data={viewData}/> :
            <>
            <ul className="server_lst">
              {serverList.map((xy,xi) => {
                return(
                  <li key={xi}><button type="button" onClick={() => vDraw(xy.no)}>{xy.name}</button></li>
                )
              })}
            </ul>
            </>
          }
          </>
        }
      </>
      }
    </div>
    </>
    
  )

}

export default ServerInfo;
