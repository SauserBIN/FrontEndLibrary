import { useEffect } from 'react';
import List from './list'

const Main = ()=>{
    useEffect(() => {
        window.scrollTo(0, 800); 
      }, []); 
    return(
        <>
        <h4 className='select_btn'>종류를 선택해 주세요.</h4>
        <List></List>
        </>
    )
}
export default Main