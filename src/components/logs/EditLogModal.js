import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types'
import {updateLog} from '../../actions/logActions';
import {connect} from 'react-redux';
import TechSelectedOptions from '../techs/TechSelectedOptions';


const EditLogModal = ({current, updateLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if(current){
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current])


  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please finish the log input!',
        displayLength: 2000
      })
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }
      // console.log(message, attention, tech);

      updateLog(updLog);
      M.toast({html: 'updated', displayLength: 2000});
      //clear fileds
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4 style={{ marginBottom: '30px' }}>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
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
                Choose your option
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


// EditLogModal.propTypes = {
//   addLog
EditLogModal.propTpes = {
  current: PropTypes.bool,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.log.current
})

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(mapStateToProps, {updateLog})(EditLogModal);
