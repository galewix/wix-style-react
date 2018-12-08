import React from 'react';
import PropTypes from 'prop-types';
import setMonth from 'date-fns/set_month';

import DatePickerDropdown from '../DatePickerDropdown';

const optionsOf = items =>
  items.map((item, index) => ({ value: item, id: index }));

const MonthDropdown = ({ months, date, onChange }) => {
  const options = optionsOf(months);
  const selectedMonth = options.find(({ id }) => id === date.getMonth());

  return (
    <DatePickerDropdown
      dataHook="datepicker-month-dropdown"
      caption={selectedMonth.value}
      options={options}
      selectedId={selectedMonth.id}
      onChange={({ id }) => onChange(setMonth(date, id))}
    />
  );
};

MonthDropdown.propTypes = {
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MonthDropdown;
