import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Linking, Alert, TouchableOpacity } from 'react-native';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { androidCameraPermissionOptions } from '../../Common/Common';
import { Text } from '../../components';
import { screens } from '../../config';
import { qrActionsCreator } from '../../redux/actions';
const { width, height } = Dimensions.get('window');
function QrCodeScreen({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  const [isbarcodeRead, setbarcodeRead] = useState(true);
  const { barcodeRead, onBarcodeRead, onBarcodeFinderLayoutChange } = useBarcodeRead(
    isbarcodeRead,
    async (data: string) => {
      console.log('data', data);
      setbarcodeRead(false);
      if (data) {
        const supported = await Linking.canOpenURL(data);
        if (supported) {
          if (data.indexOf('sahatha.vn') > 0) {
            navigation.navigate(screens.product_scan, {
              params: { urlScan: 'https://sahatha.vn/a/G1409' },
            });
            return;
          }
          await Linking.openURL(data);
          setbarcodeRead(true);
        } else {
          Alert.alert(`Don't know how to open this URL: ${data}`);
          setbarcodeRead(true);
        }
      }
      return data;
    },
    (processed) => {
      console.log('processed', processed);
    },
  );

  const onBack = useCallback(() => {
    navigation.goBack();
    navigation.navigate(screens.home);
    // navigation.navigate(screens.product_scan, {
    //   params: { urlScan: 'https://sahatha.vn/a/G1409' },
    // });
  }, [navigation]);

  return (
    <View style={styles.styContain}>
      <TouchableOpacity onPress={onBack} style={styles.backContainer}>
        <Text style={styles.back}>back</Text>
      </TouchableOpacity>
      <Text style={styles.styTxtHeader}>
        Quét mã vạch, QR code, Tem chống giả để kiểm tra thông tin sản phẩm và phát hiện hàng giả
      </Text>

      <RNCamera
        androidCameraPermissionOptions={androidCameraPermissionOptions}
        style={styles.scanner}
        type={RNCamera.Constants.Type.back}
        barcodeTypes={barcodeRead ? [] : [RNCamera.Constants.BarCodeType.qr]}
        onBarCodeRead={onBarcodeRead}
        captureAudio={false}>
        <BarcodeMaskWithOuterLayout
          barcodeTypes={barcodeRead ? [] : [RNCamera.Constants.BarCodeType.qr]}
          maskOpacity={0.35}
          width={width - 100}
          height={width - 100}
          onLayoutChange={onBarcodeFinderLayoutChange}
          edgeRadius={10}
        />
      </RNCamera>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.QRData.product,
  };
};

const mapDispatchProps = (props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchProps)(QrCodeScreen);

const styles = StyleSheet.create({
  scanner: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width,
    height,
    zIndex: -1,
  },
  styContain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styTxtHeader: {
    position: 'absolute',
    top: 100,
    width: width - 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
  backContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  back: {
    fontSize: 24,
  },
});
