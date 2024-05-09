import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import { editContext } from "../App";

const Search = () => {
  const { searchWord } = useContext(editContext);
  const [search, setSearch] = useState(""); // 초기값을 빈 문자열로 설정
  const navigate = useNavigate(); // useNavigate 훅 생성

  function SearchChange(e) {
    setSearch(e.target.value);
  }

  function searchBtn() {
    if (search.trim() === "") { // 검색어가 비어 있거나 공백일 때
      navigate("/NotPage"); // /NotPage로 이동
    } else {
      searchWord(search); // 검색어가 있을 때 searchWord 호출
    }
  }

  return (
    <div className="flex search_wrap">
      <input
        className="search_input"
        placeholder="글자를 입력해주세요. 아무것도 안나오면 새로고침(F5)후 다시검색 해주세요."
        type="text"
        value={search}
        onChange={SearchChange}
      />
      <button className="search_btn" onClick={searchBtn}>
        검색
      </button>
    </div>
  );
};

export default Search;