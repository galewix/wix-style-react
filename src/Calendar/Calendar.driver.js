import ReactTestUtils from 'react-dom/test-utils';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const calendarDriverFactory = ({ element, wrapper }) => {
  const getCalendar = () => element.querySelector('.DayPicker');
  const getNthDay = n =>
    element.querySelectorAll(
      '[role="gridcell"]:not([class*="outside"]):not([class*="disabled"])',
    )[n];
  const getSelectedDay = () =>
    element.querySelector('[role="gridcell"][aria-selected=true]');
  const getYearDropdown = () =>
    element.querySelector('[data-hook="datepicker-year-dropdown-button"]');
  const getMonthDropdownButton = () =>
    element.querySelector('[data-hook="datepicker-month-dropdown-button"]');
  const getNthYear = n =>
    element.querySelector(`[data-hook="dropdown-item-${n}"]`);
  const getMonthCaption = () =>
    element.querySelector('[data-hook="datepicker-month-caption"]');
  const getYearCaption = () =>
    element.querySelector('[data-hook="datepicker-year-caption"]');
  const getMonthAndYear = () => [getMonthCaption(), getYearCaption()];
  const getNthWeekDayName = n =>
    element.querySelectorAll('[class="DayPicker-Weekday"] abbr')[n];
  const getPrevMonthButton = () =>
    element.querySelector('[data-hook="datepicker-left-arrow"]');
  const getNextMonthButton = () =>
    element.querySelector('[data-hook="datepicker-right-arrow"]');
  const getFocusedDay = () => wrapper.querySelector('.DayPicker-Day:focus');
  const getVisuallyUnfocusedDay = () =>
    wrapper.querySelector('.DayPicker-Day--unfocused');
  const getMonthContainers = () => wrapper.querySelectorAll('.DayPicker-Month');

  const driver = {
    exists: () => !!element,
    close: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'Escape',
        keyCode: 27,
      }),
    isVisible: () => !!getCalendar(),
    getCurrentMonthWithYear: () =>
      getMonthAndYear()
        ? getMonthAndYear()
            .map(element => element.textContent)
            .join(' ')
        : '',
    getNthWeekDayName: (n = 0) =>
      getNthWeekDayName(n) ? getNthWeekDayName(n).textContent : '',
    clickOnNthDay: (n = 0) =>
      getNthDay(n) && ReactTestUtils.Simulate.click(getNthDay(n)),
    clickOnSelectedDay: () => ReactTestUtils.Simulate.click(getSelectedDay()),
    clickOnYearDropdown: () => ReactTestUtils.Simulate.click(getYearDropdown()),
    clickOnNthYear: (n = 1) => ReactTestUtils.Simulate.mouseDown(getNthYear(n)),
    clickOnPrevMonthButton: () =>
      ReactTestUtils.Simulate.click(getPrevMonthButton()),
    clickOnNextMonthButton: () =>
      ReactTestUtils.Simulate.click(getNextMonthButton()),
    isHeaderVisible: () =>
      !!wrapper.querySelector('[data-hook="datepicker-head"]'),
    isYearDropdownExists: () =>
      !!wrapper.querySelector('[data-hook="datepicker-year-dropdown"]'),
    isYearCaptionExists: () => !!getYearCaption(),
    isMonthDropdownExists: () =>
      !!wrapper.querySelector('[data-hook="datepicker-month-dropdown"]'),
    isMonthCaptionExists: () => !!getMonthCaption(),
    getMonthCaption: () => getMonthCaption().textContent,
    getMonthDropdownLabel: () => getMonthDropdownButton().textContent,
    getSelectedYear: () => getYearDropdown().textContent,
    getFocusedDay: () => getFocusedDay().textContent,
    getFocusedDayElement: () => getFocusedDay(),
    pressLeftArrow: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'ArrowLeft',
        keyCode: 37,
      }),
    pressRightArrow: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'ArrowRight',
        keyCode: 39,
      }),
    getSelectedDay: () => getSelectedDay().textContent,
    getWidth: () => element.style.width,
    triggerKeyDown: params =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), params),
    isFocusedDayVisuallyUnfocused: () =>
      getFocusedDay().classList.contains('DayPicker-Day--unfocused'),
    containsVisuallyUnfocusedDay: () => !!getVisuallyUnfocusedDay(),
    isTwoMonthsLayout: () => getMonthContainers().length === 2,

    getMonthDropdownDriver: () => {
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="datepicker-month-dropdown-button"]'),
      );

      return dropdownLayoutDriverFactory({
        element: wrapper.querySelector(
          '[data-hook="datepicker-month-dropdown-menu"]',
        ),
        wrapper,
      });
    },

    getYearDropdownDriver: () => {
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="datepicker-year-dropdown-button"]'),
      );

      return dropdownLayoutDriverFactory({
        element: wrapper.querySelector(
          '[data-hook="datepicker-year-dropdown-menu"]',
        ),
        wrapper,
      });
    },

    mouseClickOutside: () =>
      document.body.dispatchEvent(new Event('mouseup', { cancelable: true })),
  };

  return driver;
};

export default calendarDriverFactory;
