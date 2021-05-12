import { UserLoginT } from '../screens/login/types';

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
