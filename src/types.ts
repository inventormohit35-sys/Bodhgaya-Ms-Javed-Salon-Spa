export type ServiceCategory = 'all' | 'hair' | 'beauty' | 'spa';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beauty' | 'spa';
  categoryLabel: string;
  description: string;
  features: string[];
  image: string;
  duration?: string;
  popular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'beauty' | 'spa' | 'bridal';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  category: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
  youtubeUrl: string;
  youtubeHandle: string;
  mapsDirectionsUrl: string;
  reviewCount: number;
  rating: number;
}
