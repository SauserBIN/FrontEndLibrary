import {
  useState,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  createContext,
} from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Datas, Reducer } from "./components/datas";
import "./App.css";
import Main from "./components/main";
import Write from "./components/write";
import Cat from "./assets/cat.jpg";
import Notpage from './components/notpage'
import Logo from './assets/logo.png'

export const dicContext = createContext();
export const editContext = createContext();

function App() {
  const [state, dispatch] = useReducer(Reducer, Datas);
  // 데이터에 있는 항목들을 Reducer로 호출해서 사용
  const { datas } = state;
  const { item, mean, Types } = state.inputs;
  const userId = useRef(151);

  const createWord = useCallback(
    (item, mean, Types) => {
      // 시간받는 거 데이터에 추가할거면 이거 주석풀고 쓸것
      // const createDate = new Date().toLocaleDateString();
      dispatch({
        type: "create",
        dic: {
          item,
          mean,
          Types,
          id: userId.current,
          // createDate  //이것도 데이터에 만들어서 가져올거면 만들어주고, 가져오면됨.
        },
      });
      userId.current += 1;
    },
    [item, mean, Types]
  );
  // datas.jsx에 있는 create case에 있는걸 선언해서 가져옴

  const editWord = (id, mean) => {
    dispatch({
      type: "update",
      id,
      mean,
    });
  };
  // 수정하는 case
  const removeWord = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };
  // 지우는 case

  const searchWord = (text) => {
    dispatch({
      type: "search",
      text,
    });
  };

  const memoWord = useMemo(() => {
    return {
      createWord,
      editWord,
      removeWord,
      searchWord,
    };
  }, []);

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="flex top">
          <img className="logo_img" src={Logo} alt="logo"/>
          <h1 className="top_name">프론트 엔드 사전</h1>
        </div>
        <div>
          <img className="cat_img" src={Cat} alt="cat" />
        </div>
      </Link>
      <div className="flex nav_wrap">
      <Link to="/Main" style={{ textDecoration: "none", color: "black" }}>
        <div className="list_name">
          <h1>List</h1>
        </div>
      </Link>
      <Link to="/Write" style={{ textDecoration: "none", color: "black" }}>
        <div className="write_name">
          <h1>Write</h1>
        </div>
      </Link>
      <Link to="/Notpage"></Link>
      </div>
      <dicContext.Provider value={datas}>
        {/* 데이터를 전부 가지고있는 익스포트된 선언 */}
        <editContext.Provider value={memoWord}>
          <Routes>
            <Route path="/Main" element={<Main></Main>} />
            <Route path="/Write" element={<Write></Write>} />
            <Route path="/Notpage" element={<Notpage/>}/>
          </Routes>
        </editContext.Provider>
      </dicContext.Provider>
    </>
  );
}

export default App;
