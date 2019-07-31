import React, { useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions'


const AddLogModal = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please finish the tech info!',
        displayLength: 2000
      })
    } else {
      const newTech = {
        firstName,
        lastName
      }
      addTech(newTech);
      M.toast({
        html: `${firstName} ${lastName} was added as a tech`,
        displayLength: 2000
      })
      console.log(firstName, lastName);
      //clear fileds
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4 style={{ marginBottom: '30px' }}>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              Firstname
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Lastname
            </label>
          </div>
        </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn blue'
        >
          Enter
        </a>
      </div>
    </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

// AddLogModal.propTypes = {
//   addLog
// }


export default connect(null, {addTech})(AddLogModal);
