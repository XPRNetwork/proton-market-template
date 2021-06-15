import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FeaturedSection } from './FeaturedSection';
import customizationJson from '../../custom/customization';
import localizationJson from '../../custom/localization';

export default {
  title: 'Example/FeaturedSection',
  component: FeaturedSection,
} as Meta;

const Template: Story = (args) => <FeaturedSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: customizationJson.featuredSection,
  text: localizationJson['en'],
  // templates: [
  //   {
  //     assetsForSale: '?',
  //     lowestPrice: '? XUSDC',
  //     template_id: '?',
  //     collection: {
  //       collection_name: 'Collection Name',
  //       name: 'Collection Display Name',
  //     },
  //     immutable_data: { name: 'Template Name', image: '', video: '' },
  //   },
  // ],
  templates: [],
};
