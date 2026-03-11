import { Link } from 'react-router-dom';
import { announcement, contactInfo, socialLinks, topQuickLinks } from '../data/content';

function Header() {
  return (
    <div className="border-b border-rose-900/40 bg-rose-950 px-4 py-2 text-xs text-rose-50 md:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
        <div className="overflow-hidden xl:max-w-[45%]">
          <p className="ticker whitespace-nowrap font-medium">📢 {announcement}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 xl:justify-end">
          <span>📞 Principal: {contactInfo.phones.principal}</span>
          <span>✉️ {contactInfo.email}</span>
          <div className="flex items-center gap-1">
            {topQuickLinks.map((item) => (
              item.external ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-rose-200/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition hover:bg-rose-900"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.link}
                  className="rounded-full border border-rose-200/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition hover:bg-rose-900"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="rounded-full border border-rose-200/30 px-2 py-1 text-[11px] font-semibold transition hover:bg-rose-900"
              >
                {item.title[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
