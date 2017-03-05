import React, {PropTypes, Component} from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import styles from './BarChart.styles';

class Bar extends Component {
    constructor(props) {
        super(props);

        this.widthAnimation = new Animated.Value(0);
    }

    componentDidMount() {
        const {width} = this.props;

        Animated.timing(this.widthAnimation, {
            toValue: width < 4 ? 0 : width - 4,
            delay: 500,
            duration: 500
        }).start();
    }

    render() {
        const {color} = this.props;
        return (
            <Animated.View style={[styles.bar, {width: this.widthAnimation, backgroundColor: color}]} />
        );
    }
}

Bar.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string
};

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerWidth: 0
        };
        this.onLayout = this.onLayout.bind(this);
    }

    onLayout(event) {
        const {width} = event.nativeEvent.layout;
        this.setState({
            containerWidth: width
        });
    }

    renderBars() {
        const {containerWidth} = this.state;
        if (!containerWidth) return null;

        const {data} = this.props;

        const sum = reduce(data, (result, current) => result + current.count, 0);

        return map(data, (entry, index) => {
            const percentage = sum === 0 ? 0 : entry.count / sum;
            const widthOfBar = percentage * containerWidth;
            const percentageToPresent = Math.round(percentage * 100);

            return (
                <View style={styles.barContainer} key={`bar_index_${index}`}>
                    <Text style={styles.label}>{entry.label}: {percentageToPresent}%</Text>
                    <View style={[styles.barBackground, {width: containerWidth}]}>
                        <Bar width={widthOfBar} color={entry.color} />
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <View onLayout={this.onLayout}>
                {this.renderBars()}
            </View>
        );
    }
}

BarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        count: PropTypes.number,
        label: PropTypes.string,
        color: PropTypes.string
    }))
};

export default BarChart;
