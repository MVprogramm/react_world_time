import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))).format('LTS');
};

export default getTimeWithOffset;