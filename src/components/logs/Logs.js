import React, {useEffect} from 'react'
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logActions';
import PropTypes from 'prop-types';


const Logs = ({log: {logs, loading}, getLogs}) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // limit eslint 
  }, [])

  // const getLogs = async() => {
  //   setLoading(true);
  //   const res = await fetch('/logs');
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);
  // }

  if(loading || logs === null){
    return <PreLoader />
  }

  return (
    // <div>
    //  { error && alert('got an error')}
    <ul className='collection with-header'>
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ?
          (<p className="center">no logs show...</p>) :
          (logs.map(log => {
            return <LogItem key={log.id} log={log} />
          }))
        }
      </ul>
    // </div>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, {getLogs})(Logs);
