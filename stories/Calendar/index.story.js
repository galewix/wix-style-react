import React from 'react';
import Calendar from '../../src/Calendar';
import CodeExample from 'wix-storybook-utils/CodeExample';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';
import ExampleStandard from './ExampleStandard';
import ExampleYearMonths from './ExampleYearMonths';
import ExampleYearMonthsRaw from '!raw-loader!./ExampleYearMonths';
import ExampleTooltip from './ExampleTooltip';
import ExampleTooltipRaw from '!raw-loader!./ExampleTooltip';
import { Container, Row, Col } from 'wix-style-react/Grid';

export default {
  category: '3. Inputs',
  storyName: '3.13 Calendar',

  component: Calendar,
  componentPath: '../../src/Calendar',

  componentProps: {
    rtl: false,
    value: new Date('2017/05/01'),
    excludePastDates: true,
    showYearDropdown: false,
    showMonthDropdown: false,
    shouldCloseOnSelect: true,
    locale: 'en',
    dataHook: 'calendar',
  },

  examples: (
    <Container>
      <Row>
        <Col span={4}>
          <CodeExample title="Standard" code={ExampleStandardRaw}>
            <ExampleStandard />
          </CodeExample>
        </Col>
        <Col span={4}>
          <CodeExample
            title="With Years and Months selection"
            code={ExampleYearMonthsRaw}
          >
            <ExampleYearMonths />
          </CodeExample>
        </Col>
        <Col span={4}>
          <CodeExample title="Within a Tooltip" code={ExampleTooltipRaw}>
            <ExampleTooltip />
          </CodeExample>
        </Col>
      </Row>
    </Container>
  ),
};
