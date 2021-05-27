import React, { memo } from 'react';
import { PanResponder, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Defs, LinearGradient, Stop, Circle, G, Line, Rect, Text } from 'react-native-svg';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Platform } from '../../theme';
import { COLORS } from '../../constants';
import { useNewsStyle } from './styles';
const dataXY = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -20];
const dataChart = [50, 10, 40, 45, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10];

const _NewsScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useNewsStyle();
  const axesSvg = { fontSize: 10, fill: COLORS.BLACK };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  const Tooltip = ({ x, y }: any) => (
    <G x={x(dataChart.length) / 2} key={'tooltip'} onPress={() => console.log('tooltip clicked')}>
      <G y={100}>
        <Rect height={40} width={75} stroke={'grey'} fill={'white'} ry={10} rx={10} />
        <Text x={75 / 2} dy={20} alignmentBaseline={'middle'} textAnchor={'middle'} stroke={'rgb(134, 65, 244)'}>
          {`${dataChart[5]}ºC`}
        </Text>
      </G>
      <G x={75 / 2}>
        <Line y1={100 + 40} y2={y(dataChart[dataChart.length - 1])} stroke={'grey'} strokeWidth={2} />
        <Circle
          cy={y(dataChart[dataChart.length - 1])}
          r={6}
          stroke={'rgb(134, 65, 244)'}
          strokeWidth={2}
          fill={'white'}
        />
      </G>
    </G>
  );

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'100%'} y2={'0%'}>
        <Stop offset={'0%'} stopColor={'#7DC1FF'} />
        <Stop offset={'50%'} stopColor={'#9180FF'} />
        <Stop offset={'100%'} stopColor={'#E869F3'} />
      </LinearGradient>
    </Defs>
  );

  const _onMove = (e) => {
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 51 ~ e`, e, e.currentTarget);
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------`);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: _onMove.bind(this),
    // onPanResponderRelease: _pressDragRelease.bind(this),
  });

  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
      <View style={{ height: 400, padding: 20, flexDirection: 'row' }}>
        <View {...panResponder.panHandlers} style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={dataXY}
            contentInset={verticalContentInset}
            yAccessor={({ item }) => {
              return item;
            }}
            svg={{
              strokeWidth: 2,
              stroke: 'url(#gradient)',
            }}>
            <Grid />
            <Gradient />
            <Tooltip />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={dataXY}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
        <YAxis
          // min={-80}
          data={dataXY}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
