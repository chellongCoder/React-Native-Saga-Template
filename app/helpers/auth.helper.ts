import { UserLoginT } from '../screens/login/types';
import { MasterDateT } from '../types';

export const mapUserLogin = (data: any): UserLoginT => {
  return {
    accessToken: data.access_token,
    avatar: data.user.avatar_original,
    email: data.user.email,
    expiredIn: data.expires_in,
    id: data.user.id,
    name: data.user.name,
    phone: data.user.phone,
    userType: data.user.user_type,
  };
};

export const mapMasterData = (data: any): MasterDateT => {
  return {
    domains: {
      dev: data?.domains?.dev,
      nikkekin: data?.domains?.nikkekin,
      hpv: data?.domains?.hpv,
      bang: data?.domains?.bang,
      hyperion: data?.domains?.hyperion,
      nikkeikin: data?.domains?.nikkeikin,
      demo1: data?.domains?.demo1,
      smg: data?.domains?.dev,
    },
    personGroup: {
      dev: data?.person_group?.dev,
      nikkekin: data?.person_group?.nikkekin,
      hpv: data?.person_group?.hpv,
      bang: data?.person_group?.bang,
      hyperion: data?.person_group?.hyperion,
      nikkeikin: data?.person_group?.nikkeikin,
      demo1: data?.person_group?.demo1,
      smg: data?.person_group?.smg,
    },
    currency: {
      dev: data?.currency?.dev,
      nikkekin: data?.currency?.nikkekin,
      hpv: data?.currency?.hpv,
      bang: data?.currency?.bang,
      hyperion: data?.currency?.hyperion,
      nikkeikin: data?.currency?.nikkeikin,
      demo1: data?.currency?.demo1,
      smg: data?.currency?.smg,
    },
  };
};
