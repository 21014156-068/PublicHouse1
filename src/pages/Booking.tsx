import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30"
          >
            <svg className="w-12 h-12 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Reservation Confirmed!</h2>
          <p className="text-stone-300 mb-2 text-lg">
            Thank you, {name}! Your table for {people} {people === 1 ? 'person' : 'people'} on {date} at {time} has been requested.
          </p>
          <p className="text-stone-400 text-sm mb-8">
            We'll send a confirmation to {email}. If you need to modify your reservation, please call us at +352 621 573 723.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4 font-medium">Public House</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reserve a Table
            </h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
              Dinner reservations are recommended. Walk-ins are welcome for lunch when space allows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="relative -mt-8 mb-12">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-stone-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: 'Guests', icon: '👥' },
                { num: 2, label: 'Date & Time', icon: '📅' },
                { num: 3, label: 'Details', icon: '📝' },
                { num: 4, label: 'Confirm', icon: '✓' },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: step === s.num ? 1.1 : 1,
                        backgroundColor: step >= s.num ? 'rgb(245, 158, 11)' : 'rgb(68, 64, 60)',
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg"
                    >
                      {step > s.num ? (
                        <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className={step >= s.num ? 'text-stone-900' : 'text-stone-400'}>{s.icon}</span>
                      )}
                    </motion.div>
                    <span className={`text-xs mt-2 font-medium ${step >= s.num ? 'text-amber-400' : 'text-stone-500'}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="flex-1 h-0.5 mx-3 bg-stone-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: step > s.num ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                      ></motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          {/* Step 1: Number of People */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>How many people?</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPeople(num)}
                    className={`py-4 rounded-xl text-center font-bold text-lg transition-all ${
                      people === num
                        ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>
              {people > 8 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-amber-400 text-sm mb-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4"
                >
                  For parties larger than 8, please contact us directly at +352 621 573 723.
                </motion.p>
              )}
              <button
                onClick={() => setStep(2)}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Select Date & Time</h2>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold text-stone-300 mb-3 uppercase tracking-wider">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-stone-300 mb-3 uppercase tracking-wider">Preferred Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <motion.button
                      key={slot}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setTime(slot)}
                      className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                        time === slot
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 shadow-lg shadow-amber-500/20'
                          : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/5 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!date || !time}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Your Details</h2>
              
              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2 uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+352 ..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2 uppercase tracking-wider">Special Requests</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Allergies, dietary requirements, special occasion..."
                    rows={3}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-4 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/5 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!name || !email}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Review Reservation →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Confirm Your Reservation</h2>
              
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 mb-8 space-y-4">
                {[
                  { label: 'Guests', value: `${people} ${people === 1 ? 'person' : 'people'}` },
                  { label: 'Date', value: date },
                  { label: 'Time', value: time },
                  { label: 'Name', value: name },
                  { label: 'Email', value: email },
                  ...(phone ? [{ label: 'Phone', value: phone }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-stone-400 text-sm">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
                {notes && (
                  <div className="pt-3">
                    <span className="text-stone-400 text-sm block mb-1">Special requests:</span>
                    <p className="text-stone-300 text-sm">{notes}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-4 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/5 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                >
                  Confirm Reservation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alternative Booking */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-stone-500 text-sm mb-4">Prefer to book another way?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+352621573723"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
            >
              📞 Call +352 621 573 723
            </a>
            <a
              href="mailto:reservation@publichouse.lu"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
            >
              ✉️ Email Us
            </a>
            <a
              href="https://www.resos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
            >
              🌐 Book via Resos
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
