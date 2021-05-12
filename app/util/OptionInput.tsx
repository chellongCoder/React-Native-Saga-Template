import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from 'native-base';
import { AppIcon } from '../constants/AppIcon';
import { Platform } from '../theme';
import { province } from '../screens/ChangeInfo/types';

interface Props {
  label: string;
  styleLabel?: object;
  styleText?: object;
  disable?: boolean;
  placeholder: string;
  data: { value: number; label: string }[];
  selectedValue?: string;
  onValueChange: (value: province) => void | undefined;
}

export default class OptionInput extends Component<Props, null> {
  render() {
    const { label, styleLabel, styleText, disable = false, placeholder } = this.props;
    return (
      <View style={styles.rowForm}>
        <Text style={[styles.label, styleLabel]}>{label}</Text>
        <View style={styles.viewInput}>
          {this.props.data && (
            <Picker
              note
              mode="dropdown"
              textStyle={[styles.textStyle, styleText]}
              itemTextStyle={[styles.textStyle, styleText]}
              style={styles.picker}
              placeholder={placeholder}
              selectedValue={this.props.selectedValue}
              onValueChange={(value: any) => {
                this.props.onValueChange(value);
              }}>
              {this.props.data.map((val: { value: number; label: string }, key) => {
                return (
                  <Picker.Item key={key} label={val.value !== -1 ? val.label : `Chọn ${label}`} value={val.value} />
                );
              })}
            </Picker>
          )}
          <View style={{ flex: 1 }} />
          {Platform.OS === 'ios' && (
            <Image source={AppIcon.IconDown} resizeMode={'contain'} style={styles.styIconDown} />
          )}
        </View>
        {disable && <View style={styles.styDisable} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowForm: {
    marginVertical: 10,
    position: 'relative',
  },
  label: {
    color: '#828282',
    marginStart: 5,
    fontSize: 16,
    ...Platform.textBase,
  },
  viewInput: {
    height: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    paddingTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  picker: {
    marginStart: -10,
    color: '#000',
    width: 'auto',
    height: 40,
    ...Platform.textBase,
    minWidth: 50,
  },
  textStyle: {
    color: '#000',
    ...Platform.textBase,
  },
  styDisable: {
    position: 'absolute',
    width: '120%',
    left: -20,
    height: '120%',
    backgroundColor: 'transparent',
  },
  styIconDown: {
    width: 20,
    height: 20,
  },
});
