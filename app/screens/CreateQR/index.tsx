import React, { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { Text } from '../../components';
import { COLORS } from '../../constants';
import { RootState } from '../../redux/reducers';
import { AccountAPI } from '../../services';
import HeaderAccount from '../../util/HeaderAccount';
import TextInputInfo from '../../util/TextInputInfo';
import { alertMessage } from '../../util';
import styles from './createQr.styles';

const CreateQR = (props: any) => {
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState('');
  const { tempData } = useSelector((state: RootState) => state.AuthData);
  let { title } = props.route.params;

  const onChangeDescription = useCallback((text: string) => {
    setDescription(text);
  }, []);

  const onChangeNumber = useCallback((text: string) => {
    setNumber(text);
  }, []);

  const handleCreateQr = useCallback(async () => {
    if (_.isEmpty(tempData)) {
      return;
    }
    const { accessToken } = tempData;
    const params = {
      token: accessToken,
      description,
      number_request: number,
    };
    const reponse = await AccountAPI.createRequestQr(params);
    console.log('🚀 ~ file: index.tsx ~ line 35 ~ handleCreateQr ~ reponse', reponse);
    if (reponse.status === 200) {
      alertMessage(
        'Thông báo',
        () => {
          props.navigation.goBack();
        },
        reponse.message,
      );
    }
  }, [description, number, props.navigation, tempData]);
  return (
    <View style={styles.contain}>
      <HeaderAccount title={title} />
      <ScrollView style={styles.styWrapContent}>
        <TextInputInfo
          label={'Số lượng'}
          placeholder={'Nhập số lượng'}
          value={number}
          onChangeText={onChangeNumber}
          keyboardType={'number-pad'}
        />
        <TextInputInfo
          label={'Mô tả'}
          multiline
          placeholder={'Nhập mô tả'}
          value={description}
          onChangeText={onChangeDescription}
        />
        <View style={{ height: 50 }} />
        <RippleButtonAnim onPress={handleCreateQr}>
          <View style={styles.styWrapBtn}>
            <Text style={{ color: COLORS.WHITE }}>Save</Text>
          </View>
        </RippleButtonAnim>
      </ScrollView>
    </View>
  );
};

export default React.memo(CreateQR);
