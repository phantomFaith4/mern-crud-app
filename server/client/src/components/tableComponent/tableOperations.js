import {useState, useEffect} from 'react';

const calculateRange = (data,rowsPerPages)=>{
    const range = [];
    const num = Math.ceil(data.length / rowsPerPages);
    let i = 1;
    for (let i = 1; i <= num; i++){
        range.push(i);
    }
    return range;
};

const sliceData = (data,page,rowsPerPages)=>{
    return data.slice((page-1)* rowsPerPages,page*rowsPerPages);
};

const useTable = (data,page,rowsPerPages)=>{
    const [tableRange,setTableRange] = useState([])
    const [slice,setSlice] = useState([]);

    useEffect(()=>{
        const range = calculateRange(data,rowsPerPages);
        setTableRange([...range]);
        const slice = sliceData(data,page,rowsPerPages);
        setSlice([...slice]);
    },[data,setTableRange ,page,setSlice]);
    return {slice,range:tableRange};
}

export default useTable;