import { Link } from 'react-router-dom';
import { contactInfo, departmentList, downloads, quickLinks, socialLinks } from '../data/content';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-6">
        <div>
          <h4 className="text-lg font-bold text-white">GCEE</h4>
          <p className="mt-3 text-sm">Government College of Engineering, Erode - future-focused technical education.</p>
          <p className="mt-3 text-xs text-slate-400">Visit Anti-Ragging Site | {contactInfo.antiRagging}</p>
        </div>
        <div>
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.title}><a href={item.link} target="_blank" rel="noreferrer" className="hover:text-white">{item.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Downloads</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {downloads.map((item) => (
              <li key={item.title}><a href={item.link} target="_blank" rel="noreferrer" className="hover:text-white">{item.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Departments</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {departmentList.map((item) => (
              <li key={item.id}><Link to={`/departments/${item.id}`} className="hover:text-white">{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Admissions</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white">Apply Now</Link></li>
            <li><Link to="/about" className="hover:text-white">Eligibility & Info</Link></li>
            <li><Link to="/facilities" className="hover:text-white">Campus Life</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Social</h5>
          <div className="mt-3 flex gap-3 text-sm">
            {socialLinks.map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-3 py-1 hover:text-white">{item.title}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">
        Designed & Maintained By: GCEE Website Administrators, Department of IT, GCE, Erode · © 2026 Government College of Engineering, Erode. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

