import _ from 'lodash';

const mapper = new Map();
mapper.set('contact', 'tel');
mapper.set('email', 'emailAgree');
mapper.set('sms', 'smsAgree');
mapper.set('postcode', 'zipcode');
mapper.set('cityState', 'addr1');
mapper.set('detail', 'addr2');

function convertMain(object) {
  const keys = Object.keys(object);
  let result = {};
  _.map(keys, key => {
    let value = object[key];
    const convertKey = mapper.get(key);
    if (convertKey.toLowerCase().includes('agree')) {
      value = object[key] ? '01' : '02';
    }
    result = {
      ...result,
      [mapper.get(key)]: value,
    };
  });
  return result;
}

function convert({ contact, subscribes, address }) {
  let result = {};
  if (contact) {
    result = {
      ...result,
      ...convertMain({ contact }),
    };
  }
  if (subscribes) {
    result = {
      ...result,
      ...convertMain(subscribes),
    };
  }
  if (address) {
    result = {
      ...result,
      ...convertMain(address),
    };
  }
  return result;
}

export default {
  convert,
};
