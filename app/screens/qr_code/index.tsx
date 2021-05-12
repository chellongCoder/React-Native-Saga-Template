import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Linking, Alert, TouchableOpacity } from 'react-native';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppBars, Text } from '../../components';
import { screens } from '../../config';
import { Platform } from '../../theme';
import navigationService from '../../navigation/navigation-service';
import { androidCameraPermissionOptions } from '../../constants';

const { width, height } = Dimensions.get('window');

function QrCodeScreen({ navigation }: StackNavigationProp<any>) {
  const [isbarcodeRead, setbarcodeRead] = useState(true);
  const { barcodeRead, onBarcodeRead, onBarcodeFinderLayoutChange } = useBarcodeRead(
    isbarcodeRead,
    async (data: string) => {
      if (data) {
        setbarcodeRead(false);
        console.log('🚀 ~ file: index.tsx ~ line 20 ~ data', data);
        const supported = await Linking.canOpenURL(data);
        if (supported) {
          if (data.indexOf('sahatha.vn') > 0) {
            navigationService.replace(screens.product_scan, {
              params: { urlScan: data },
            });
            return;
          }
          await Linking.openURL(data);
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
      <View style={styles.backContainer}>
        <AppBars onPressLeft={onBack} />
      </View>
      <Text style={styles.styTxtHeader} fontType={'fontBold'}>
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
          width={Platform.SizeScale(200)}
          height={Platform.SizeScale(200)}
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
    top: Platform.SizeScale(100),
    width: width - 60,
    textAlign: 'center',
    color: '#FFF',
    fontSize: Platform.SizeScale(16),
  },
  backContainer: {
    position: 'absolute',
    top: Platform.SizeScale(0),
    left: Platform.SizeScale(0),
  },
});
