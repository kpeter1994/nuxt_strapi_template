import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_cards';
  info: {
    displayName: 'Services Card';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    taget: Schema.Attribute.Boolean;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlockServices extends Struct.ComponentSchema {
  collectionName: 'components_block_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    service_card: Schema.Attribute.Component<'shared.services-card', true>;
  };
}

export interface BlockHero extends Struct.ComponentSchema {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlockBlog extends Struct.ComponentSchema {
  collectionName: 'components_block_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    button: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface BlockAbout extends Struct.ComponentSchema {
  collectionName: 'components_block_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.services-card': SharedServicesCard;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.link': SharedLink;
      'shared.button': SharedButton;
      'block.services': BlockServices;
      'block.hero': BlockHero;
      'block.blog': BlockBlog;
      'block.about': BlockAbout;
    }
  }
}
