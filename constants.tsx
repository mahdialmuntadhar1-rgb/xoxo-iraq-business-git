import React from 'react';
import type { Story, Category, Business, Event, Deal, User, HeroSlide } from './types';
import {
  Coffee, Utensils, ShoppingBag, Bed, Film, Music, Palette, Dumbbell, Plane,
  Sparkles, Check, Crown, Star, MapPin, Clock, Users, Tag, Plus, Briefcase,
  ShieldCheck, Accessibility, Ear, Eye, Baby, Users2, Languages, Heart,
} from './components/icons';

export const t = (key: string, _options?: object): string => {
    const translation = key.split('.').pop()?.replace(/_/g, ' ') || key;
    return translation.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Discover Amazing Events',
    subtitle: 'From music festivals to art exhibitions, find your next experience.',
    image: 'https://picsum.photos/seed/h1/1920/1080',
  },
  {
    id: 2,
    title: 'Explore Local Businesses',
    subtitle: 'Find the best restaurants, hotels, and shops in your city.',
    image: 'https://picsum.photos/seed/h2/1920/1080',
  },
  {
    id: 3,
    title: 'Your Compass to Iraq',
    subtitle: 'Unveiling the vibrant culture and hidden gems of Iraq.',
    image: 'https://picsum.photos/seed/h3/1920/1080',
  },
];

export const mockUser: User = {
    name: "Ali Hassan",
    email: "ali.hassan@example.com",
    avatar: "https://picsum.photos/seed/user1/80/80"
};

export const stories: Story[] = [
  { id: 1, avatar: 'https://picsum.photos/seed/1/80/80', name: 'Baghdad Events', verified: true, thumbnail: 'https://picsum.photos/seed/s1/360/640', userName: 'Baghdad Events', type: 'business', isLive: true, timeAgo: '2h ago', media: ['https://picsum.photos/seed/s1/360/640']},
  { id: 2, avatar: 'https://picsum.photos/seed/2/80/80', name: 'Erbil Foodies', viewed: true, thumbnail: 'https://picsum.photos/seed/s2/360/640', userName: 'Erbil Foodies', type: 'community', aiVerified: true, timeAgo: '5h ago', media: ['https://picsum.photos/seed/s2/360/640']},
  { id: 3, avatar: 'https://picsum.photos/seed/3/80/80', name: 'Basra Nights', thumbnail: 'https://picsum.photos/seed/s3/360/640', userName: 'Basra Nights', type: 'community', timeAgo: '1d ago', media: ['https://picsum.photos/seed/s3/360/640']},
  { id: 4, avatar: 'https://picsum.photos/seed/4/80/80', name: 'Kurdistan Travel', verified: true, thumbnail: 'https://picsum.photos/seed/s4/360/640', userName: 'Kurdistan Travel', type: 'business', timeAgo: '3d ago', media: ['https://picsum.photos/seed/s4/360/640']},
  { id: 5, avatar: 'https://picsum.photos/seed/5/80/80', name: 'Mosul Heritage', viewed: true, thumbnail: 'https://picsum.photos/seed/s5/360/640', userName: 'Mosul Heritage', type: 'community', timeAgo: '5d ago', media: ['https://picsum.photos/seed/s5/360/640']},
  { id: 6, avatar: 'https://picsum.photos/seed/6/80/80', name: 'Najaf Guide', thumbnail: 'https://picsum.photos/seed/s6/360/640', userName: 'Najaf Guide', type: 'business', aiVerified: true, timeAgo: '1w ago', media: ['https://picsum.photos/seed/s6/360/640']},
];

export const categories: Category[] = [
  { id: 'food', icon: <Utensils />, nameKey: 'categories.restaurants', eventCount: 128, recommended: true, subcategories: [{id: 'cafe', icon: <Coffee/>, nameKey: 'categories.cafes', count: 45}, {id: 'fastfood', icon: '🍔', nameKey: 'categories.fast_food', count: 83}] },
  { id: 'shopping', icon: <ShoppingBag />, nameKey: 'categories.shopping', eventCount: 94 },
  { id: 'hotels', icon: <Bed />, nameKey: 'categories.hotels', eventCount: 45 },
  { id: 'entertainment', icon: <Film />, nameKey: 'categories.entertainment', eventCount: 212, recommended: true, subcategories: [{id: 'cinema', icon: '🎬', nameKey: 'categories.cinema', count: 20}, {id: 'concert', icon: '🎤', nameKey: 'categories.concerts', count: 12}]},
  { id: 'music', icon: <Music />, nameKey: 'categories.music_events', eventCount: 34 },
  { id: 'art', icon: <Palette />, nameKey: 'categories.art_culture', eventCount: 56 },
  { id: 'sports', icon: <Dumbbell />, nameKey: 'categories.sports_fitness', eventCount: 72 },
  { id: 'travel', icon: <Plane />, nameKey: 'categories.travel_tourism', eventCount: 18, subcategories: [{id: 'tours', icon: '🗺️', nameKey: 'categories.city_tours', count: 8}] },
  { id: 'community', icon: <Users />, nameKey: 'categories.community', eventCount: 150 },
];

