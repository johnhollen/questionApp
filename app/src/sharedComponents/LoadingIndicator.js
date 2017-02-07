import React, {PropTypes} from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingIndicator = (props) => {
    const {loading, size, color, children} = props;
    if (loading) {
        return (
            <ActivityIndicator animating={loading} size={size} color={color} />
        );
    }

    return children;
};

LoadingIndicator.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.element
};

export default LoadingIndicator;
