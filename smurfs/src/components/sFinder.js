import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/apiCall';
import SmurfMaker from './SmurfMaker';
import Creation from './Creation'
const Finder = (props) => {
    useEffect(() => {
        props.search();
    }, []);
    if (props.isYoinking) {
        return <h2>Loading  for that good good ...</h2>;
    }
    return (

        <div className="smurfs">
            <p>hi ho hi ho its off to work we go!</p>
            {props.smurfs.map((item) => <SmurfMaker key={item.id} smurf={item} />)}
            <Creation />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isYoinking: state.isYoinking,
        error: state.error
    };
};

export default connect(mapStateToProps, { search })(Finder);
// (mapStateToProps, { search })