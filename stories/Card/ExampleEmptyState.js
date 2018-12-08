import React from 'react';

import Card from 'wix-style-react/Card';
import { Add } from 'wix-style-react/new-icons';
import TextLink from 'wix-style-react/TextLink';
import Button from 'wix-style-react/Button';
import EmptyState from 'wix-style-react/EmptyState';

import ImagePlaceholder from '../assets/ImagePlaceholder';

export default () => (
  <div
    style={{ background: '#F0F4F7', padding: 30, width: '50vw' }}
    data-hook="card-example-empty-state"
  >
    <Card>
      <Card.Header
        title="Card title"
        suffix={
          <Button
            onClick={() => alert('Clicked!')}
            height="small"
            theme="fullblue"
            prefixIcon={<Add />}
            children="New Image"
          />
        }
      />

      <Card.Content>
        <EmptyState
          title="You don't have any images yet"
          subtitle="Start by adding new images to your album"
          image={<ImagePlaceholder />}
          children={<TextLink prefixIcon={<Add />}>Add image</TextLink>}
        />
      </Card.Content>
    </Card>
  </div>
);
