import React from 'react';
import PropTypes from 'prop-types';
import range from '../../utils/operators/range';
import setYear from 'date-fns/set_year';

import DatePickerDropdown from '../DatePickerDropdown';

const optionsOf = items =>
  items.map((item, index) => ({ value: item, id: index }));

const YearDropdown = ({ date, onChange }) => {
  const year = date.getFullYear();
  const [lowerLimit, upperLimit] = [1899, 2028];
  const years = optionsOf(
    range(year > upperLimit ? year : upperLimit, lowerLimit),
  );

  const selectedYear = years.find(({ value }) => value === year);

  return (
    <DatePickerDropdown
      dataHook="datepicker-year-dropdown"
      caption={selectedYear.value}
      options={years}
      selectedId={selectedYear.id}
      onChange={({ value }) => onChange(setYear(date, value))}
    />
  );
};

YearDropdown.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default YearDropdown;
