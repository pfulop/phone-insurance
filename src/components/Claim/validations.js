export default (vals, props) => {
  if (!vals[props.name] && props.type !== 'boolean') {
    return { [props.name]: 'Required field' };
  }
  if (
    props.type === 'number' &&
    !/[0-9]+[\.\,]{1}[0-9]{2}/.test(vals[props.name])
  ) {
    return { [props.name]: 'Valid format is XXXX.XX' };
  }
  if (
    props.label.indexOf('email') > -1 &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,99}$/i.test(vals[props.name])
  ) {
    return { [props.name]: 'Email is not valid' };
  }

  if (
    props.label.indexOf('contact number') > -1 &&
    !/^\+[0-9]{10,12}$/i.test(vals[props.name].replace(/ /g, ''))
  ) {
    return { [props.name]: 'Allowed number format is +XXX XXX XXX XXX' };
  }
  return {};
};
