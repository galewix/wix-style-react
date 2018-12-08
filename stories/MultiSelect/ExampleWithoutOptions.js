/* eslint-disable no-console */
import React from 'react';
import MultiSelect from 'wix-style-react/MultiSelect';
import styles from './ExampleStandard.scss';

const valueParser = option => (option.tag ? option.tag.label : option.value);

class ExampleWithoutOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      tags: [],
    };
  }

  getValue = option =>
    typeof option.value === 'string'
      ? option.value
      : option.value.props.children[0].props.children;

  handleOnSelect = tags =>
    this.setState({ tags: [...this.state.tags, ...tags] });

  handleOnRemoveTag = tagId =>
    this.setState({
      tags: this.state.tags.filter(currTag => currTag.id !== tagId),
    });

  handleOnChange = event => this.setState({ inputValue: event.target.value });

  predicate = option =>
    this.getValue(option)
      .toLowerCase()
      .includes(this.state.inputValue.toLowerCase());

  render() {
    return (
      <div>
        <div className={styles.main}>
          <MultiSelect
            error
            errorMessage={'This is an error message'}
            tags={this.state.tags}
            onSelect={this.handleOnSelect}
            onRemoveTag={this.handleOnRemoveTag}
            onChange={this.handleOnChange}
            onManuallyInput={() => console.log('NOW')}
            value={this.state.inputValue}
            predicate={this.predicate}
            valueParser={valueParser}
          />
        </div>
      </div>
    );
  }
}

export default ExampleWithoutOptions;
