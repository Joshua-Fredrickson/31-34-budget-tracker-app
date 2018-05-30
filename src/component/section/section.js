import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionForm from '../section-form/section-form';
import * as sectionActions from '../../action/section';

class Section extends React.Component {
  render() {
    const {
      section,
      key,
      sectionRemove,
      sectionUpdate,
    } = this.props;
    return(
        <div className='section' key={key}>
          <h1>
            { section.title }
          </h1>
          <button onClick={() => sectionRemove(section) }> Delete </button>
          <sectionForm section={section} onComplete={sectionUpdate}/>
        </div>
    );
  }
}

Section.propTypes = {
  // Josh - below were are connecting all of the state
  section: PropTypes.object,
  key: PropTypes.number,
  sectionRemove: data => PropTypes.func,
  sectionUpdate: data => PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    sectionRemove: data => dispatch(sectionActions.remove(data)),
    sectionUpdate: data => dispatch(sectionActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Section);

// connect(state, connecting to the Dispatch function)(curring to make the actual connection
// component)