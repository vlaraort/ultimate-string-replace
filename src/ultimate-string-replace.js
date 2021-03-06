import './polyfills/normalize.js';

const addSpacesAccents = str => {
  const array = str.normalize('NFD').split('');
  /* istanbul ignore next: Ternary operators don't work in coverage */
  const regString = [...array]
    .map((e, i) => (i < array.length ? [e, '\\s*[\\u0300-\\u036f]*'] : [e]))
    .reduce((a, b) => a.concat(b))
    .join('');
  return new RegExp(regString, 'gi');
};

/**
 * @param  {} string String with the original value
 * @param  {} matcher string with the letters to replace
 * @param  {} {opts} wrap_sufix and wrap_prefix, the sufix and preffix to append
 */
export default function(string, matcher, opts) {
  if (!string || !matcher || !opts)
    throw new Error('Some parameters are missing');
  let coincidence = false;
  const re = addSpacesAccents(matcher);
  const normalizedString = string.normalize('NFD').replace(re, match => {
    coincidence = true;
    return `${opts.wrap_preffix}${match}${opts.wrap_sufix}`;
  });
  return coincidence ? normalizedString : false;
}
