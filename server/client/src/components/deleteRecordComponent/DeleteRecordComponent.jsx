import React from 'react'
import './deleteRecordComponent.css';

const DeleteRecordComponent = (props) => {
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
                <button className='deleteButton'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteRecordComponent