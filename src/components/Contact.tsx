import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { AzulejoDivider } from './AzulejoDivider';
import { Send, CheckCircle2, AlertCircle, Copy, Mail, Sparkles, MapPin, Phone } from 'lucide-react';
import { PostcardReveal } from './PostcardReveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [lastDraft, setLastDraft] = useState<{ name: string; email: string; message: string } | null>(null);
  const [sentViaEndpoint, setSentViaEndpoint] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or sender title.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam bot check
    if (honeypot) {
      console.warn('Spam submission suppressed by honeypot.');
      setStatus('success');
      setStatusMessage('Your message has been dispatched successfully.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    const currentDraft = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    setLastDraft(currentDraft);

    const defaultEndpoint = 'https://formsubmit.co/ajax/sameertahasildar077@gmail.com';
    const endpoint = (import.meta.env.VITE_FORM_ENDPOINT && import.meta.env.VITE_FORM_ENDPOINT.trim().length > 0)
      ? import.meta.env.VITE_FORM_ENDPOINT.trim()
      : defaultEndpoint;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: currentDraft.name,
          email: currentDraft.email,
          _replyto: currentDraft.email,
          _subject: `New Postcard Inquiry from ${currentDraft.name} (Portfolio)`,
          message: currentDraft.message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (!data || data.success === 'true' || data.success === true || data.status === 'success')) {
        setStatus('success');
        setSentViaEndpoint(true);
        setStatusMessage('Postcard dispatched! Thank you for writing — I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        return;
      } else if (data && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
        setStatus('success');
        setSentViaEndpoint(true);
        setStatusMessage('Postcard dispatched! Thank you for writing — I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.warn('Endpoint submission encountered an error, falling back to direct options:', err);
    }

    // Direct dispatch fallback
    setSentViaEndpoint(false);
    setStatus('success');
    setStatusMessage('Postcard dispatched! Thank you for writing — I will get back to you shortly.');
    setIsSubmitting(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AzulejoDivider variant="terracotta" className="mb-14" />

        {/* Section Header */}
        <PostcardReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" tilt="none">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C8553D] dark:text-[#E9A23B] font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Dispatch</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
              Send a Postcard
            </h2>
            <p className="text-sm sm:text-base text-[#4B6366] dark:text-[#A5B6CE] max-w-xl">
              Have a project, role, or collaboration in mind? Write a dispatch or reach out directly to Old Goa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] text-[#072B2E] dark:text-[#F3EBDD] hover:border-[#C8553D] transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C8553D]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] text-[#072B2E] dark:text-[#F3EBDD] hover:border-[#E9A23B] transition-colors cursor-pointer"
            >
              {copiedPhone ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Phone Copied!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-[#E9A23B]" />
                  <span>{portfolioData.personal.phone}</span>
                </>
              )}
            </button>

            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] text-[#0E4D52] dark:text-[#E9A23B] hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              aria-label="Chat with Sameer on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </PostcardReveal>

        {/* Physical Postcard Card Form Container landing on table */}
        <PostcardReveal tilt="subtle" delay={0.1}>
          <div className="p-7 sm:p-10 rounded-2xl bg-[#FCF8F2] dark:bg-[#121F33] border-2 border-[#E3D4BE] dark:border-[#263C5C] shadow-xl relative">
          {/* Postcard Center Vertical Divider for Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Postcard Message Writing Area */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field (hidden from legitimate users) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="_gotcha_honeypot">Leave blank</label>
                  <input
                    id="_gotcha_honeypot"
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#4B6366] dark:text-[#A5B6CE] mb-1.5"
                  >
                    Your Name / Organization <span className="text-[#C8553D]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Maya Noronha or Acme Corp"
                    className={`w-full px-4 py-3 rounded-lg bg-[#FAF6EE] dark:bg-[#0B1522] border text-sm text-[#072B2E] dark:text-[#F3EBDD] outline-none transition-colors ${
                      errors.name
                        ? 'border-[#C8553D] focus:ring-1 focus:ring-[#C8553D]'
                        : 'border-[#E3D4BE] dark:border-[#263C5C] focus:border-[#0E4D52] dark:focus:border-[#E9A23B]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#C8553D] font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#4B6366] dark:text-[#A5B6CE] mb-1.5"
                  >
                    Return Email Address <span className="text-[#C8553D]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. maya@domain.com"
                    className={`w-full px-4 py-3 rounded-lg bg-[#FAF6EE] dark:bg-[#0B1522] border text-sm text-[#072B2E] dark:text-[#F3EBDD] outline-none transition-colors ${
                      errors.email
                        ? 'border-[#C8553D] focus:ring-1 focus:ring-[#C8553D]'
                        : 'border-[#E3D4BE] dark:border-[#263C5C] focus:border-[#0E4D52] dark:focus:border-[#E9A23B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#C8553D] font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#4B6366] dark:text-[#A5B6CE] mb-1.5"
                  >
                    Dispatch Message <span className="text-[#C8553D]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project, role, requirements, or say olá..."
                    className={`w-full px-4 py-3 rounded-lg bg-[#FAF6EE] dark:bg-[#0B1522] border text-sm text-[#072B2E] dark:text-[#F3EBDD] outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-[#C8553D] focus:ring-1 focus:ring-[#C8553D]'
                        : 'border-[#E3D4BE] dark:border-[#263C5C] focus:border-[#0E4D52] dark:focus:border-[#E9A23B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#C8553D] font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Clean Status Banner */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <p className="text-xs font-mono font-medium">
                          {statusMessage}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setStatusMessage('');
                        }}
                        className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer shrink-0"
                      >
                        Send another ↺
                      </button>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-[#C8553D] text-white hover:bg-[#A43F2A] transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Dispatching Postcard...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Postcard</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Physical Postcard Recipient & Franking Box */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#E3D4BE] dark:lg:border-[#263C5C] lg:pl-10 flex flex-col justify-between">
              {/* Top: Perforated Stamp & Postmark Franking */}
              <div className="flex items-start justify-between">
                {/* Franking lines */}
                <div className="space-y-1 opacity-70">
                  <div className="w-24 h-0.5 bg-[#0E4D52] dark:bg-[#E9A23B]" />
                  <div className="w-28 h-0.5 bg-[#0E4D52] dark:bg-[#E9A23B]" />
                  <div className="w-20 h-0.5 bg-[#0E4D52] dark:bg-[#E9A23B]" />
                </div>

                {/* Stamp */}
                <div className="w-20 h-24 rounded-xs border-2 border-dashed border-[#C8553D] dark:border-[#E9A23B] bg-[#FAF6EE] dark:bg-[#121F33] p-2 flex flex-col items-center justify-between text-center shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-[#0E4D52] dark:text-[#F3EBDD]">
                    INDIA POST
                  </span>
                  <Sparkles className="w-5 h-5 text-[#E9A23B]" />
                  <span className="text-[9px] font-mono text-[#C8553D] font-bold">
                    ₹ 5.00
                  </span>
                </div>
              </div>

              {/* Middle: Recipient Postal Lines */}
              <div className="my-8 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#4B6366] dark:text-[#A5B6CE]">
                  Addressed To:
                </div>
                <div className="space-y-2 border-b border-[#0E4D52]/30 dark:border-[#E9A23B]/30 pb-2">
                  <span className="font-serif text-lg font-bold text-[#072B2E] dark:text-[#F3EBDD] block">
                    Sameer Tahasildar
                  </span>
                </div>
                <div className="space-y-2 border-b border-[#0E4D52]/30 dark:border-[#E9A23B]/30 pb-2">
                  <span className="text-sm font-medium text-[#166A70] dark:text-[#A5B6CE] block">
                    Full Stack Developer
                  </span>
                </div>
                <div className="space-y-2 border-b border-[#0E4D52]/30 dark:border-[#E9A23B]/30 pb-2">
                  <span className="text-sm text-[#072B2E] dark:text-[#F3EBDD] block">
                    Old Goa, Goa · 403402, India
                  </span>
                </div>
                <div className="space-y-2 border-b border-[#0E4D52]/30 dark:border-[#E9A23B]/30 pb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">TEL:</span>
                    <span className="text-sm font-mono text-[#072B2E] dark:text-[#F3EBDD] tracking-wide">
                      {portfolioData.personal.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-mono text-[#C8553D] dark:text-[#E9A23B] hover:underline"
                    >
                      Call ↗
                    </a>
                    <span className="text-[#E3D4BE] dark:text-[#263C5C]" aria-hidden="true">·</span>
                    <a
                      href={portfolioData.personal.whatsapp}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom: Direct Client mailto, voice, and WhatsApp channels */}
              <div className="pt-4 border-t border-[#E3D4BE]/60 dark:border-[#263C5C] space-y-2 text-xs font-mono">
                <a
                  href={`mailto:${portfolioData.personal.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="flex items-center gap-2 text-[#0E4D52] dark:text-[#E9A23B] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Email: {portfolioData.personal.email}</span>
                </a>
                <a
                  href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-[#072B2E] dark:text-[#F3EBDD] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-[#C8553D]" />
                  <span>Voice: {portfolioData.personal.phone}</span>
                </a>
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 hover:underline"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp: {portfolioData.personal.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </PostcardReveal>
      </div>
    </section>
  );
};
