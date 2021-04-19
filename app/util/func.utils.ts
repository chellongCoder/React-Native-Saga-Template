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
