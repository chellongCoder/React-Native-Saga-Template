import React, { memo, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../components';
import { Images } from '../../constants';
import { ROUTES } from '../../config';
import { masterDataActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { useSplashStyle } from './styles';

const _SplashScreen = ({}) => {
  const { masterDatas } = useSelector((state: RootState) => state.MasterData);
  const navigation = useNavigation();
  const styles = useSplashStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(masterDataActionsCreator.getMasterDataRequest());
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!!masterDatas) {
      navigation.navigate(ROUTES.login);
    }
  }, [masterDatas, navigation]);

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} size={10} icon={Images.ICON_APP} />
      <ActivityIndicator />
    </View>
  );
};

export const SplashScreen = memo(_SplashScreen);
