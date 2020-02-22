const customMutiParams = value => Object.keys(value)
  .map(k => (
    Array.isArray(value[k]) && value[k].length > 0
      ? `${k}:${value[k].join(',')}`
      : `${k}:${value[k]}`
  ))
  .join('!');

export function encodeUrlParams(params) {
  return Object.keys(params)
    .filter((prop) => {
      const value = params[prop];
      return value !== undefined && value !== null && value !== '';
    })
    .map((prop) => {
      let value = params[prop];
      if (typeof value === 'object') {
        value = customMutiParams(value);
      }
      return [prop, value];
    })
    .filter(([, value]) => value !== '' && value !== undefined)
    .map(v => v.map(encodeURIComponent).join('='))
    .join('&');
}

export default encodeUrlParams;