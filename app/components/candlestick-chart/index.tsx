import React, { memo, useEffect, useRef, useState } from 'react';
import { View, Text, processColor } from 'react-native';
import { CandleStickChart, ChartLegend } from 'react-native-charts-wrapper';
import _ from 'lodash';
import { Platform } from '../../theme';
import { useCandlestickChartStyle } from './styles';
import { dataSets } from './__mocks__/data';

const _CandlestickChart = ({}) => {
  const styles = useCandlestickChartStyle();
  const [legend, setLegend] = useState<ChartLegend>({
    enabled: true,
    textSize: 14,
    form: 'EMPTY',
    wordWrapEnabled: true,
  });
  const [data, setData] = useState({ dataSets });
  const [marker, setMarker] = useState({
    enabled: true,
    markerColor: processColor('#2c3e50'),
    textColor: processColor('white'),
  });
  const [zoomXValue, setZoomXValue] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState<any>();
  const [xAxis, setXAxis] = useState({});
  const [yAxis, setYAxis] = useState({});
  const chart: any = useRef();

  const handleSelect = (event) => {
    let entry = event.nativeEvent;
    if (entry == null) {
      setSelectedEntry(null);
    } else {
      setSelectedEntry(JSON.stringify(entry));
    }

    console.log(event.nativeEvent);
  };

  useEffect(() => {
    setXAxis({
      drawLabels: true,
      drawGridLines: true,
      position: 'BOTTOM',
      yOffset: 5,

      limitLines: _.times(data.dataSets[0].values.length / 5, (i) => {
        return {
          limit: 5 * (i + 1) + 0.5,
          lineColor: processColor('darkgray'),
          lineWidth: 1,
          label: (i + 1).toString(),
        };
      }),
    });
    setYAxis({
      left: {
        enabled: false,
      },
      right: {
        valueFormatter: '$ #',
        limitLines: [
          {
            limit: 89.47,
            lineColor: processColor('red'),
            lineDashPhase: 2,
            lineDashLengths: [10, 20],
          },
          {
            limit: 112.4,
            lineColor: processColor('red'),
            lineDashPhase: 2,
            lineDashLengths: [10, 20],
          },
        ],
      },
    });
    setZoomXValue(99999);
  }, [data.dataSets]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 80 }}>
        <Text> selected entry</Text>
        <Text> {selectedEntry}</Text>
      </View>

      <View style={styles.container}>
        <CandleStickChart
          style={styles.chart}
          data={data}
          marker={marker}
          chartDescription={{ text: 'CandleStick' }}
          legend={legend}
          xAxis={xAxis}
          yAxis={yAxis}
          maxVisibleValueCount={16}
          autoScaleMinMaxEnabled={true}
          zoom={{
            scaleX: data.dataSets[0].values ? data.dataSets[0].values.length / 8 : 0,
            scaleY: 1,
            xValue: Platform.OS === 'ios' ? -Number.MAX_SAFE_INTEGER : Number.MAX_SAFE_INTEGER,
            yValue: 1,
            axisDependency: 'RIGHT',
          }}
          // zoom={{ scaleX: 15.41, scaleY: 1, xValue: 40, yValue: 916, axisDependency: 'RIGHT' }}
          onSelect={handleSelect}
          ref={chart}
          onChange={(event) => console.log(event.nativeEvent)}
          doubleTapToZoomEnabled={true}
          pinchZoom
        />
      </View>
    </View>
  );
};

export const CandlestickChart = memo(_CandlestickChart);
