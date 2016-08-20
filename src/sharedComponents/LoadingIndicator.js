import React, {PropTypes} from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingIndicator = React.createClass({
    propTypes: {
        loading: PropTypes.bool,
        size: PropTypes.string,
        color: PropTypes.string
    },

    render() {
        const {loading, size, color, children} = this.props;
        if (loading) return <ActivityIndicator size={size} color={color} />;

        return children;
    }
});

export default LoadingIndicator;
