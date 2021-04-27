export type province = {
  province_id: string;
  province_name: string;
  province_type: string;
  key: string;
};

export type district = {
  district_id: string;
  district_name: string;
};

export type checkboxGender = {
  name: string | undefined;
  id: number | undefined;
};

export interface UserInfo {
  name: string;
  birth_date: string;
  phone: string;
  address: string;
  email: string;
}
