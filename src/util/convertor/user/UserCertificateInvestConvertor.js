import _ from 'lodash';

/**
  memName,
  tel,
  juminNum,
  zipcode,
  addr1,
  addr2,
  refundBankCd,
  refundAccntNo,
  investBankCd,
 */

const mapper = new Map();
mapper.set('name', 'memName');
mapper.set('contact', 'tel');

const addrMapper = new Map();
addrMapper.set('postcode', 'zipcode');
addrMapper.set('cityState', 'addr1');
addrMapper.set('detail', 'addr2');

const bankMapper = new Map();
bankMapper.set('virtual', 'investBankCd');
bankMapper.set('code', 'refundBankCd');
bankMapper.set('account', 'refundAccntNo');

function convert(object) {
  let result = {};
  const keys = Object.keys(object);

  _.map(keys, key => {
    if (object[key] instanceof Object) {
      const valueObj = object[key];

      const subKeys = Object.keys(valueObj);
      _.map(subKeys, subKey => {
        if (addrMapper.has(subKey)) {
          result = {
            ...result,
            [addrMapper.get(subKey)]: valueObj[subKey],
          };
        }
        if (bankMapper.has(subKey)) {
          result = {
            ...result,
            [bankMapper.get(subKey)]: valueObj[subKey],
          };
        }
      });
    } else {
      result = { ...result, [mapper.get(key)]: object[key] };
    }
  });

  const { birth, code } = object.userId;
  if (birth !== null && birth.length > 0) {
    result = {
      ...result,
      juminNum: `${birth}${code}`,
    };
  }
  return result;
}

export default {
  convert,
};
