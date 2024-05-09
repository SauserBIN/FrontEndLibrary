import { useState, useCallback } from "react";
const DicInput = (inputData) => {
  const [data, setData] = useState(inputData);
  // datas에있는 정보를 가져와서 만들것. [data, setData]는 임의의 이름
  // 여기서는 데이터를 만들어서 내보낸다고만 생각하면되서 리턴에는 대괄호
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(value)
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }, []);
  const reset = useCallback(()=>setData(inputData),[inputData])
  return [data, onChange, reset];
};

export default DicInput;
