/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
  }
  
  /* 大写字母*/
  export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
  }
  
  /* 大小写字母*/
  export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
  }
  // 去除字符串首尾空格
  export function trim(str) {
    if (str) {
      return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
    } else {
      return ''
    }
  }
  
  // 去除字符串中所有空格
  export function trimAll(str) {
    return str.replace(/\s/g, "");
  }