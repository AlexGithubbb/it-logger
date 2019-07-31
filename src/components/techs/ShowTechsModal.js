import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const ShowTechsModal = ({ tech: { techs, loading }, getTechs}) => {

    useEffect(() => {
      getTechs();
    }, []);


  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Techcian List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
            }
        </ul>
      </div>
    </div>
  );
};

ShowTechsModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(
  mapStateToProps,
  { getTechs }
)(ShowTechsModal);
