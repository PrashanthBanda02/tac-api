import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    companyLogo: Attribute.Media<'images'>;
    comapanyName: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'tech.at.core'>;
    aboutUsNavButton: Attribute.Component<'elements.nav-button-link'>;
    servicesNavButton: Attribute.Component<'elements.nav-button-link'>;
    careersNavButton: Attribute.Component<'elements.nav-button-link'>;
    blogsNavButton: Attribute.Component<'elements.nav-button-link'>;
    caseStudiesNavButton: Attribute.Component<'elements.nav-button-link'>;
    tacLogoUrl: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsNavButtonLink extends Schema.Component {
  collectionName: 'components_elements_nav_button_links';
  info: {
    displayName: 'nav-button-link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    backgroundColor: Attribute.Enumeration<['black', 'blue', 'white']> &
      Attribute.Required &
      Attribute.DefaultTo<'black'>;
    border: Attribute.String & Attribute.DefaultTo<'none'>;
    borderRadius: Attribute.String & Attribute.DefaultTo<'none'>;
    textColor: Attribute.Enumeration<['white', 'black']> &
      Attribute.Required &
      Attribute.DefaultTo<'white'>;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.header': BlocksHeader;
      'elements.nav-button-link': ElementsNavButtonLink;
    }
  }
}