export const businesses: Business[] = [
    { id: 1, name: "Grand Millennium", coverImage: "https://picsum.photos/seed/b1/320/192", isPremium: true, category: 'hotels', rating: 4.8, distance: 2.5, status: "Open", image: "https://picsum.photos/seed/b1/320/192", verified: true, reviews: 120 },
    { id: 2, name: "Saj Al-Reef", coverImage: "https://picsum.photos/seed/b2/320/192", category: 'restaurants', rating: 4.5, distance: 1.2, status: "Closing Soon", image: "https://picsum.photos/seed/b2/320/192", verified: true, reviews: 340 },
    { id: 3, name: "Baghdad Mall", coverImage: "https://picsum.photos/seed/b3/320/192", isPremium: true, category: 'shopping', rating: 4.6, distance: 5.1, status: "Open", image: "https://picsum.photos/seed/b3/320/192", verified: false, reviews: 560 },
    { id: 4, name: "Divan Erbil", coverImage: "https://picsum.photos/seed/b4/320/192", category: 'hotels', rating: 4.9, distance: 10.4, status: "Open", image: "https://picsum.photos/seed/b4/320/192", verified: true, reviews: 410 },
];

export const events: Event[] = [
    { id: 1, image: 'https://picsum.photos/seed/e1/400/224', title: "Baghdad International Music Festival", aiRecommended: true, date: new Date(new Date().setDate(new Date().getDate() + 3)), venue: "National Theatre", attendees: 1200, price: 25000 },
    { id: 2, image: 'https://picsum.photos/seed/e2/400/224', title: "Erbil Tech Summit 2024", date: new Date(new Date().setDate(new Date().getDate() + 10)), venue: "Saad Abdullah Palace", attendees: 800, price: 0 },
    { id: 3, image: 'https://picsum.photos/seed/e3/400/224', title: "Art Exhibition by Local Artists", aiRecommended: true, date: new Date(new Date().setDate(new Date().getDate() + 5)), venue: "Baghdad Gallery", attendees: 350, price: 5000 },
    { id: 4, image: 'https://picsum.photos/seed/e4/400/224', title: "Traditional Kurdish Food Fair", date: new Date(new Date().setDate(new Date().getDate() + 7)), venue: "Sami Abdulrahman Park", attendees: 2500, price: 0 },
];

export const deals: Deal[] = [
    { id: 1, discount: 50, businessLogo: "https://picsum.photos/seed/d1/64/64", title: "50% Off Your Second Meal", description: "Buy one main course, get the second 50% off.", expiresIn: "3 days", claimed: 45, total: 100 },
    { id: 2, discount: 25, businessLogo: "https://picsum.photos/seed/d2/64/64", title: "25% Off All Electronics", description: "Flash sale on all electronic items.", expiresIn: "24 hours", claimed: 120, total: 200 },
    { id: 3, discount: 15, businessLogo: "https://picsum.photos/seed/d3/64/64", title: "15% Student Discount", description: "Show your student ID for 15% off.", expiresIn: "1 month", claimed: 88, total: 500 },
];

export const inclusiveFeaturesList = [
    { icon: <Accessibility className="w-8 h-8" />, key: 'wheelchair', color: 'primary' },
    { icon: <Ear className="w-8 h-8" />, key: 'hearing', color: 'secondary' },
    { icon: <Eye className="w-8 h-8" />, key: 'visual', color: 'accent' },
    { icon: <Baby className="w-8 h-8" />, key: 'family', color: 'primary' },
    { icon: <Users2 className="w-8 h-8" />, key: 'women', color: 'secondary' },
    { icon: <Languages className="w-8 h-8" />, key: 'multilingual', color: 'accent' },
    { icon: <Heart className="w-8 h-8" />, key: 'sensory', color: 'primary' },
    { icon: <ShieldCheck className="w-8 h-8" />, key: 'safe', color: 'secondary' }
];

export const format = (date: Date, formatStr: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  switch (formatStr) {
    case 'd':
      return date.getDate().toString();
    case 'MMM':
      return months[date.getMonth()];
    case 'h:mm a':
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutesStr} ${ampm}`;
    default:
      return date.toString();
  }
};
