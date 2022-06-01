import React from 'react'
import './deleteRecordComponent.css';
import { axiosInstance } from '../../config';
import { useEffect, useState } from 'react';

const DeleteRecordComponent = (props) => {

    const deleteRecord = async()=>{
        try{
          if(props.multi.length < 1){
            const res = await axiosInstance.delete(`/api/delete/${props.id}`);
          }else{
            for(const id of props.multi){
              const res = await axiosInstance.delete(`/api/delete/${id}`);
            }
          }
          props.closeModal();
        }catch(err){
          console.log("ErrodDeletingRecord",err);
        }
    };
  return (
    <div className='deleteComponent'>
        <div className="deleteContainer">
            <div className='part1'>
                <span className='part1Span'>Delete Employee</span>
                <button onClick={(e)=>props.closeModal()} className='closeModalButton'>x</button>
            </div>
            <div className='part2'>
                <p>Are you sure you want to delete these records?</p>
                <span>This action cannot be undone</span>
            </div>
            <div className='part3'> 
                <button onClick={(e)=>props.closeModal()} className='cancelButton'>Cancel</button>
                <button onClick={deleteRecord} className='deleteButton'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteRecordComponent