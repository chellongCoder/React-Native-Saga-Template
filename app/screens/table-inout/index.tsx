import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { CommonHeader, Text } from '../../components';
import { COLORS, CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { useTableInoutStyle } from './styles';
import { Info } from './Info';

const _TableInoutScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useTableInoutStyle();
  const [openMonth, setOpenMonth] = useState(false);
  const [openWeek, setOpenWeek] = useState(false);
  const [value, setValue] = useState<any>('');
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const onMonthOpen = useCallback(() => {
    setOpenWeek(false);
  }, []);

  const onWeekOpen = useCallback(() => {
    setOpenMonth(false);
  }, []);

  return (
    <View style={styles.container}>
      <CommonHeader title={'Bảng chấm công'} isRight={false} />

      <View style={styles.month}>
        <Text fontType="fontBold" color={COLORS.blue} fontSize={Platform.SizeScale(50)}>
          05
        </Text>
      </View>
      <DropDownPicker
        open={openMonth}
        value={value}
        items={items}
        setOpen={setOpenMonth}
        setValue={setValue}
        setItems={setItems}
        onOpen={onMonthOpen}
        // renderListItem={renderListItem}
        containerStyle={{
          width: '60%',
          alignSelf: 'flex-end',
          marginTop: Platform.SizeScale(10),
          ...CommonStyle.shadow,
        }}
        style={{
          backgroundColor: COLORS.lightBlue,
          borderRadius: 0,
          borderWidth: 0,
        }}
        dropDownContainerStyle={{
          backgroundColor: COLORS.RED,
          borderRadius: 0,
          borderWidth: 0,
        }}
        textStyle={{
          fontSize: Platform.SizeScale(20),
          color: COLORS.WHITE,
        }}
        modalContentContainerStyle={{
          backgroundColor: 'red',
        }}
        listItemContainerStyle={{
          backgroundColor: COLORS.WHITE,
        }}
        searchable={true}
        searchTextInputProps={{
          editable: false,
        }}
        addCustomItem={true}
        searchContainerStyle={{
          borderBottomColor: '#dfdfdf',
          backgroundColor: COLORS.WHITE,
        }}
        searchTextInputStyle={{
          color: '#000',
          borderWidth: 0,
        }}
        searchPlaceholder="Vui lòng chọn"
        searchPlaceholderTextColor={COLORS.GRAY}
        listItemLabelStyle={{
          color: COLORS.BLACK,
        }}
        selectedItemLabelStyle={{
          color: COLORS.RED,
        }}
      />
      <View>
        <DropDownPicker
          open={openWeek}
          value={value}
          items={items}
          setOpen={setOpenWeek}
          setValue={setValue}
          setItems={setItems}
          onOpen={onWeekOpen}
          // renderListItem={renderListItem}
          containerStyle={{
            width: '60%',
            alignSelf: 'flex-end',
            marginTop: Platform.SizeScale(10),
            ...CommonStyle.shadow,
          }}
          style={{
            backgroundColor: COLORS.lightBlue,
            borderRadius: 0,
            borderWidth: 0,
          }}
          dropDownContainerStyle={{
            backgroundColor: COLORS.RED,
            borderRadius: 0,
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: Platform.SizeScale(20),
            color: COLORS.WHITE,
          }}
          modalContentContainerStyle={{
            backgroundColor: 'red',
          }}
          listItemContainerStyle={{
            backgroundColor: COLORS.WHITE,
          }}
          searchable={true}
          searchTextInputProps={{
            editable: false,
          }}
          addCustomItem={true}
          searchContainerStyle={{
            borderBottomColor: '#dfdfdf',
            backgroundColor: COLORS.WHITE,
          }}
          searchTextInputStyle={{
            color: '#000',
            borderWidth: 0,
          }}
          searchPlaceholder="Vui lòng chọn"
          searchPlaceholderTextColor={COLORS.GRAY}
          listItemLabelStyle={{
            color: COLORS.BLACK,
          }}
          selectedItemLabelStyle={{
            color: COLORS.RED,
          }}
        />
        <Text>adasdasadasdasdadaas asda sdasdasdadada a sdasd</Text>
        <Info />
      </View>
    </View>
  );
};

export const TableInoutScreen = memo(_TableInoutScreen);
