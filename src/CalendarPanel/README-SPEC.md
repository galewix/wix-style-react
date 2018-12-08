# `<CalendarPanel/>` Specification

## Intro

CalendarPanel, is a basically `<Calendar/>` component with "peripherials" of:

- a sidebar with presets
- footer with "Cancel", "Submit" buttons

It may appear as a standalone component (probably in a Modal), a generic popover content, or as part of the `<DatePicker/>` or `<DateRangePicker/>`.

## Usage Example

```js
import React from 'react';

import CalendarPanel, {CalendarPanelFooter} from '../../src/CalendarPanel';
import Card from '../../src/Card';

import {TODAY, YESTERDAY, NEXT_WEEK, A_WEEK_AGO, ONE_MONTH_AGO, TWO_MONTH_AGO} from './dateUtils';

function translate(text) {
  return text; // TODO: Use real translation
}

const presets = [
  {id: 1, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 2, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 3, value: 'Last 7 days', selectedDays: {from: A_WEEK_AGO, to: TODAY}},
  {id: 4, value: 'Next 7 days', selectedDays: {from: TODAY, to: NEXT_WEEK}},
  {id: 5, value: 'A month (2 month ago)', selectedDays: {from: TWO_MONTH_AGO, to: ONE_MONTH_AGO}, month: TWO_MONTH_AGO}
];

export default class CalendarPanelCustomExample extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: TODAY},
    month: TODAY
  }

  render() {
    const calendarProps = {
      selectionMode: 'range',
      numOfMonths: 2, // This is the default
      selectedDays: this.state.selectedDays,
      month: this.state.month,
      onSelectedDaysChange={(selectedDays)=> this.setState({selectedDays})}
      onMonth={(month)=> this.setState({month}))}
    }

    const renderFooter = ({submitDisabled}) => {
      return (
        <CalendarPanelFooter
          submitDisabled={submitDisabled}
          selectedDaysText={this.state.selectedDays.toLocaleDateString()}
          onCancel={() => alert('Cancel was clicked')}
          cancelText={translate('Cancel')}
          onSubmit={() => alert(`submit - ${this.state.selectedDays}`)}
          submitText={translate('Submit')}
          />
      )
    }

    return (
      <Card>
        <CalendarPanel
          presets={presets}
          calendarProps={calendarProps}
          footer={renderFooter}
          />
      </Card>
    );
  }
}
```

### Things to notice about `<CalendarPanel/>` in the example

- It is controlled component.
- It has no border styling (it is wrapped in a `<Card/>` in this example).
- `calendarProps.selectionMode` is used internally in order to decide the value of `submitDisabled`.
- `<CalendarPanelFooter/>` is an optional component to simplify the API. Consumers can render anything as the footer.

## `<CalendarPanel/>` Props

| propName          | propType | defaultValue | isRequired | description |
| ---               | ---      | ---          | ---        | ---         |
| presets           | array    | -            | -          | Array of calendar preset, as Dropdown option objects. Each item (which is not a divider) must have `selectedDays` props. `month` prop is optional |
| calendarProps     | object | | | props for `<Calendar/>`. |
| footer            | ()=>node | | | a node to be rendered in the footer pane. |

## Rational

### `presets`

Ideally this would be a `<List/>` with `<ListItems/>` snippet (render slot),
but there are a few ugly edge-cases in DropdownLayout API that we want hide.

### `calendarProps`

- we need to use `selectionMode` in order to decide the value of `submitDisabled` (which is passes to the footer).

Alternatives:

  - Lift all `<Calendar/>`'s props to `<ClendarPanel/>`.
    - This is wrong, since `<CalendarPanel/>` does not "extend" `<Calendar/>` is only composes it. 
    - It would create a flat API which is mixed with the presets API.

  - Have a `body` prop (render slot), which receives a `<Calendar/>` node. We could then look into it's props to get the `selectedMode`.
    - This looks a bit more like magic.
    - Need to add validation so that consumer get error if they render something other than a `<Calendar/>` node.
    - Might be inefficient (React.cloneElement)

### `footer`

- The footer is actually a one-way state flow (into the footer).
- Anyway there is need of translation of the buttons and the selectedDays text.
- The layout is set by UX, but it is flexible. So UX layout is only a recommendation.
- By makeing is a renderProp with `submitDisabled` argument, we allow to simplify the consumers custom solution if needed.

Aletrnatives:

 - A snippet, using Toolbar.
   - The consumer can still use Toolbar directly, and render any kind of buttons, it is very simple.