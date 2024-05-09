import { useState } from "react"

const sortList = [
    {value : 'All', name : '전체'},
    {value : 'html', name : 'html'},
    {value : 'css', name : 'css'},
    {value : 'javascript', name : 'javascript'},
    {value : 'node', name : 'node'},
    {value : 'react', name : 'react'},
]

    const SortSelect = ({value, onchange})=>{
    function optChange(e){
        onchange(e.target.value)
    }
    return(
        <select className="sort_box" value={value} onChange={optChange}>
            {sortList.map((sort)=>
                <option key={sort.value} value={sort.value}>{sort.name}</option>
            )}
        </select>
    )
}

export default SortSelect