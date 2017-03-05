import React, {PropTypes, Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import styles from './BarChart.styles';

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
        const {data} = this.props;

        const sum = reduce(data, (result, current) => result + current.count, 0);

        return map(data, (entry, index) => {
            const percentage = sum === 0 ? 0 : entry.count / sum;
            const widthOfBar = percentage * containerWidth;
            const percentageToPresent = Math.round(percentage * 100);
            return (
                <View style={styles.barContainer} key={`bar_index_${index}`}>
                    <Text style={styles.label}>{entry.label}: {percentageToPresent}%</Text>
                    <View style={styles.barBackground}>
                        <View style={[styles.bar, {width: widthOfBar, backgroundColor: entry.color}]} />
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <View style={styles.container} onLayout={this.onLayout}>
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
