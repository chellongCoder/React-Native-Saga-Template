import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import { COLORS, CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { getFormattedDate, getFormattedTime } from '../../util';
import { useHomeStyle } from './styles';

let intervalID: any;
const TabWork = () => {
  const styles = useHomeStyle();
  const [time, setTime] = useState(new Date());

  const tick = useCallback(() => {
    setTime(new Date());
  }, []);

  useEffect(() => {
    intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [tick]);

  return (
    <View style={styles.containerTabwork}>
      <View style={[CommonStyle.row, styles.tabContainer]}>
        <View style={styles.tabWorkDateLabel}>
          <Text>ngày làm việc</Text>
        </View>
        <View style={styles.tabWorkDatetime}>
          <Text>{getFormattedDate(time)}</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Text color={COLORS.darkBlue} fontSize={Platform.SizeScale(30)}>
          {getFormattedTime(time)}
        </Text>
      </View>
    </View>
  );
};

export default TabWork;
