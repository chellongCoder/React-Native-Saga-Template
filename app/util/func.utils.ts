import { Alert, Linking } from 'react-native';

export const convertTimeToAMPM = (time: any) => {
  // Check correct time format and split into components
  var timeString = time;
  var hourEnd = timeString.indexOf(':');
  var H = +timeString.substr(0, hourEnd);
  var h = H % 12 || 12;
  var ampm = H < 12 || H === 24 ? 'AM' : 'PM';
  timeString = h + timeString.substr(hourEnd, 3) + ampm;
  return timeString;
};

export const openCall = (phoneNumber?: string) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

export const choiceItemArray = (arr: any[], choicedItem: any, index: number) => {
  const search = arr.filter((item) => item.name !== choicedItem.name).map((value) => ({ ...value, active: false }));
  const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
  const newArr = insert(search, index, {
    name: choicedItem.name,
    active: !choicedItem.active,
  });
  return newArr;
};

export function getFormattedDate(date: Date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return day + '/' + month + '/' + year;
}

function checkTime(i: number) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export function getFormattedTime(time: Date) {
  var today = new Date(time);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  return h + ':' + m + ':' + s;
}
