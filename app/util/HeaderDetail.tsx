import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppIcon } from '../Common/AppIcon';
import Image from 'react-native-fast-image';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { FontFamily } from '../theme';

interface Props {
    navigation: any,
    title?: string,
}

const HeaderDetail = (props: Props) => {
    return (
        <View style={styles.styWrapHead}>
            <RippleButtonAnim
                onPress={() => props.navigation.goBack()}
            >
                <Image source={AppIcon.IconArrow} resizeMode={'contain'} style={styles.styIcon} />
            </RippleButtonAnim>
            {props.title && <Text style={styles.styTitle}>{props.title}</Text>}
            <View style={styles.styIcon} />
        </View>
    );
}

export default HeaderDetail;

const styles = StyleSheet.create({
    styIcon: {
        width: 25,
        height: 25,
    },
    styWrapHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    styTitle: {
        fontFamily: FontFamily.fontRegular,
        fontSize: 18
    }
});