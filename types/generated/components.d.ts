import type { Schema, Attribute } from '@strapi/strapi';

export interface SizesTshirtSizes extends Schema.Component {
  collectionName: 'components_sizes_tshirt_sizes';
  info: {
    displayName: 'tshirt sizes';
    icon: 'bulletList';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sizes.tshirt-sizes': SizesTshirtSizes;
    }
  }
}
