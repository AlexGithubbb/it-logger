import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logActions';
import PropTypes from 'prop-types'
import TechSelectedOptions from '../techs/TechSelectedOptions';


const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if(message === '' || tech === ''){
      M.toast({ html: 'Please finish the log input!',
        displayLength: 2000 })
    }else{
      const newLog = {
        message,
        attention,
        tech,
        date : new Date()
      }
      addLog(newLog);
      M.toast({
        html: 'Log has been added successfully!',
        displayLength: 2000
      })
      // console.log(message, attention, tech);
      //clear fileds
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal' style = {modalStyle}>
      <div className='modal-content'>
        <h4 style = {{marginBottom: '30px'}}>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectedOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in blue-text'
                  value={attention}
                  checked={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn blue'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}


export default connect(null, {addLog})(AddLogModal);
