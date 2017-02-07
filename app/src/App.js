import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Navigation from './sharedComponents/Navigation';
import {checkForUser} from './user/userActions';
import SigningIn from './user/SigningIn';
import {getUser} from './user/userSelectors';

// App Entry
class App extends Component {
    componentWillMount() {
        const {onCheckForUser} = this.props;
        onCheckForUser();
    }

    render() {
        const {user} = this.props;
        if (!user) {
            return (
                <SigningIn />
            );
        }

        return (
            <Navigation />
        );
    }
}

App.propTypes = {
    onCheckForUser: PropTypes.func,
    user: PropTypes.string
};

const mapStateToProps = (state) => ({
    user: getUser(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onCheckForUser: checkForUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
