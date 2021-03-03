import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Linking, Alert, TouchableOpacity } from 'react-native';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { androidCameraPermissionOptions } from '../../Common/Common';
import { Text } from '../../components';
import { screens } from '../../config';
const { width, height } = Dimensions.get('window');
export default function QrCodeScreen({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  const [isbarcodeRead, setbarcodeRead] = useState(true);
  const { barcodeRead, onBarcodeRead, onBarcodeFinderLayoutChange } = useBarcodeRead(
    isbarcodeRead,
    async (data: string) => {
      console.log('data', data);
      setbarcodeRead(false);
      if (data) {
        const supported = await Linking.canOpenURL(data);
        if (supported) {
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
