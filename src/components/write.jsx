import DicInput from "../HOOK/dicinput";
import { useContext, useEffect } from "react";
import { editContext } from "../App";


const Write = () => {
  useEffect(() => {
    
    window.scrollTo(0, 500); 
  }, []); 
  const [{ item, mean, Types }, onChange, reset] = DicInput({
    item: "",
    mean: "",
    Types: "",
  });

  const { createWord } = useContext(editContext);

  const createBtn = () => {
    if (item.trim() === "") {
      alert("용어를 입력해주세요.");
      return;
    }

    if (mean.trim() === "") {
      alert("설명을 입력해주세요.");
      return;
    }

    let type;

    if (Types === undefined || Types === "") {
      type = "html";
    } else {
      type = Types;
    }

    const isConfirmed = confirm(`${item}을 ${type}로 등록하시겠습니까?`);

    if (isConfirmed) {
      createWord(item, mean, type);
      reset();
      console.log(`${item}이(가) ${type}로 등록되었습니다.`);
    } else {
      console.log("등록이 취소되었습니다.");
    }
  };

  return (
    <>
      <h1 className="write_top">추가할 용어를 작성해주세요.</h1>
      <div className="write_box">
        <div className="item_box">
          <label className="write_font">추가할 용어: </label>
          <input
            className="write_item"
            type="text"
            name="item"
            value={item}
            onChange={onChange}
          />
        </div>
        <div className="mean_box">
          <label className="write_font">설명: </label>
          <textarea
            className="mean_textbox"
            name="mean"
            value={mean}
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <label>분류: </label>
          <select
            className="types"
            name="Types"
            value={Types}
            onChange={onChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="node">Node</option>
            <option value="react">React</option>
          </select>
        </div>
      </div>
      <button className="save_btn" onClick={createBtn}>저장</button>
    </>
  );
};

export default Write;