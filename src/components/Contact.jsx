import { contactInfo } from '../data/content';

function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="section-title">Contact Us</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{contactInfo.address}</p>
          <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <p>✉️ {contactInfo.email}</p>
            <p>📞 Principal: {contactInfo.phones.principal}</p>
            <p>📞 Help Desk: {contactInfo.phones.helpDesk}</p>
            <p>📞 Students Admission: {contactInfo.phones.studentsAdmission}</p>
            <p>📞 Accounts Office: {contactInfo.phones.accountsOffice}</p>
            <p>📞 Exam Cell: {contactInfo.phones.examCell}</p>
            <p>📞 Placement Cell: {contactInfo.phones.placementCell}</p>
            <p>🛡️ Anti-ragging helpline: {contactInfo.antiRagging}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a href={contactInfo.mapLink} target="_blank" rel="noreferrer" className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-900 dark:text-rose-300 dark:hover:bg-rose-950/40">Google Map</a>
            <a href={contactInfo.howToReach} target="_blank" rel="noreferrer" className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-900 dark:text-rose-300 dark:hover:bg-rose-950/40">How to Reach</a>
          </div>

          <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500 dark:border-slate-700 dark:bg-slate-950" placeholder="Your Name" />
            <input required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500 dark:border-slate-700 dark:bg-slate-950" placeholder="Your Email" type="email" />
            <textarea required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500 dark:border-slate-700 dark:bg-slate-950" placeholder="Message" rows="4"></textarea>
            <button className="rounded-lg bg-rose-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700">Send Message</button>
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <iframe
            title="GCEE Map"
            src="https://www.google.com/maps?q=Government%20College%20of%20Engineering%20Erode&output=embed"
            className="h-[500px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
