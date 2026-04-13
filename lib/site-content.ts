import type {Locale} from './i18n';

type Card = {title: string; description: string; image?: string};
type QA = {q: string; a: string};

type LocaleContent = {
  seo: {title: string; description: string};
  nav: {home: string; rooms: string; dining: string; offers: string; contact: string};
  hero: {title: string; subtitle: string; cta: string};
  highlights: Card[];
  rooms: Card[];
  dining: Card[];
  offers: Card[];
  testimonials: {name: string; quote: string}[];
  faq: QA[];
  contact: {address: string; phone: string; email: string};
};

const images = {
  hero: 'https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63f4a8ae5b2a7.jpg/1920x1080/fit/80/56237d7fcb31ad2018653f52d2151f28.jpg',
  sunset: 'https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63ec643fe5bd4.jpg/1920x1080/fit/80/56b4fd6db0179f9b96d5fa1278fd4e3b.jpg',
  night: 'https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63ec64604165d.jpg/1920x1080/fit/80/75f3f99f72146f8ecf34682785630db6.jpg',
  lobby: 'https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/imagepool/63e37821208ab.JPG'
};

const content: Record<Locale, LocaleContent> = {
  vi: {
    seo: {
      title: 'InterContinental Hanoi Westlake | Khách sạn sang trọng nổi trên hồ Tây',
      description: 'Trải nghiệm nghỉ dưỡng chuẩn quốc tế tại InterContinental Hanoi Westlake với phòng nghỉ cao cấp, ẩm thực tinh tế và không gian sự kiện đẳng cấp.'
    },
    nav: {home: 'Trang chủ', rooms: 'Phòng nghỉ', dining: 'Ẩm thực', offers: 'Ưu đãi', contact: 'Liên hệ'},
    hero: {
      title: 'Khách sạn độc đáo nổi trên mặt hồ tại Hà Nội',
      subtitle:
        'Tọa lạc tại số 5 Từ Hoa, quận Tây Hồ, InterContinental Hanoi Westlake mang đến trải nghiệm bình yên cạnh hồ, chỉ cách trung tâm thành phố vài phút di chuyển.',
      cta: 'Đặt phòng ngay'
    },
    highlights: [
      {title: 'Vị trí biểu tượng bên hồ Tây', description: 'Không gian nghỉ dưỡng riêng tư ngay giữa lòng thủ đô, gần chùa Kim Liên hơn 800 năm tuổi.', image: images.hero},
      {title: 'Sunset Bar độc bản', description: 'Quầy bar nổi trên hồ với tầm nhìn hoàng hôn biểu tượng của Hà Nội.', image: images.sunset},
      {title: 'Sự kiện & tiệc cưới cao cấp', description: 'Đội ngũ chuyên nghiệp đồng hành từ hội nghị doanh nghiệp đến lễ cưới sang trọng.', image: images.lobby}
    ],
    rooms: [
      {title: 'King Bed Classic Lake View', description: 'Phòng 43m² với ban công riêng nhìn hồ Tây, phù hợp nghỉ dưỡng và công tác.'},
      {title: 'Twin Bed Classic Overwater Lake View', description: 'Thiết kế nổi trên mặt nước, không gian yên tĩnh cho kỳ nghỉ tái tạo năng lượng.'},
      {title: '1 King 1 Bedroom Suite Lake View', description: 'Diện tích 80–86m², tách biệt không gian sinh hoạt, nâng tầm trải nghiệm cao cấp.'}
    ],
    dining: [
      {title: 'Sunset Bar', description: 'Cocktail sáng tạo, trà chiều và tầm nhìn hoàng hôn lãng mạn bên hồ Tây.'},
      {title: 'Café du Lac', description: 'Ẩm thực quốc tế lấy cảm hứng Pháp, phù hợp cả gia đình và khách doanh nhân.'},
      {title: 'Milan Restaurant', description: 'Tinh hoa ẩm thực Ý truyền thống trong không gian fine dining hiện đại.'},
      {title: 'Saigon Restaurant', description: 'Món Việt đương đại với nguyên liệu bản địa và khu bếp mở ấn tượng.'}
    ],
    offers: [
      {title: 'Đại tiệc Buffet Di sản', description: 'Hành trình vị giác Việt Nam với thực đơn đa dạng theo mùa.'},
      {title: 'Gói Cầu Hôn Say Yes at Sunset', description: 'Không gian riêng tư lãng mạn dành cho khoảnh khắc đặc biệt.'},
      {title: 'Ưu đãi lưu trú theo mùa', description: 'Ưu đãi phòng nghỉ kết hợp ẩm thực và dịch vụ trải nghiệm.'}
    ],
    testimonials: [
      {name: 'Du khách quốc tế', quote: 'Khung cảnh hồ Tây lúc hoàng hôn thật sự đáng nhớ, dịch vụ tinh tế và nhất quán.'},
      {name: 'Khách doanh nhân', quote: 'Không gian yên tĩnh nhưng vẫn gần trung tâm, rất phù hợp cho lịch trình công tác.'}
    ],
    faq: [
      {q: 'Khách sạn có gần trung tâm Hà Nội không?', a: 'Có. Từ khách sạn, bạn có thể đến khu trung tâm chỉ trong vài phút bằng taxi.'},
      {q: 'Có hỗ trợ tổ chức hội nghị và tiệc cưới không?', a: 'Có. Khách sạn có không gian sự kiện chuyên biệt và đội ngũ hỗ trợ trọn gói.'},
      {q: 'Làm sao để nhận giá tốt nhất?', a: 'Bạn nên đặt trực tiếp qua website hoặc hotline +84 24 6270 8888 để nhận ưu đãi mới nhất.'}
    ],
    contact: {
      address: 'Số 5 Từ Hoa, Tây Hồ, Hà Nội, Việt Nam',
      phone: '+84 24 6270 8888',
      email: 'reservations.icwestlake@ihg.com'
    }
  },
  en: {
    seo: {
      title: 'InterContinental Hanoi Westlake | Iconic Overwater Luxury in Hanoi',
      description: 'Stay at InterContinental Hanoi Westlake for premium rooms, destination dining, and elegant event experiences by West Lake.'
    },
    nav: {home: 'Home', rooms: 'Rooms', dining: 'Dining', offers: 'Offers', contact: 'Contact'},
    hero: {
      title: 'An iconic overwater luxury hotel in Hanoi',
      subtitle:
        'Located at 5 Tu Hoa Street, Tay Ho District, the resort combines serene lakeside living with quick access to Hanoi city center.',
      cta: 'Book now'
    },
    highlights: [
      {title: 'Landmark West Lake setting', description: 'A calm waterfront retreat in Hanoi, near the historic Kim Lien Pagoda.', image: images.hero},
      {title: 'Signature Sunset Bar', description: 'A one-of-a-kind overwater bar for sunset cocktails and romantic evenings.', image: images.sunset},
      {title: 'Luxury events & weddings', description: 'Professional support for executive meetings, destination weddings, and private celebrations.', image: images.lobby}
    ],
    rooms: [
      {title: 'King Bed Classic Lake View', description: '43 sqm with private balcony and scenic lake views for leisure or business stays.'},
      {title: 'Twin Bed Classic Overwater Lake View', description: 'A tranquil overwater layout designed for restorative escapes.'},
      {title: '1 King 1 Bedroom Suite Lake View', description: '80–86 sqm suite with separate living area for elevated comfort.'}
    ],
    dining: [
      {title: 'Sunset Bar', description: 'Craft cocktails, afternoon tea, and panoramic sunset moments over West Lake.'},
      {title: 'Café du Lac', description: 'French-inspired all-day dining with international selections.'},
      {title: 'Milan Restaurant', description: 'Classic Italian cuisine in a modern fine-dining atmosphere.'},
      {title: 'Saigon Restaurant', description: 'Contemporary Vietnamese flavors with an immersive open-kitchen concept.'}
    ],
    offers: [
      {title: 'Heritage Buffet Experience', description: 'A seasonal culinary journey celebrating Vietnamese regional flavors.'},
      {title: 'Say Yes at Sunset Proposal Package', description: 'A private romantic setup for unforgettable moments.'},
      {title: 'Seasonal Stay Packages', description: 'Curated room, dining, and experience bundles for value-focused luxury.'}
    ],
    testimonials: [
      {name: 'International traveler', quote: 'The sunset views over West Lake are exceptional, and service quality is consistently premium.'},
      {name: 'Corporate guest', quote: 'Peaceful atmosphere with easy access to downtown Hanoi—perfect for business travel.'}
    ],
    faq: [
      {q: 'How far is the hotel from central Hanoi?', a: 'The property is only a short taxi ride from Hanoi’s central districts.'},
      {q: 'Do you support meetings and weddings?', a: 'Yes. Dedicated venues and planning teams are available for both corporate and social events.'},
      {q: 'How can I get the best rates?', a: 'Book directly on the website or via +84 24 6270 8888 for the latest offers.'}
    ],
    contact: {
      address: '5 Tu Hoa Street, Tay Ho District, Hanoi, Vietnam',
      phone: '+84 24 6270 8888',
      email: 'reservations.icwestlake@ihg.com'
    }
  }
};

export function getSiteContent(locale: Locale) {
  return content[locale];
}

export const hotelImages = images;
