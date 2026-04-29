const params = new URLSearchParams(window.location.search);
const lang = params.get('lang') === 'lt' ? 'lt' : 'en';
const P = window.PORTFOLIO_CONTENT[lang];
const sourceUrl = 'https://github.com/bykovas/bykovas.github.io';
const mailUrl = 'mailto:bykovas@bykovas.lt';

const setHtml = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

const attrs = (item) => item.external ? ' target="_blank" rel="noopener"' : '';

const renderSectionHead = (section) => {
  const right = section.right ? '<div class="r">' + section.right + '</div>' : '';
  return '<div class="section-head"><div class="l"><div class="kicker">' + section.kicker + '</div><h2>' + section.title + '</h2></div>' + right + '</div>';
};

document.documentElement.lang = P.meta.lang;
document.title = P.meta.title;
document.body.dataset.screenLabel = P.meta.screenLabel;

setHtml('nav-links', P.nav.map((item) => '<a href="' + item.href + '">' + item.label + '</a>').join('') + '<span class="lang">' + P.languages.map((item) => '<a href="' + item.href + '"' + (item.active ? ' class="on"' : '') + '>' + item.label + '</a>').join('') + '</span>');

setHtml('hero', '<div class="tag"><span class="d"></span>' + P.hero.tag + '</div>' + '<h1 class="hero-title">' + P.hero.title + '</h1>' + '<div class="hero-grid"><div class="hero-text">' + P.hero.lede.map((text) => '<p class="lede">' + text + '</p>').join('') + '<div class="ctas"><a class="btn primary" href="#contact">' + P.hero.primaryCta + ' <span class="arrow">→</span></a><a class="btn ghost" id="cv-top" href="' + P.cvUrl + '" target="_blank" rel="noopener">' + P.hero.cvCta + '</a></div></div><div class="hero-portrait" aria-label="Denisas Bykovas"></div></div><div class="stat-row" id="stats"></div>');

setHtml('work-head', renderSectionHead(P.sectionHeads.work));
setHtml('approach-head', renderSectionHead(P.sectionHeads.approach));
setHtml('career-head', renderSectionHead(P.sectionHeads.career));
setHtml('stack-head', renderSectionHead(P.sectionHeads.stack));

setHtml('stats', P.stats.map((s) => '<div class="s"><div class="v">' + s.v + '<span class="u">' + s.u + '</span></div><div class="k">' + s.k + '</div><div class="c">' + s.c + '</div></div>').join(''));

setHtml('projects', P.projects.map((p) => '<article class="card"><div class="head"><span class="sector">' + p.sector + '</span><span class="yr">' + p.year + '</span></div><h3>' + p.title + '</h3><div class="client">' + p.client + '</div><p class="desc">' + p.desc + '</p><div class="metrics">' + p.metrics.map((m) => '<div class="m"><div class="v ' + (m.hi ? 'hi' : '') + '">' + m.v + '</div><div class="k">' + m.k + '</div></div>').join('') + '</div><div class="stack">' + p.stack.map((s) => '<span class="chip">' + s + '</span>').join('') + '</div></article>').join(''));

setHtml('approach-grid', P.approach.map((a) => '<div class="ap"><div class="n">' + a.n + '</div><h4>' + a.t + '</h4><p>' + a.d + '</p></div>').join(''));

setHtml('timeline', P.career.map((r) => '<div class="role"><div class="y"><b>' + r.era + '</b>' + r.y + '</div><div class="b"><div class="t">' + r.t + '</div><div class="o">' + r.o + '</div><ul>' + r.bullets.map((b) => '<li>' + b + '</li>').join('') + '</ul><div class="stack">' + r.stack.map((s) => '<span class="chip">' + s + '</span>').join('') + '</div></div></div>').join(''));

setHtml('skills', P.skills.map((s) => '<div class="sk-col"><h4>' + s.g + '</h4><ul>' + s.i.map((i) => '<li>' + i + '</li>').join('') + '</ul></div>').join(''));

setHtml('contact-card', '<div class="inner"><div><h2>' + P.contact.title + '</h2><p>' + P.contact.text + '</p><div class="ctas"><a class="btn primary" href="' + mailUrl + '">' + P.contact.primaryCta + ' <span class="arrow">→</span></a><a class="btn ghost" id="cv-bot" href="' + P.cvUrl + '" target="_blank" rel="noopener">' + P.contact.cvCta + '</a></div></div><div class="right">' + P.contact.links.map((item) => { const content = '<span class="k">' + item.k + '</span><span class="v">' + item.v + '</span>'; return item.href ? '<a href="' + item.href + '"' + attrs(item) + '>' + content + '</a>' : '<a>' + content + '</a>'; }).join('') + '</div></div>');

setHtml('footer', '<div>© <span id="y"></span> Denisas Bykovas · ' + P.footer.text + '</div><div><a href="' + sourceUrl + '" target="_blank" rel="noopener">' + P.footer.sourceLabel + '</a></div>');
document.getElementById('y').textContent = new Date().getFullYear();

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
    card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
  });
});
