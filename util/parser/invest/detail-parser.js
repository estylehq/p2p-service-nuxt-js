import listParser from './list-parser';

function parse(object) {
  return {
    ...listParser.parse(object),
    contents: object.fundContentList || [
      {
        title: '등록된 내용이 없습니다.',
        content: '펀드를 소개하는 내용이 기재되어 있지 않습니다.',
      },
    ],
  };
}

export default {
  parse,
};
