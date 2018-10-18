import React from 'react';
import ImageViewer from './ImageViewer';
import ImageViewerDriverFactory from './ImageViewer.driver';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('ImageViewer', () => {
  const createDriver = createDriverFactory(ImageViewerDriverFactory);
  let props, driver;
  const IMAGE_URL = 'some-image-url.png';
  const addImage = jest.fn();
  const updateImage = jest.fn();
  const removeImage = jest.fn();

  describe('when default scenario', () => {
    beforeEach(() => {
      props = {
        imageUrl: IMAGE_URL,
        onAddImage: addImage,
        onUpdateImage: updateImage,
        onRemoveImage: removeImage
      };
      driver = createDriver(<ImageViewer {...props}/>);
    });

    it('should display image url', () => {
      expect(driver.getImageUrl()).toBe(IMAGE_URL);
    });

    it('should trigger update image', () => {
      driver.clickUpdate();
      expect(updateImage).toBeCalled();
    });

    it('should trigger remove image', () => {
      driver.clickRemove();
      expect(removeImage).toBeCalled();
    });

    it('should trigger add image', () => {
      props = {
        imageUrl: '',
        onAddImage: addImage
      };
      driver = createDriver(<ImageViewer {...props}/>);
      driver.clickAdd();
      expect(addImage).toBeCalled();
    });
  });

  it('should not display image if not exists', () => {
    props = {
      imageUrl: ''
    };
    driver = createDriver(<ImageViewer {...props}/>);
    expect(driver.isImageVisible()).toBeFalsy();
  });

  describe('height and width', () => {
    it('should be added to style attribute when image is not present', () => {
      props = {
        imageUrl: '',
        width: 300,
        height: 300
      };
      driver = createDriver(<ImageViewer {...props}/>);
      expect(driver.getContainerStyles()).toEqual('width: 300px; height: 300px;');
    });

    it('should be added to style attribute when image is present', () => {
      props = {
        imageUrl: IMAGE_URL,
        width: 300,
        height: 300
      };
      driver = createDriver(<ImageViewer {...props}/>);
      expect(driver.getContainerStyles()).toEqual('width: 300px; height: 300px;');
    });

    it('should not add style attribute when width and height props are not passed', () => {
      props = {
        imageUrl: IMAGE_URL
      };
      driver = createDriver(<ImageViewer {...props}/>);
      expect(driver.getContainerStyles()).toEqual(null);
    });
  });

  describe('hide or show add image', () => {
    it('should not display AddItem component if image exists', () => {
      props = {
        imageUrl: IMAGE_URL
      };

      driver = createDriver(<ImageViewer {...props}/>);
      expect(driver.isAddItemVisible()).toBeFalsy();
    });

    it('should display AddItem component if image dosnt exists', () => {
      props = {
        imageUrl: ''
      };

      driver = createDriver(<ImageViewer {...props}/>);
      expect(driver.isAddItemVisible()).toBeTruthy();
    });
  });

  describe('tooltips', () => {
    const tooltipProps = {
      relative: true,
      showDelay: 0
    };

    beforeEach(() => {
      document.body.innerHTML = '';
    });

    describe('add image', () => {
      const props = {
        imageUrl: '',
        tooltipProps,
        addImageInfo: 'add image info'
      };

      it('should display provided tooltip content', async () => {
        const driver = createDriver(<ImageViewer {...props}/>);
        expect(await driver.getAddTooltipContent()).toEqual(props.addImageInfo);
      });
    });

    describe('update image', () => {
      const props = {
        imageUrl: IMAGE_URL,
        tooltipProps,
        updateImageInfo: 'update image info'
      };

      it('should display provided tooltip content', async () => {
        const driver = createDriver(<ImageViewer {...props}/>);
        expect(await driver.getUpdateTooltipContent()).toEqual(props.updateImageInfo);
      });
    });

    describe('remove image', () => {
      const props = {
        imageUrl: IMAGE_URL,
        tooltipProps,
        removeImageInfo: 'remove image info'
      };

      it('should display provided tooltip content', async () => {
        const driver = createDriver(<ImageViewer {...props}/>);
        expect(await driver.getRemoveTooltipContent()).toEqual(props.removeImageInfo);
      });
    });

    describe('update button disabled', () => {
      const props = {
        imageUrl: IMAGE_URL,
        showUpdateButton: false
      };

      it('should hide update button', async () => {
        const driver = createDriver(<ImageViewer {...props}/>);
        expect(await driver.updateExists()).toEqual(false);
      });
    });

    describe('error state', () => {
      it('should not display error icon by defualt', () => {
        props = {
          imageUrl: '',
          width: 300,
          height: 300
        };

        driver = createDriver(<ImageViewer {...props}/>);
        expect(driver.isErrorVisible()).toBeFalsy();
      });

      it('should display error icon on error with the correct message', async () => {
        props = {
          imageUrl: '',
          width: 300,
          height: 300,
          error: true,
          errorMessage: 'error message',
          tooltipProps
        };

        driver = createDriver(<ImageViewer {...props}/>);
        expect(await driver.getErrorTooltipContent()).toEqual(props.errorMessage);
      });
    });
  });
});
