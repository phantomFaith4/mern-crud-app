import React from 'react'
import { useEffect, useState } from 'react';
import {axiosInstance} from '../../config';

const NewRecordComponent = (props) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');

    const addNewRecord = async()=>{
        console.log(name,email,address,phone)
        try{
            const res = await axiosInstance.post(`/api/new`,{
                name:name,
                email:email,
                address:address,
                phone:phone,
            }); 
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
                <input onChange={(e)=>setName(e.target.value)} className='inputNewRecord inputName' type='text' placeholder='Name' />
                <input onChange={(e)=>setEmail(e.target.value)} className='inputNewRecord inputEmail' type='email' placeholder='Email' />
                <input onChange={(e)=>setAddress(e.target.value)} className='inputNewRecord inputAddress' type='text' placeholder='Address' />
                <input onChange={(e)=>setPhone(e.target.value)} className='inputNewRecord inputPhone' type='text' placeholder='Phone' />
            </div> 
            <div className='part3 newRecordPar3'> 
                <button onClick={(e)=>props.closeModal()} className='cancelButton'>Cancel</button>
                <button onClick={addNewRecord} className='addButton'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default NewRecordComponent