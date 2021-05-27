export const isExpried = (exp: any, curTime: any) => {
  let time = Number.parseInt(curTime) - Number.parseInt(exp);
  console.log('@timetoken', time);
  // return time >= 300; // need chan
  // true thoi gian hien tai lon hon thoi han token. => token het han.
  // false thoi gian hien tai nho hon thoi gian het han token. => token con han su dung.
  return time >= 0;
};

export const isRefresh = (exp: any, curTime: any, iat: any) => {
  let expNumber = Number.parseInt(exp);
  let curTimeNumber = Number.parseInt(curTime);
  let iatNumber = Number.parseInt(iat);
  return expNumber - curTimeNumber < 300 || curTimeNumber - iatNumber > 14700; // 4h5 -> 5h55
};
