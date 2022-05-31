import React from 'react'
import { useEffect, useState } from 'react';

const NewRecordComponent = (props) => {
    const [user,setUser] = useState({
        name:'',
        email:'',
        address:'',
        phone:'',
    });
    const addNewRecord = async()=>{
        try{

        }catch(err){
            console.log("ErrodAddingNewRecord",err);
        }
    };
    const updateRecord = async()=>{
        try{

        }catch(err){
            console.log("ErrorUpdatingRecord");
        }
    }
    useEffect(()=>{

    },[]);
  return (
    <div className='deleteComponent newRecordComponent'>
        <div className="deleteContainer">
            <div className='part1 newRecordPar1'>
                <span className='part1Span'>Add new employee</span>
                <button onClick={(e)=>props.closeModal()} className='closeModalButton'>x</button>
            </div>
            <div className='part2 newRecordPar2'>
                <input onChange={(e)=>setUser({name:e.target.value})} className='inputNewRecord inputName' type='text' placeholder='Name' />
                <input onChange={(e)=>setUser({email:e.target.value})} className='inputNewRecord inputEmail' type='email' placeholder='Email' />
                <input onChange={(e)=>setUser({address:e.target.value})} className='inputNewRecord inputAddress' type='text' placeholder='Address' />
                <input onChange={(e)=>setUser({phone:e.target.value})} className='inputNewRecord inputPhone' type='tel' placeholder='Phone' />
            </div>
            <div className='part3 newRecordPar3'> 
                <button onClick={(e)=>props.closeModal()} className='cancelButton'>Cancel</button>
                <button className='addButton'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default NewRecordComponent