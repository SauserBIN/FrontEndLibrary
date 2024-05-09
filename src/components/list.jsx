import { useContext, useState } from "react";
import { dicContext } from "../App";
import SortSelect from "./sort";
import Detail from "./detail";
import Search from "./search";


const List = () => {
  const datas = useContext(dicContext);
  const [optList, setOptList] = useState("All");

  const getSortList = () => {
    const sortItem = (item) => {
      console.log(optList)
      switch (optList) {
        case "html":
          return item.Types === "html";
        case "css":
          return item.Types === "css";
        case "javascript":
          return item.Types === "javascript";
        case "node":
          return item.Types === "node";
        case "react":
          return item.Types === "react";
        default:
          return null;
      }
    }
    const copyList = JSON.parse(JSON.stringify(datas))
    const sortingList = optList === 'All' ? copyList :
    copyList.filter((item)=>sortItem(item))
    return sortingList
  };

  // filter
  // 필터로 조건이맞는애를 찾을 수 있어야함
  return (
    <>
      <SortSelect value={optList} onchange={setOptList} />
      <Search></Search>
      <ul>
        {getSortList().map((data) => (
          <Detail key={data.id} {...data} />
        ))}
        {/* 풀어서 보내줄수도있다. data={data} 대신 {...data라고 주면} detail.jsx에서 */}
      </ul>
    </>
  );
};

export default List;

// {datas.map((data, index) => (
//     <li key={index}>
//       <h3>{data.item}</h3>
//       <p>{data.mean}</p>
//       <p>{data.Types}</p>
//     </li>
//   ))}
