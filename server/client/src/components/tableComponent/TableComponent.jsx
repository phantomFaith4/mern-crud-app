import React from 'react'
import './tableComponent.css';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import DeleteComponent from '../deleteRecordComponent/DeleteRecordComponent';
import NewRecord from '../newRecordComponent/NewRecordComponent';
import { axiosInstance } from '../../config';

const TableComponent = () => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [switchM, setSwitchM] = useState(false);
  const [users,setUsers] = useState([]);
  const  openModal = (s)=> {
    setIsOpen(true);
    setSwitchM(s);
  }
  const closeModal = (s)=> {
    setIsOpen(false); 
  }
  useEffect(()=>{
    const fetch = async()=>{
      const res = await axiosInstance.get('/api/all');
      setUsers(res.data);
      console.log("sdsd")
    };
    fetch();
  },[]);
  return (
    <div className='tableDiv'>
      <div className='tableTitleDiv'>
        <div className='title'>
            <h1 className='titleH1'>Manage Employees</h1>
        </div>
        <div className='buttonHolder'>
            <button onClick={(e)=>openModal(false)} className='deleteButtonTable'>DELETE</button>
            <button onClick={(e)=>openModal(true)} className='addButtonTable'>ADD NEW</button>
            <Modal isOpen={modalIsOpen} overlayClassName="Overlay" onRequestClose={closeModal} className="Modal">
              {
                switchM ? (<NewRecord closeModal={closeModal}/>) : (<DeleteComponent closeModal={closeModal} />)
              }
            </Modal>
        </div>
      </div>
      <table className="table">
      <thead>
        <tr className='columnTitleDiv'>
          <th className='checkboxHolder firstRow'>
            <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th className='firstRow'>Name</th>
          <th className='firstRow'>Email</th>
          <th className='firstRow'>Address</th>
          <th className='firstRow'>Phone</th>
          <th className='firstRow'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(u=>
          (
            <>
               <tr>
                <td className='checkboxHolder'>
                  <span className="customCheckbox">
                      <input type="checkbox"/>
                      <label htmlFor="checkbox1"></label>
                    </span>
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.address}</td>
                <td>{u.phone}</td>
                <td className='iconHolder'>
                  <i className="iconEdit fa-solid fa-pen"></i>
                  <i className="iconDelete fa-solid fa-trash"></i>
                </td>
              </tr>
            </>
          )
          )
        }
      </tbody>
    </table>
    </div> 
  )
}

export default TableComponent