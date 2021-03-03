import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Linking,
    Alert
} from 'react-native';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { androidCameraPermissionOptions } from '../../Common/Common';
const { width, height } = Dimensions.get('window');
export default function QrCodeScreen() {
    const [isbarcodeRead, setbarcodeRead] = useState(true);
    const {
        barcodeRead,
        onBarcodeRead,
        onBarcodeFinderLayoutChange,
    } = useBarcodeRead(
        isbarcodeRead,
        async data => {
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
        },
        processed => {
            console.log('processed', processed);
        },
    );
    return (
        <View style={styles.styContain}>
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
        zIndex: -1
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
        fontSize: 16
    }
});