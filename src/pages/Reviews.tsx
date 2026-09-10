import { Link } from 'react-router-dom';

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  isLocalGuide?: boolean;
  ownerResponse?: string;
}

const reviews: Review[] = [
  {
    name: 'Erich H.',
    rating: 5,
    date: '1 month ago',
    text: 'Seriously, just go! The quality of the ingredients is outstanding and they prepare everything in ways you wouldn\'t expect. The wine list is wonderfully adventurous — full of interesting bottles you won\'t find elsewhere. A must-visit spot in Luxembourg.',
    isLocalGuide: true,
  },
  {
    name: 'Derek B.',
    rating: 5,
    date: '2 months ago',
    text: 'Stopped by on a Wednesday evening and they managed to find me a table, which I really appreciated. I had the green asparagus and the perch — both were absolutely delicious. Paired it with a Luxembourgish Pinot Gris (who knew Luxembourg made such great wine?). Highly recommend if you\'re in the area.',
    isLocalGuide: true,
    ownerResponse: 'Thank you for stopping by, and glad we could fit you in! Really happy the asparagus, the perch, and the Pinot Gris hit the mark. Hope to see you again next time you\'re in the area!',
  },
  {
    name: 'Fernanda V.',
    rating: 5,
    date: '9 months ago',
    text: 'What an incredible experience! We brought a group of 40 people and they created one single menu for all of us — entirely vegetarian. Every single bite was an explosion of flavors and textures. Each dish felt like an invitation to discover an ingredient from a completely new perspective. Truly memorable.',
    isLocalGuide: true,
  },
  {
    name: 'Sophie M.',
    rating: 5,
    date: '3 months ago',
    text: 'Public House is a gem in the heart of Luxembourg. The degustation menu with wine pairing was exceptional — seasonal ingredients prepared with real skill and creativity. The young chef clearly has a wonderful vision. Thank you to the entire team for an amazing evening.',
    isLocalGuide: true,
  },
  {
    name: 'Marc L.',
    rating: 5,
    date: '4 months ago',
    text: 'The atmosphere is cozy and trendy without being pretentious. The natural wine selection is one of the best in the city — the staff really knows their stuff and can guide you to something perfect. The food is refined but approachable. A real treat.',
    isLocalGuide: true,
  },
  {
    name: 'Anna K.',
    rating: 4,
    date: '5 months ago',
    text: 'Beautiful setting at Casino Luxembourg. The food is creative and well-executed, and the cocktails are excellent. We loved the intimate vibe. Only reason for 4 stars instead of 5 is that service was a bit slow on a busy evening, but the quality of everything else more than made up for it.',
  },
  {
    name: 'Thomas R.',
    rating: 5,
    date: '6 months ago',
    text: 'Best restaurant discovery in Luxembourg this year. The seasonal focus really shows — you can taste the freshness in every dish. The beef tartare is outstanding, and the desserts are creative without being over-the-top. Will definitely be back.',
    isLocalGuide: true,
  },
  {
    name: 'Julia P.',
    rating: 5,
    date: '7 months ago',
    text: 'We celebrated a special occasion here and it was perfect. The team went above and beyond. The wine pairing was spot-on and the flavors were incredible. Such a lovely, welcoming atmosphere. Public House truly lives up to its reputation.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-stone-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Public House</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guest Reviews</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            See what our guests have to say about their experience
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-6xl font-bold text-stone-800">4.7</p>
              <div className="flex justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-500 mt-2">338 reviews on Google</p>
            </div>
            <div className="flex-1 max-w-xs">
              {[
                { stars: 5, percent: 78 },
                { stars: 4, percent: 15 },
                { stars: 3, percent: 4 },
                { stars: 2, percent: 2 },
                { stars: 1, percent: 1 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-stone-500 w-3">{row.stars}</span>
                  <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 bg-stone-200 rounded-full h-2">
                    <div
                      className="bg-amber-400 h-2 rounded-full"
                      style={{ width: `${row.percent}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-stone-400 w-8">{row.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-semibold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{review.name}</p>
                    <div className="flex items-center gap-2">
                      {review.isLocalGuide && (
                        <span className="text-xs text-amber-600 font-medium">Local Guide</span>
                      )}
                      <span className="text-xs text-stone-400">{review.date}</span>
                    </div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-stone-600 leading-relaxed">{review.text}</p>
              {review.ownerResponse && (
                <div className="mt-4 ml-4 pl-4 border-l-2 border-amber-200 bg-amber-50/50 rounded-r-lg p-3">
                  <p className="text-xs font-semibold text-amber-700 mb-1">Response from Public House</p>
                  <p className="text-sm text-stone-600">{review.ownerResponse}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-stone-100 rounded-xl p-8">
          <h3 className="text-xl font-bold text-stone-800 mb-2">Enjoyed your visit?</h3>
          <p className="text-stone-500 mb-4">We'd love to hear from you on Google Maps</p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors"
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
