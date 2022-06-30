import React from 'react'
import { useEffect,useState } from 'react';
import { axiosInstance } from '../../config';
const EditRecordComponent = (props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [counter,setCounter] = useState(0);

    const updateRecord = async()=>{
        try{
            const res  = await axiosInstance.put(`/api/${props.id}`,{
                name:name,
                email:email,
                address:address,
                phone:phone,
            });
            setCounter(counter+1);
            props.closeModal();
        }
        catch(err){
            console.log("ErrorUpdatingRecord=>",err);
        }
    };
    useEffect(()=>{
        console.log(props.id);
        const fetch = async ()=>{
            const res = await axiosInstance.get(`/api/${props.id}`);
            setName(res.data.name);
            setEmail(res.data.email);
            setAddress(res.data.address);
            setPhone(res.data.phone);
        };
        fetch();
    },[counter]);
  return (
    <div className='deleteComponent newRecordComponent'>
        <div className="deleteContainer">
            <div className='part1 newRecordPar1'>
                <span className='part1Span'>Edit employee record</span>
                <button onClick={(e)=>props.closeModal()} className='closeModalButton'>x</button>
            </div>
            <div className='part2 newRecordPar2'>
                <input defaultValue={name} onChange={(e)=>setName(e.target.value)} className='inputNewRecord inputName' type='text' placeholder='Name' />
                <input defaultValue={email} onChange={(e)=>setEmail(e.target.value)} className='inputNewRecord inputEmail' type='email' placeholder='Email' />
                <input defaultValue={address} onChange={(e)=>setAddress(e.target.value)} className='inputNewRecord inputAddress' type='text' placeholder='Address' />
                <input defaultValue={phone} onChange={(e)=>setPhone(e.target.value)} className='inputNewRecord inputPhone' type='text' placeholder='Phone' />
            </div> 
            <div className='part3 newRecordPar3'> 
                <button onClick={(e)=>props.closeModal()} className='cancelButton'>Cancel</button>
                <button onClick={(e)=>updateRecord()} className='addButton'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default EditRecordComponent