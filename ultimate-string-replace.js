const addSpacesAccents = (str) => {
  const array = [...str.normalize('NFD')];
  //const regString = [...array].map((e, i) => (i < array.length ? [e, '\\s*[\\u0300-\\u036f]*'] : [e])).reduce((a, b) => a.concat(b)).join('');
  const regString = [...array].map((e, i) => (i < array.length ? [e, '\\s*[\\u0300-\\u036f]*'] : [e])).reduce((a, b) => a.concat(b)).join('');

  return new RegExp(regString, 'gi');
};

/**
* @param  {} string String with the original value
* @param  {} matcher string with the letters to replace
* @param  {} {opts} wrap_suffix and wrap_preffix, the suffix and preffix to append
*/
export default function (string, matcher, opts) {
  let coincidence = false;
  const re = addSpacesAccents(matcher);
  const normalizedString = string.normalize('NFD').replace(re, (match) => {
    coincidence = true;
    return `${opts.wrap_preffix}${match}${opts.wrap_suffix}`;
  });

  return coincidence ? normalizedString : false;
}
