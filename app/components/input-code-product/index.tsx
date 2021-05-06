import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { qrActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { AppButton } from '../button';
import { TextField } from '../text-field';
import { useInputCodeProductStyle } from './styles';

const _InputCodeProduct = ({}) => {
  const styles = useInputCodeProductStyle();
  const { idMaHoa: id_mahoa, inputVerify } = useSelector((state: RootState) => state.QRData);
  const dispatch = useDispatch();

  const onVerify = () => {
    inputVerify &&
      dispatch(
        qrActionsCreator.verifyProductRequest({
          id_mahoa,
          input_verify: inputVerify,
        }),
      );
  };

  const onChangeCode = useCallback(
    (text: string) => {
      dispatch(qrActionsCreator.changeInputVerify(text));
    },
    [dispatch],
  );

  return (
    <View style={styles.modal}>
      <TextField
        onChangeText={onChangeCode}
        // renderLeftAccessory={renderLeftAccessoryMail}
        style={styles.inpuCodeStyle}
        placeholder="Mã cào"
        inputStyle={styles.inputStyles}
      />
      <AppButton
        onSubmit={onVerify}
        labelStyles={styles.txtButtonVerify}
        style={styles.buttonVerify}
        title={'Xác thực'}
      />
      <RippleButtonAnim containerStyle={styles.outButton}>
        <Text>Thoát</Text>
      </RippleButtonAnim>
    </View>
  );
};

export const InputCodeProduct = memo(_InputCodeProduct);
