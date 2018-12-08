/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import MultiSelectComposite from '../../src/MultiSelectComposite';
import MultiSelect from '../../src/MultiSelect';
import Label from '../../src/Label';
import { options, valueParser } from '../MultiSelect/ExampleStandard';

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    input: PropTypes.object,
    required: PropTypes.bool,
    info: PropTypes.string,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      options,
      inputValue: '',
    };
  }

  getValue = option =>
    typeof option.value === 'string'
      ? option.value
      : option.value.props.children[0].props.children;

  handleOnSelect = tags =>
    Array.isArray(tags)
      ? this.setState({ tags: [...this.state.tags, ...tags] })
      : this.setState({ tags: [...this.state.tags, tags] });

  handleOnRemoveTag = tagId =>
    this.setState({
      tags: this.state.tags.filter(currTag => currTag.id !== tagId),
    });

  handleOnChange = event => this.setState({ inputValue: event.target.value });

  predicate = option =>
    this.getValue(option)
      .toLowerCase()
      .includes(this.state.inputValue.toLowerCase());

  getComponent() {
    return (
      <MultiSelectComposite
        required={this.props.required}
        info={this.props.info}
      >
        {this.props.withLabel ? (
          <Label for="firstName" {...this.props.label} />
        ) : null}
        <MultiSelect
          tags={this.state.tags}
          onSelect={this.handleOnSelect}
          onRemoveTag={this.handleOnRemoveTag}
          onChange={this.handleOnChange}
          onManuallyInput={() => console.log('NOW')}
          options={this.state.options}
          value={this.state.inputValue}
          predicate={this.predicate}
          valueParser={valueParser}
        />
      </MultiSelectComposite>
    );
  }

  render() {
    return this.getComponent();
  }
}
