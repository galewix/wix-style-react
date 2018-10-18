import React from 'react';
import {string, array} from 'prop-types';
import LinkTo from '@storybook/addon-links/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TextLink from 'wix-style-react/TextLink';
import ChevronRight from 'wix-style-react/new-icons/ChevronRight';

export const Title = props => (
  <Markdown source={`# ${props.children}`}/>
);
Title.propTypes = {
  children: string
};

export const SubTitle = props => (
  <Markdown source={`## ${props.children}`}/>
);
SubTitle.propTypes = {
  children: string
};

export const StoryLink = props => {
  const {children, ...rest} = props;
  const child = children ? children : (
    <span style={{display: 'flex', alignItems: 'center'}}>
      {props.kind}
      <ChevronRight/>
      {props.story}
    </span>
  );

  return (
    <LinkTo
      {...rest}
      >
      <TextLink>
        {child}
      </TextLink>
    </LinkTo>
  );
};
StoryLink.propTypes = LinkTo.propTypes;


export const IncludedComponents = props => (
  <div>

    <SubTitle>Included Components</SubTitle>
    <lu>
      {
    props.componentNames.map(compName =>
      <li key={compName}>
        <StoryLink
          kind="Components"
          story={compName}
          >
          {`<${compName}/>`}
        </StoryLink>
      </li>
    )
  }
    </lu>
  </div>
);

IncludedComponents.propTypes = {
  componentNames: array
};
