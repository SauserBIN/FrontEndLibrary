import { useContext, useState } from "react";
import { editContext } from "../App";
import { getLogo } from "../util"

// App.jsx에서 선언한 editContext를 memoWord에 담아놓았으니 useContext로 호출해서
// editContext를 가져온걸 {removeWord}(애드에서 지우려고 만들어둔것)를
// 호출해주고, useContext함수 안에다가 editContext(생성~수정까지 다 들어간거)를 넣어준것.

// Detail 안에 들어간 id~Types가 원래는 data로
const Detail = ({ id, item, mean , Types }) => {
  console.log(getLogo)
  // 만약 풀어서 받았을경우 {id, item, mean, Types}로 받을수도 있다.
  // 그렇게되면 {data.item}대신 {item}이 들어간다고 보면됨.
  const { removeWord, editWord } = useContext(editContext);
  function removeBtn() {
    if(window.confirm(`${item}을/를 삭제 하시겠습니까?`)){
      removeWord(id);
    }
  }
  // 삭제하는거

  const [update, setUpdate] = useState(true);
  function editBtn() {
    setUpdate(!update);
    // 부정
  }
  // 수정하는거 창 켜는거

  const [editCont, setEditCont] = useState(mean)
  function editChange(e){
    setEditCont(e.target.value)
  }
// 수정 값 넣는거
  
  function saveBtn(){
    editWord(id, editCont)
    editBtn()
  }


  function cancleBtn(){
    setUpdate(!update);
    // 부정의 부정 수정 창끄는거 이걸 사실 굳이 쓸 필요없이 editBtn을 공통으로 켜는거 끄는거에 넣어줘도
    // 작동이 된다!
  }

  return (
    <>
      <dl>
        <dt>
          <span>{item}</span>
          <img
          src={getLogo(Types)}
          alt={`${Types} 아이콘`}
          className={`icon_${Types}`}
          />
          </dt>
        <dd>
          {update ? (
            <span>{mean}</span>
          ) : (
            <div>
              <textarea
                className="edit_box"
                name="mean"
                value={editCont}
                onChange={editChange}
              ></textarea>
            </div>
          )}
          <span className="type_font"> {Types}</span>
          {update ?
          <span className="custom_btn">
            <button onClick={removeBtn}>삭제</button>
            <button onClick={editBtn}>수정</button>
          </span>
          : 
          <span className="custom_btn">
            <button onClick={saveBtn}>수정 완료</button>
            <button onClick={editBtn}>수정 취소</button>
          </span>
          }
        </dd>
      </dl>
    </>
  );
};

export default Detail;
