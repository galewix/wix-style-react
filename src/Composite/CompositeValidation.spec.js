import React, { Component } from 'react';
import {
  children,
  once,
  any,
  oneOf,
  multiple,
  optional,
} from './CompositeValidation';

const Label = () => null;

class Input extends Component {
  render = () => null;
}

describe('CompositeValidation', () => {
  describe('children()', () => {
    it('should return an error if no rules are passed', () => {
      const validator = children();
      expect(validator({}, 'children', 'TextField')).toEqual(
        new Error(
          'TextField should have at least a single child declaration rule',
        ),
      );
    });

    describe('once()', () => {
      it('should return an error if once() component is missing', () => {
        const validator = children(once(Input));
        expect(validator({ children: [] }, 'children', 'TextField')).toEqual(
          new Error(
            'TextField should have children of the following types in this order: Input (ONCE)',
          ),
        );
      });

      it('should return an error if multiple once components are missing', () => {
        const validator = children(once(Label), once(Input));
        expect(validator({ children: [] }, 'children', 'TextField')).toEqual(
          new Error(
            'TextField should have children of the following types in this order: Label (ONCE), Input (ONCE)',
          ),
        );
      });

      it('should pass if component exists', () => {
        const validator = children(once(Label), once(Input));
        expect(
          validator(
            { children: [<Label key={1} />, <Input key={2} />] },
            'children',
            'TextField',
          ),
        ).toEqual(undefined);
      });
    });

    describe('optional()', () => {
      it('should return an error if optional() component is missing and there are no more rules', () => {
        const validator = children(optional(Label));
        expect(
          validator({ children: [<Input key={1} />] }, 'children', 'TextField'),
        ).toEqual(
          new Error(
            'TextField should have children of the following types in this order: Label (OPTIONAL)',
          ),
        );
      });

      it('should pass if optional() component is missing but another component is present', () => {
        const validator = children(optional(Label), once(Input));
        expect(
          validator({ children: [<Input key={1} />] }, 'children', 'TextField'),
        ).toEqual(undefined);
      });

      it('should pass if optional() component is in the middle', () => {
        const validator = children(once(Label), optional(Input), once(Label));
        expect(
          validator(
            { children: [<Label key={1} />, <Label key={2} />] },
            'children',
            'TextField',
          ),
        ).toEqual(undefined);
      });

      it('should pass if optional() component is the last one', () => {
        const validator = children(once(Input), optional(Label));
        expect(
          validator({ children: [<Input key={1} />] }, 'children', 'TextField'),
        ).toEqual(undefined);
      });
    });

    describe('multiple()', () => {
      it('should return an error if multiple() components are missing', () => {
        const validator = children(multiple(Label));
        expect(validator({ children: [] }, 'children', 'TextField')).toEqual(
          new Error(
            'TextField should have children of the following types in this order: Label (MULTIPLE)',
          ),
        );
      });

      it('should pass if at least one multiple() component exists', () => {
        const validator = children(multiple(Label));
        expect(
          validator({ children: [<Label key={1} />] }, 'children', 'TextField'),
        ).toEqual(undefined);
      });

      it('should pass if several multiple() component exist', () => {
        const validator = children(multiple(Label));
        expect(
          validator(
            { children: [<Label key={1} />, <Label key={2} />] },
            'children',
            'TextField',
          ),
        ).toEqual(undefined);
      });
    });
  });

  describe('any()', () => {
    it('should pass if any() is being used', () => {
      const validator = children(any());
      expect(
        validator(
          { children: [<Label key={1} />, <Input key={2} />] },
          'children',
          'TextField',
        ),
      ).toEqual(undefined);
    });

    it('should pass if any() is being used as last option', () => {
      const validator = children(once(Label), any());
      expect(
        validator(
          { children: [<Label key={1} />, <Input key={2} />] },
          'children',
          'TextField',
        ),
      ).toEqual(undefined);
    });
  });

  describe('oneOf()', () => {
    it('should return an error if oneOf() components are missing', () => {
      const validator = children(oneOf(Input, Label));
      expect(validator({ children: [] }, 'children', 'TextField')).toEqual(
        new Error(
          'TextField should have children of the following types in this order: ONEOF(Input, Label)',
        ),
      );
    });

    it('should return an error if more than one of the oneOf() components is present', () => {
      const validator = children(oneOf(Input, Label));
      expect(
        validator(
          { children: [<Label key={1} />, <Input key={2} />] },
          'children',
          'TextField',
        ),
      ).toEqual(
        new Error(
          'TextField should have children of the following types in this order: ONEOF(Input, Label)',
        ),
      );
    });

    it('should pass if one of the oneOf() components exists', () => {
      const validator = children(oneOf(Input, Label));
      expect(
        validator({ children: [<Label key={1} />] }, 'children', 'TextField'),
      ).toEqual(undefined);
    });
  });
});
