import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageComponentsAmenityItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_amenity_items';
  info: {
    displayName: 'Amenity_item';
  };
  attributes: {
    amenity_desc: Schema.Attribute.Text;
    amenity_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    amenity_subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsAmenitySection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_amenity_sections';
  info: {
    displayName: 'Amenity_section';
  };
  attributes: {
    amenities_list: Schema.Attribute.Component<
      'homepage-components.amenity-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    amenity_badge: Schema.Attribute.String;
    amenity_bg_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    amenity_category_title: Schema.Attribute.String;
    amenity_main_desc: Schema.Attribute.Text;
    amenity_main_title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsGallerySection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_gallery_sections';
  info: {
    displayName: 'Gallery_section';
  };
  attributes: {
    gallery_badge: Schema.Attribute.String;
    gallery_desc: Schema.Attribute.Text;
    gallery_left_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery_right_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery_title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsIntroFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_intro_features';
  info: {
    displayName: 'Intro_feature';
  };
  attributes: {
    intro_desc: Schema.Attribute.Text;
    intro_subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_intro_sections';
  info: {
    displayName: 'Intro_section';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'homepage-components.intro-feature',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    intro_badge: Schema.Attribute.String;
    intro_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageComponentsLocationFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_location_features';
  info: {
    displayName: 'Location_feature';
  };
  attributes: {
    loc_desc: Schema.Attribute.Text;
    loc_title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsLocationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_location_sections';
  info: {
    displayName: 'Location_section';
  };
  attributes: {
    loc_badge: Schema.Attribute.String;
    loc_description: Schema.Attribute.Text;
    loc_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    loc_title: Schema.Attribute.String;
    locations_list: Schema.Attribute.Component<
      'homepage-components.location-feature',
      true
    >;
  };
}

export interface HomepageComponentsPromiseSection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_promise_sections';
  info: {
    displayName: 'Promise_section';
  };
  attributes: {
    promise_badge: Schema.Attribute.String;
    promise_left_feature_desc: Schema.Attribute.Text;
    promise_left_feature_title: Schema.Attribute.String;
    promise_left_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    promise_right_feature_1_desc: Schema.Attribute.Text;
    promise_right_feature_1_title: Schema.Attribute.String;
    promise_right_feature_2_desc: Schema.Attribute.Text;
    promise_right_feature_2_title: Schema.Attribute.String;
    promise_right_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    promise_title: Schema.Attribute.String;
  };
}

export interface HomepageComponentsSignatureSection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_signature_sections';
  info: {
    displayName: 'Signature_section';
  };
  attributes: {
    sign_badge: Schema.Attribute.String;
    sign_desc1: Schema.Attribute.Text;
    sign_desc2: Schema.Attribute.Text;
    sign_image1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sign_image2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sign_image3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    signature_subtitle: Schema.Attribute.String;
  };
}

export interface HomepageComponentsTestimonialItem
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_testimonial_items';
  info: {
    displayName: 'Testimonial_item';
  };
  attributes: {
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface HomepageComponentsTestimonialSection
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_components_testimonial_sections';
  info: {
    displayName: 'Testimonial_section';
  };
  attributes: {
    testimonial_list: Schema.Attribute.Component<
      'homepage-components.testimonial-item',
      true
    >;
    testimonial_title: Schema.Attribute.String;
  };
}

export interface PageOptimisationSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_optimisation_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    Image: Schema.Attribute.Media<'images'>;
    Keywords: Schema.Attribute.String;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface RoomDetailspageExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_room_detailspage_experience_items';
  info: {
    displayName: 'experience_item';
  };
  attributes: {
    exp_description: Schema.Attribute.Text;
    exp_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    exp_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage-components.amenity-item': HomepageComponentsAmenityItem;
      'homepage-components.amenity-section': HomepageComponentsAmenitySection;
      'homepage-components.gallery-section': HomepageComponentsGallerySection;
      'homepage-components.intro-feature': HomepageComponentsIntroFeature;
      'homepage-components.intro-section': HomepageComponentsIntroSection;
      'homepage-components.location-feature': HomepageComponentsLocationFeature;
      'homepage-components.location-section': HomepageComponentsLocationSection;
      'homepage-components.promise-section': HomepageComponentsPromiseSection;
      'homepage-components.signature-section': HomepageComponentsSignatureSection;
      'homepage-components.testimonial-item': HomepageComponentsTestimonialItem;
      'homepage-components.testimonial-section': HomepageComponentsTestimonialSection;
      'page-optimisation.seo': PageOptimisationSeo;
      'room-detailspage.experience-item': RoomDetailspageExperienceItem;
    }
  }
}
