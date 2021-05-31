import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from '../../components';
import { CommonStyle } from '../../constants';
import { timekeepActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { showConfirm, alertInput } from '../../util';
import { WorkoutParamsT } from './types';

const _ButtonGroup = () => {
  const { userInfo, url }: any = useSelector((state: RootState) => state.AuthData);

  const dispatch = useDispatch();
  const onCheckin = useCallback(() => {
    showConfirm('Bạn có muốn thực hiện tác vụ này?', '', () => {
      const params = {
        token: userInfo?.access_token || '',
        url,
      };
      dispatch(timekeepActionsCreator.postCheckinCheckoutRequest(params));
    });
  }, [dispatch, url, userInfo.access_token]);

  const onCheckout = useCallback(() => {
    showConfirm('Bạn có muốn thực hiện tác vụ này?', '', () => {
      const params = {
        token: userInfo?.access_token || '',
        url,
      };
      dispatch(timekeepActionsCreator.postCheckinCheckoutRequest(params));
    });
  }, [dispatch, url, userInfo.access_token]);

  const onRegisterWorkout = useCallback(() => {
    alertInput((value?: string) => {
      const params: WorkoutParamsT = {
        token: userInfo?.access_token || '',
        url,
        comment: '',
        reason: value || '',
        date: '2021-01-12',
        end_time: '12:00',
        start_time: '10:30',
        user_id: userInfo?.id.toString(),
      };
      dispatch(timekeepActionsCreator.workoutRegistrationRequest(params));
    });
  }, [dispatch, url, userInfo.access_token, userInfo.id]);

  return (
    <View style={styles.container}>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.buttonGroup]}>
        <AppButton onSubmit={onCheckin} mr={Platform.SizeScale(5)} style={styles.button1} title={'Vào làm'} />
        <AppButton onSubmit={onCheckout} ml={Platform.SizeScale(5)} style={styles.button1} title={'Ra về'} />
      </View>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.buttonGroup]}>
        <AppButton onSubmit={onRegisterWorkout} style={styles.button1} title={'ra ngoài'} />
        <AppButton style={styles.button1} mr={Platform.SizeScale(10)} ml={Platform.SizeScale(10)} title={'xin nghỉ'} />
        <AppButton style={styles.button1} title={'làm thêm'} />
      </View>
    </View>
  );
};

export const ButtonGroup = memo(_ButtonGroup);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.SizeScale(20),
  },
  button1: {
    flex: 1,
  },
  buttonGroup: {
    paddingTop: Platform.SizeScale(20),
  },
});
