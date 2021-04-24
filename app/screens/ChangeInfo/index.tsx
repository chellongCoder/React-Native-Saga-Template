import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import _ from 'lodash';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { AppIcon } from '../../Common/AppIcon';
import { gender } from '../../Common/TextHelper';
import { AppBars, Text } from '../../components';
import { COLORS } from '../../constants';
import CheckBoxIcon from '../../util/CheckBoxIcon';
import TextInputInfo from '../../util/TextInputInfo';
import OptionInput from '../../util/OptionInput';
import { AccountAPI } from '../../services';
import Row from '../../util/Row';
import { Platform } from '../../theme';
import styles from './changeInfo.styles';
import { checkboxGender, district, province } from './types';
interface Props {}

const ChangeInfo = (props: Props) => {
  const navigation = useNavigation();
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [provinceValue, setProvinceValue] = useState('');
  const [districtValue, setDistrictValue] = useState('');
  const [genderValue, setGenderValue] = useState({});

  useEffect(() => {
    getDBListProvince();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const handlerSelect = (value: checkboxGender) => {
    setGenderValue(value);
  };

  const onValueChangeProvince = async (province_id: string) => {
    setProvinceValue(province_id);
    getDBListDistrict(province_id);
  };

  const onValueChangeDistrict = async (value: string) => {
    await setDistrictValue(value);
  };

  const getDBListProvince = async () => {
    const response = await AccountAPI.getListProvince();
    if (!_.isEmpty(response.results)) {
      let { results } = response;
      results = results.map((item: province) => ({
        value: item.province_id,
        label: item.province_name,
      }));
      setListProvince(results);
    }
  };

  const getDBListDistrict = async (province_id: string) => {
    const response = await AccountAPI.getListDistrict(province_id);
    if (!_.isEmpty(response.results)) {
      let { results } = response;
      results = results.map((item: district) => ({
        value: item.district_id,
        label: item.district_name,
      }));
      setListDistrict(results);
    }
  };

  return (
    <View style={styles.contain}>
      <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[0]}>
        <ImageBackground source={AppIcon.HeaderAccount} style={styles.styHeader}>
          <AppBars
            hasRightIcons={false}
            backgroundColor={'transparent'}
            colorIcon={COLORS.WHITE}
            onPressLeft={goBack}
          />
        </ImageBackground>
        <View style={styles.styWrapContent}>
          <RippleButtonAnim containerStyle={styles.styWrapAcc}>
            <View style={styles.styWrapAva}>
              <Image
                source={{ uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }}
                style={styles.styAva}
              />
            </View>
            <Image source={AppIcon.edit_ava} style={styles.styEdit} />
          </RippleButtonAnim>
          <Row>
            <Text style={styles.styTxtLabel}>Giới tính: </Text>
            <CheckBoxIcon selectedValue={genderValue} gender={gender.male} handlerSelect={handlerSelect} />
            <CheckBoxIcon selectedValue={genderValue} gender={gender.female} handlerSelect={handlerSelect} />
            <CheckBoxIcon selectedValue={genderValue} gender={gender.other} handlerSelect={handlerSelect} />
          </Row>
          <TextInputInfo label={'Họ'} placeholder={'Nhập họ'} />
          <TextInputInfo label={'Tên'} placeholder={'Nhập tên đệm và tên'} />
          <TextInputInfo
            label={'Ngày sinh'}
            placeholder={'Nhập ngày sinh'}
            icon={AppIcon.IconDate}
            keyboardType={'numbers-and-punctuation'}
          />
          <TextInputInfo label={'Điện thoại'} placeholder={'Nhập số điện thoại'} keyboardType={'phone-pad'} />
          <TextInputInfo label={'Email'} placeholder={'Nhập email'} />
          <OptionInput
            label={'Tỉnh thành'}
            data={listProvince}
            onValueChange={onValueChangeProvince}
            placeholder={'Tuỳ chọn'}
            selectedValue={provinceValue}
          />
          <OptionInput
            label={'Quận/Huyện'}
            data={listDistrict}
            onValueChange={onValueChangeDistrict}
            placeholder={'Tuỳ chọn'}
            selectedValue={districtValue}
          />

          <RippleButtonAnim>
            <View style={styles.styWrapBtn}>
              <Text style={{ color: COLORS.WHITE }}>Lưu thay đổi</Text>
            </View>
          </RippleButtonAnim>
        </View>
      </ScrollView>
    </View>
  );
};

export default React.memo(ChangeInfo);
