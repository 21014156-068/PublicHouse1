import { useState } from 'react';

type Step = 1 | 2 | 3 | 4;

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45',
    '18:30', '18:45', '19:00', '19:15',
    '19:30', '19:45', '20:00', '20:15',
    '20:30', '20:45', '21:00',
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Reservation Confirmed!</h2>
          <p className="text-stone-600 mb-2">
            Thank you, {name}! Your table for {people} {people === 1 ? 'person' : 'people'} on {date} at {time} has been requested.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            We'll send a confirmation to {email}. If you need to modify your reservation, please call us at +352 621 573 723.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Public House</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserve a Table</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Dinner reservations are recommended. Walk-ins are welcome for lunch when space allows.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Guests' },
              { num: 2, label: 'Date & Time' },
              { num: 3, label: 'Details' },
              { num: 4, label: 'Confirm' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s.num ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-500'
                  }`}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span className={`text-xs mt-1 hidden sm:block ${step >= s.num ? 'text-amber-700' : 'text-stone-400'}`}>
                    {s.label}
                  </span>
                </div>
                {i < 3 && (
                  <div className={`w-12 sm:w-20 h-0.5 mx-2 ${step > s.num ? 'bg-amber-600' : 'bg-stone-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Number of People */}
        {step === 1 && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">How many people?</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <button
                  key={num}
                  onClick={() => setPeople(num)}
                  className={`py-3 rounded-lg text-center font-semibold transition-all ${
                    people === num
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            {people > 8 && (
              <p className="text-amber-600 text-sm mb-6">
                For parties larger than 8, please contact us directly at +352 621 573 723.
              </p>
            )}
            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Select Date & Time</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-stone-700 mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      time === slot
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-stone-300 text-stone-700 font-semibold rounded-md hover:bg-stone-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!date || !time}
                className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Your Details</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+352 ..."
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Special Requests</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, dietary requirements, special occasion..."
                  rows={3}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-stone-300 text-stone-700 font-semibold rounded-md hover:bg-stone-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!name || !email}
                className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Review Reservation →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Confirm Your Reservation</h2>
            
            <div className="bg-stone-50 rounded-lg p-6 mb-8 space-y-3">
              <div className="flex justify-between">
                <span className="text-stone-500">Guests</span>
                <span className="text-stone-800 font-medium">{people} {people === 1 ? 'person' : 'people'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Date</span>
                <span className="text-stone-800 font-medium">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Time</span>
                <span className="text-stone-800 font-medium">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Name</span>
                <span className="text-stone-800 font-medium">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Email</span>
                <span className="text-stone-800 font-medium">{email}</span>
              </div>
              {phone && (
                <div className="flex justify-between">
                  <span className="text-stone-500">Phone</span>
                  <span className="text-stone-800 font-medium">{phone}</span>
                </div>
              )}
              {notes && (
                <div className="pt-2 border-t border-stone-200">
                  <span className="text-stone-500 text-sm">Special requests:</span>
                  <p className="text-stone-800 text-sm mt-1">{notes}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 border border-stone-300 text-stone-700 font-semibold rounded-md hover:bg-stone-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors"
              >
                Confirm Reservation
              </button>
            </div>
          </div>
        )}

        {/* Alternative Booking */}
        <div className="mt-8 text-center">
          <p className="text-stone-500 text-sm mb-2">Prefer to book another way?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+352621573723"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:bg-stone-100 transition-colors text-sm"
            >
              📞 Call +352 621 573 723
            </a>
            <a
              href="https://www.resos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:bg-stone-100 transition-colors text-sm"
            >
              🌐 Book via Resos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
