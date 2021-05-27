import React from 'react';
import { Line, Rect } from 'react-native-svg';
import { COLORS } from '../../constants';
import { scaleY, scaleBody } from './ChartHelpers';

const MARGIN = 2;

export interface Candle {
  date: string;
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandleProps {
  candle: Candle;
  index: number;
  width: number;
}

const Candle = ({ candle, index, width }: CandleProps) => {
  const { close, open, high, low } = candle;
  const fill = close > open ? '#4AFA9A' : '#E33F64';
  const shadow = COLORS.BOLD_GRAY;
  const x = index * width;
  const max = Math.max(open, close);
  const min = Math.min(open, close);
  return (
    <>
      <Line x1={x + width / 2} y1={scaleY(low)} x2={x + width / 2} y2={scaleY(high)} stroke={shadow} strokeWidth={1} />
      <Rect
        x={x + MARGIN}
        rx={5}
        y={scaleY(max)}
        width={width - MARGIN * 2}
        height={scaleBody(max - min)}
        {...{ fill }}
      />
    </>
  );
};

export default Candle;
