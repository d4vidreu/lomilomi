/**
 * Central content & settings for the whole website.
 * Every text, price and link lives here so the template is easy to adjust.
 * When migrating to WordPress, each object maps 1:1 to a block, ACF field group
 * or Customizer setting (see notes on each export).
 */

/** Feature flags – switch future modules on once they are implemented. */
export const features = {
  /** Online booking of available time slots (e.g. via Amelia, Bookly, Cal.com). */
  onlineBooking: false,
  /** Selling gift cards online (e.g. via WooCommerce + PW Gift Cards). */
  giftCardShop: false,
}

/** WP: Customizer / Site Identity */
export const site = {
  name: 'Mana Lomi',
  tagline: 'Lomi Lomi Nui Massage',
  description:
    'Traditional Hawaiian Lomi Lomi Nui massage. Flowing, loving touch to release tension, calm the mind and reconnect with yourself.',
  phone: '+49 123 456 789',
  phoneHref: 'tel:+49123456789',
  whatsappHref: 'https://wa.me/49123456789',
  email: 'hello@manalomi.de',
  address: {
    street: 'Gartenstraße 12',
    city: '10115 Berlin',
    mapsHref: 'https://maps.google.com/?q=Gartenstraße+12+Berlin',
  },
  hours: [
    { days: 'Mon – Fri', time: '10:00 – 20:00' },
    { days: 'Saturday', time: '10:00 – 16:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
}

/** WP: Primary menu (Appearance → Menus) */
export const navigation = [
  { label: 'Lomi Lomi', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About me', href: '#therapist' },
  { label: 'Gift cards', href: '#gift-cards' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

/** WP: Hero block */
export const hero = {
  eyebrow: 'Hawaiian Lomi Lomi Nui',
  title: 'Let go. Breathe. Feel the flow.',
  text: 'A deeply relaxing full-body massage with warm oil and long, wave-like strokes – inspired by the ancient healing art of Hawaii.',
  primaryCta: { label: 'Request appointment', href: '#contact' },
  secondaryCta: { label: 'View treatments', href: '#treatments' },
  image: { src: '/images/hero.png', alt: 'Fine white line drawing of flowing ginkgo leaves on sage green' },
  highlights: ['Certified practitioner', 'Organic oils', 'Calm private studio'],
}

/** WP: "About Lomi Lomi" block */
export const about = {
  eyebrow: 'What is Lomi Lomi?',
  title: 'The loving touch of Hawaii',
  text: [
    'Lomi Lomi Nui is a traditional Hawaiian massage. With forearms, hands and gentle stretches, the whole body is treated in flowing movements – like waves of the ocean.',
    'Beyond releasing muscular tension, Lomi Lomi invites deep relaxation, trust and a renewed sense of harmony between body, mind and soul.',
  ],
  benefits: [
    { icon: 'waves', title: 'Deep relaxation', text: 'Calms the nervous system and melts away stress.' },
    { icon: 'heart', title: 'Emotional balance', text: 'Creates space to let go and feel safe in your body.' },
    { icon: 'sparkles', title: 'Renewed energy', text: 'Stimulates circulation and leaves you refreshed.' },
    { icon: 'leaf', title: 'Holistic care', text: 'Treats body, mind and soul as one.' },
  ],
  image: { src: '/images/studio.png', alt: 'Line drawing of a ginkgo leaf inside a hand-drawn circle on terracotta' },
}

/** WP: Custom Post Type "Treatment" (title, duration, price, excerpt, featured flag) */
export const treatments = [
  {
    id: 'lomi-classic',
    name: 'Lomi Lomi Nui Classic',
    duration: '90 min',
    price: '95 €',
    description: 'The traditional full-body ritual with warm oil, flowing forearm strokes and gentle stretches.',
    featured: true,
  },
  {
    id: 'lomi-deep',
    name: 'Lomi Lomi Deep Ritual',
    duration: '120 min',
    price: '125 €',
    description: 'Extended treatment with extra time for arrival, breath work and a relaxing head massage.',
    featured: false,
  },
  {
    id: 'lomi-short',
    name: 'Lomi Lomi Taster',
    duration: '60 min',
    price: '70 €',
    description: 'A shorter introduction focusing on back, shoulders and legs – perfect for your first visit.',
    featured: false,
  },
  {
    id: 'lomi-pregnancy',
    name: 'Mama Lomi',
    duration: '75 min',
    price: '85 €',
    description: 'Gentle Lomi Lomi adapted for pregnancy (from 2nd trimester), in comfortable side position.',
    featured: false,
  },
]

/** WP: "Your visit" steps block */
export const process = {
  eyebrow: 'Your visit',
  title: 'What to expect',
  steps: [
    { title: 'Arrive & settle', text: 'A cup of tea and a short conversation about your needs and wellbeing.' },
    { title: 'The ritual', text: 'You lie on a warm table, covered with soft linen, while the massage flows over your body.' },
    { title: 'Rest & return', text: 'Take your time to rest afterwards and slowly come back – no rush.' },
  ],
}

/** WP: "About me" block */
export const therapist = {
  eyebrow: 'About me',
  name: 'Leilani Weber',
  role: 'Certified Lomi Lomi Nui practitioner',
  text: [
    'Aloha! I discovered Lomi Lomi on a journey to Hawaii more than ten years ago and have been passionate about this beautiful form of touch ever since.',
    'In my calm studio I create a safe space where you can truly let go. Every massage is tailored to you – your body, your needs, your day.',
  ],
  credentials: ['10+ years experience', 'Trained in Hawaii', 'Member of the Lomi Lomi Association'],
  image: { src: '/images/therapist.png', alt: 'Line art of a serene woman with a sun, framed in an oval on rust orange' },
}

/** WP: Testimonials block / Custom Post Type */
export const testimonials = [
  {
    quote: 'I have never felt so relaxed in my life. Leilani has a gift – the whole experience felt like a warm embrace.',
    name: 'Sophie M.',
  },
  {
    quote: 'After months of back pain, this was exactly what I needed. The studio is beautiful and so calming.',
    name: 'Thomas K.',
  },
  {
    quote: 'The Mama Lomi massage was pure bliss during my pregnancy. I felt safe and cared for from the first minute.',
    name: 'Anna R.',
  },
]

/** WP: Gift cards block (later linked to WooCommerce product) */
export const giftCards = {
  eyebrow: 'Gift cards',
  title: 'Give the gift of Aloha',
  text: 'A Lomi Lomi massage is a heartfelt present for birthdays, anniversaries or simply to say thank you. Choose a treatment or a custom amount.',
  shopSoonNote: 'Online gift card shop coming soon – until then, simply get in touch and I will prepare a beautiful voucher for you.',
  options: ['50 €', '95 €', '125 €', 'Custom'],
  image: { src: '/images/gift.png', alt: 'Sand-colored gift voucher with an embossed gold sunburst' },
}

/** WP: FAQ block (e.g. Yoast / Rank Math FAQ block for rich results) */
export const faqs = [
  {
    question: 'What should I wear?',
    answer: 'You will be undressed down to your underwear and always covered with soft linen. Only the area being massaged is uncovered.',
  },
  {
    question: 'Is Lomi Lomi suitable for me?',
    answer: 'Lomi Lomi is suitable for most people. In case of acute illness, fever, skin conditions or recent surgery please contact me beforehand.',
  },
  {
    question: 'How often should I come?',
    answer: 'Many clients enjoy a massage every 3–6 weeks. Listen to your body – even a single session can have a lasting effect.',
  },
  {
    question: 'Can I cancel my appointment?',
    answer: 'Appointments can be cancelled free of charge up to 24 hours in advance. Later cancellations may be charged.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'Cash, EC card and bank transfer. Gift cards can be redeemed for all treatments.',
  },
]

/** WP: Contact block */
export const contact = {
  eyebrow: 'Book your massage',
  title: 'Ready to let go?',
  text: 'Call, send a message on WhatsApp or write an email. I will get back to you within 24 hours to find the perfect time for you.',
  bookingSoonNote: 'Online booking with live time slots is coming soon.',
}
