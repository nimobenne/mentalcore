import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Reactivation — MentalCore",
  description:
    "For the man who functions fine and feels almost nothing. Seven days, fifteen minutes a day, to get back in contact with yourself.",
  openGraph: {
    type: "website",
    siteName: "MentalCore",
    title: "You're not depressed. You've just gone quiet.",
    description:
      "Seven days. Fifteen minutes a day. One email each morning. Built for the man who functions fine and feels almost nothing.",
    url: "https://mentalcore.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "You're not depressed. You've just gone quiet.",
    description: "Seven days. Fifteen minutes a day. One email each morning.",
  },
};

const PAGE_CSS = `
:root{
  --surface:#111113;
  --line:#1e1e22;
  --line-lit:#2a2a30;
  --ember:#C4813A;
  --ember-hi:#d4904a;
  --ash:#b8b4ae;
  --dim:#4a4a55;

  --measure:640px;
  --gutter:24px;
  --section:clamp(72px,11vw,124px);
}

.mc-sales *,.mc-sales *::before,.mc-sales *::after{box-sizing:border-box;margin:0;padding:0}
.mc-sales{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){.mc-sales{scroll-behavior:auto}}

.mc-sales{
  background:var(--void);
  color:var(--ash);
  font-family:var(--font-inter),system-ui,-apple-system,sans-serif;
  font-weight:300;
  font-size:17px;
  line-height:1.8;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

.mc-sales .wrap{max-width:var(--measure);margin:0 auto;padding:0 var(--gutter)}

.mc-sales h1,.mc-sales h2,.mc-sales h3,.mc-sales .eyebrow,.mc-sales .terms,.mc-sales .btn,.mc-sales .wordmark,.mc-sales .day-n,.mc-sales .trace-phase,.mc-sales .anchor-price,.mc-sales .deal-label,.mc-sales .bar-label{
  font-family:var(--font-montserrat),system-ui,sans-serif;
}

.mc-sales h1{
  font-weight:900;
  font-size:clamp(34px,7.2vw,60px);
  line-height:1.04;
  letter-spacing:-0.02em;
  color:var(--bone);
  text-transform:uppercase;
}
.mc-sales h1 .quiet{color:var(--ember)}

.mc-sales h2{
  font-weight:800;
  font-size:clamp(23px,3.6vw,31px);
  line-height:1.18;
  letter-spacing:-0.01em;
  color:var(--bone);
  text-transform:uppercase;
  margin-bottom:28px;
}

.mc-sales h3{
  font-weight:700;
  font-size:14px;
  letter-spacing:.02em;
  color:var(--bone);
  text-transform:none;
  margin-bottom:8px;
}

.mc-sales .eyebrow{
  font-weight:700;
  font-size:10px;
  letter-spacing:.32em;
  text-transform:uppercase;
  color:var(--ember);
}
.mc-sales .eyebrow.muted{color:var(--dim)}

.mc-sales .rule{width:44px;height:2px;background:var(--ember);margin:28px 0}

.mc-sales p{margin-bottom:20px}
.mc-sales p:last-child{margin-bottom:0}
.mc-sales p strong{color:var(--bone);font-weight:500}

.mc-sales .lede{font-size:19px;color:var(--bone);font-weight:300}
.mc-sales .copy p{max-width:60ch}

.mc-sales section{padding:var(--section) 0}
.mc-sales section + section{border-top:1px solid var(--line)}

.mc-sales .hero{padding-top:clamp(60px,13vh,110px);padding-bottom:var(--section)}
.mc-sales .hero .eyebrow{display:block;margin-bottom:26px}
.mc-sales .hero h1{margin-bottom:30px}

.mc-sales .terms{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  font-weight:700;
  font-size:11px;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:var(--ash);
  margin-bottom:38px;
  row-gap:10px;
}
.mc-sales .terms span{padding-right:16px;margin-right:16px;border-right:1px solid var(--line-lit)}
.mc-sales .terms span:last-child{border-right:0;padding-right:0;margin-right:0;color:var(--ember)}

.mc-sales .btn{
  display:inline-block;
  background:var(--ember);
  color:var(--void);
  font-weight:800;
  font-size:13px;
  letter-spacing:.16em;
  text-transform:uppercase;
  text-decoration:none;
  padding:19px 34px;
  border:0;
  cursor:pointer;
  transition:background .18s ease,transform .18s ease;
}
.mc-sales .btn:hover{background:var(--ember-hi)}
.mc-sales .btn:active{transform:translateY(1px)}
.mc-sales .btn:focus-visible{outline:2px solid var(--bone);outline-offset:3px}

.mc-sales .cta-sub{
  font-size:14px;
  color:var(--dim);
  line-height:1.65;
  margin-top:16px;
  max-width:46ch;
}

.mc-sales .pull{margin:46px 0 0;padding-top:26px;border-top:1px solid var(--line-lit);max-width:34ch}
.mc-sales .pull p{
  font-size:clamp(20px,3.2vw,25px);
  line-height:1.35;
  color:var(--bone);
  font-weight:300;
  letter-spacing:-.01em;
}

.mc-sales .trace{list-style:none;margin:44px 0 0;padding:0}
.mc-sales .trace-phase{
  font-weight:700;
  font-size:10px;
  letter-spacing:.3em;
  text-transform:uppercase;
  color:var(--dim);
  padding-top:34px;
  margin-bottom:18px;
  border-top:1px solid var(--line);
}
.mc-sales .trace-phase:first-child{padding-top:0;border-top:0}

.mc-sales .day{
  display:grid;
  grid-template-columns:34px 1fr;
  gap:0 18px;
  align-items:baseline;
  padding:13px 0;
}
.mc-sales .day-n{
  font-weight:800;
  font-size:12px;
  letter-spacing:.1em;
  color:var(--dim);
  transition:color .5s ease;
}
.mc-sales .day-t{color:var(--ash);font-size:16px;line-height:1.4;transition:color .5s ease}
.mc-sales .day-bar{
  grid-column:2;
  height:2px;
  background:var(--line-lit);
  margin-top:12px;
  position:relative;
  overflow:hidden;
}
.mc-sales .day-bar::after{
  content:'';
  position:absolute;
  inset:0 auto 0 0;
  width:var(--w);
  background:var(--ember);
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .9s cubic-bezier(.2,.7,.2,1);
}
.mc-sales .day.in .day-bar::after{transform:scaleX(1)}
.mc-sales .day.in .day-n{color:var(--ember)}
.mc-sales .day.in .day-t{color:var(--bone)}

@media (prefers-reduced-motion:reduce){
  .mc-sales .day-bar::after{transition:none;transform:scaleX(1)}
  .mc-sales .day-n{color:var(--ember)}
  .mc-sales .day-t{color:var(--bone)}
}

.mc-sales .deal{border:1px solid var(--line-lit);padding:38px 32px 34px;position:relative;margin-top:12px}
.mc-sales .deal-label{
  position:absolute;
  top:0;left:28px;
  transform:translateY(-50%);
  background:var(--void);
  padding:0 12px;
  font-weight:800;
  font-size:10px;
  letter-spacing:.3em;
  text-transform:uppercase;
  color:var(--ember);
}
.mc-sales .deal p{color:var(--bone);max-width:none}
.mc-sales .deal p + p{margin-top:18px}

.mc-sales .faq{margin-top:40px;border-top:1px solid var(--line)}
.mc-sales .faq-item{border-bottom:1px solid var(--line);padding:26px 0}
.mc-sales .faq-item p{color:var(--ash);font-size:16px;max-width:62ch;margin:0}

.mc-sales .testimonial{border:1px solid var(--line-lit);padding:30px 28px;margin-top:16px}
.mc-sales .testimonial:first-child{margin-top:0}
.mc-sales .testimonial p{color:var(--bone);font-size:16px;line-height:1.7;max-width:none;margin-bottom:16px}
.mc-sales .testimonial-name{font-weight:800;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ember)}
.mc-sales .testimonial-name span{color:var(--dim);font-weight:700;text-transform:none;letter-spacing:normal;font-family:var(--font-inter),system-ui,sans-serif}

.mc-sales .anchor-price{
  font-weight:800;
  font-size:clamp(46px,10vw,78px);
  line-height:1;
  letter-spacing:-.03em;
  color:var(--ember);
  display:block;
  margin:6px 0 20px;
}

.mc-sales .link-cta{
  display:inline-block;
  font-family:var(--font-montserrat),system-ui,sans-serif;
  font-weight:800;
  font-size:12px;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:var(--ember);
  text-decoration:none;
  border-bottom:2px solid var(--ember);
  padding-bottom:5px;
  margin-top:8px;
  transition:color .18s,border-color .18s;
}
.mc-sales .link-cta:hover{color:var(--ember-hi);border-color:var(--ember-hi)}
.mc-sales .link-cta:focus-visible{outline:2px solid var(--bone);outline-offset:4px}

.mc-sales footer{padding:44px 0 60px;border-top:1px solid var(--line);font-size:13px;color:var(--dim)}
.mc-sales .footer-row{display:flex;flex-wrap:wrap;gap:12px 28px;align-items:center;justify-content:space-between}
.mc-sales .wordmark{font-weight:800;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--line-lit)}
.mc-sales footer a{color:var(--dim);text-decoration:none;border-bottom:1px solid var(--line)}
.mc-sales footer a:hover{color:var(--ash)}
.mc-sales footer a:focus-visible{outline:2px solid var(--ember);outline-offset:2px}

.mc-sales .bar{
  position:fixed;
  left:0;right:0;bottom:0;
  background:rgba(13,13,15,.94);
  -webkit-backdrop-filter:blur(10px);
  backdrop-filter:blur(10px);
  border-top:1px solid var(--line-lit);
  padding:12px var(--gutter);
  display:none;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  z-index:20;
  transform:translateY(110%);
  transition:transform .3s ease;
}
.mc-sales .bar.show{transform:translateY(0)}
.mc-sales .bar-label{
  font-weight:700;
  font-size:11px;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:var(--ash);
  line-height:1.35;
}
.mc-sales .bar .btn{padding:14px 20px;font-size:12px;white-space:nowrap}

@media (max-width:700px){
  .mc-sales{font-size:16px;line-height:1.75}
  .mc-sales .lede{font-size:17px}
  .mc-sales .btn{width:100%;text-align:center;padding:18px 24px}
  .mc-sales .bar{display:flex}
  .mc-sales .bar .btn{width:auto}
  .mc-sales footer{padding-bottom:96px}
  .mc-sales .day{grid-template-columns:30px 1fr;gap:0 14px}
  .mc-sales .deal{padding:34px 24px 30px}
  .mc-sales .deal-label{left:20px}
}
`;

const BODY_HTML = `
<main>

  <!-- HERO -->
  <header class="hero">
    <div class="wrap">
      <h1>You're not depressed.<br>You've just gone <span class="quiet">quiet</span>.</h1>
      <p class="terms">
        <span>7 days</span>
        <span>15 min a day</span>
        <span data-price>$19</span>
      </p>
      <div class="cta-block">
        <a class="btn" href="https://mentalcore.gumroad.com/l/reactivation" data-buy>Get The Reactivation</a>
        <p class="cta-sub">One time. Instant access. The first email lands tomorrow morning, and there's something you can do tonight.</p>
        <p class="cta-sub" style="margin-top:14px">Not ready yet? <a href="/start" class="link-cta" style="margin-top:0;margin-left:4px">Take the free quiz first</a></p>
      </div>
    </div>
  </header>

  <!-- RECOGNITION -->
  <section class="copy">
    <div class="wrap">
      <p class="lede">There's a kind of not-okay nobody warns you about.</p>
      <p>It isn't falling apart. Falling apart would almost be easier, because at least everyone would see it. This is quieter than that. You still get up. You still do the job, answer the texts, show up where you said you'd be. You'd score fine on any questionnaire a doctor handed you.</p>
      <p>But you know, in the way you can only know something at one in the morning when it's just you and the ceiling, that you're not really in your own life anymore. You're next to it. Doing the right things. Saying the right things. Watching it all happen to a guy who looks like you.</p>
      <p>That's not weakness. It isn't a diagnosis either.</p>
      <p>That's what happens when a man performs okay for long enough that he forgets what not performing even felt like. The performance gets so good he disappears inside it. And one day he realizes he can't remember the last time something actually reached him.</p>
      <div class="pull">
        <p>I know that man because I was him. I built something for him.</p>
      </div>
    </div>
  </section>

  <!-- WHAT IT IS -->
  <section>
    <div class="wrap">
      <div class="rule"></div>
      <h2>Seven days.<br>One email each morning.</h2>
      <div class="copy">
        <p>Not therapy. Not journaling prompts. Not a course with modules and a certificate at the end that you'll never look at.</p>
        <p>It's a sequence built to get you back in contact with yourself, and it starts with your body, because that is always where the signal comes back first.</p>
      </div>

      <ol class="trace">
        <li class="trace-phase">Days 1 and 2 — the body</li>
        <li class="day" style="--w:22%"><span class="day-n">01</span><span class="day-t">The Body Speaks First</span><span class="day-bar"></span></li>
        <li class="day" style="--w:33%"><span class="day-n">02</span><span class="day-t">Presence Over Production</span><span class="day-bar"></span></li>

        <li class="trace-phase">Days 3 to 5 — who you actually are</li>
        <li class="day" style="--w:47%"><span class="day-n">03</span><span class="day-t">Who You Are When Nobody's Watching</span><span class="day-bar"></span></li>
        <li class="day" style="--w:60%"><span class="day-n">04</span><span class="day-t">The Story You Tell About Yourself</span><span class="day-bar"></span></li>
        <li class="day" style="--w:72%"><span class="day-n">05</span><span class="day-t">What You've Been Carrying</span><span class="day-bar"></span></li>

        <li class="trace-phase">Days 6 and 7 — direction</li>
        <li class="day" style="--w:86%"><span class="day-n">06</span><span class="day-t">What You Actually Want</span><span class="day-bar"></span></li>
        <li class="day" style="--w:100%"><span class="day-n">07</span><span class="day-t">One Honest Commitment</span><span class="day-bar"></span></li>
      </ol>

      <div class="copy" style="margin-top:46px">
        <p>Days one and two are physical. Something that makes you feel something. No explaining it, no figuring it out, no talking about your childhood. Just feeling, on purpose, maybe for the first time in a while.</p>
        <p>Days three through five are about who you actually are. Not the version you run for other people. The one underneath that, the one you've half lost track of.</p>
        <p>Days six and seven are direction. Not goals. Not a five-year plan. One honest commitment small enough to actually keep.</p>
        <p>Every day comes with a page to write on, and by day seven you're reading back a week of your own handwriting instead of trying to remember what you thought on Tuesday.</p>
        <p><strong>I'm not promising transformation. I'm not selling you a new man. I'm selling you seven days of giving a damn about the one already here.</strong></p>
      </div>
    </div>
  </section>

  <!-- WHO BUILT THIS -->
  <section>
    <div class="wrap">
      <div class="rule"></div>
      <h2>My name is Sam.</h2>
      <div class="copy">
        <p>I used to be a professional athlete. I gave up on that early, not because I wasn't good enough, but because I couldn't handle the mental toll and didn't have a real way to deal with it. I regret that to this day.</p>
        <p>I started MentalCore because I don't want other men walking away from something they care about for the same reason I did. Not because they aren't capable. Because nobody handed them a way to deal with what's actually going on in their head before it cost them something they can't get back.</p>
        <p>I'm not a therapist and I'm not going to pretend to be one. I built The Reactivation out of what would have actually moved the needle for me back then, and I wrote it as the thing I wish somebody had handed me before I quit.</p>
        <p>That's the whole credential. If that's not enough for you, don't buy it. Read the free guide instead and see whether I'm describing your life accurately before you spend anything.</p>
      </div>
    </div>
  </section>

  <!-- THE DEAL -->
  <section>
    <div class="wrap">
      <div class="deal">
        <span class="deal-label">The deal</span>
        <p>You're skeptical of anything that sounds like a fix. You should be. There's a whole industry pointed at men like us, the soft stuff and the hard stuff both, and you learned to scroll past it. So here's the deal, plain as I can say it. Start it. If at any point it isn't doing anything for you, email me and I'll send your money back. You don't have to finish all seven days first, and you don't have to explain why.</p>
        <p>I'm not worried about that clause. I wrote it on purpose.</p>
      </div>

      <div class="faq">
        <div class="faq-item">
          <h3>What if I miss a day?</h3>
          <p>You pick it up the next morning. Nothing resets and nothing is lost. The emails don't chase you and the days don't expire.</p>
        </div>
        <div class="faq-item">
          <h3>Is this therapy?</h3>
          <p>No, and it doesn't replace it. It's a structure for seven days. If something surfaces during the week that's heavier than a week can hold, that's worth taking to a real therapist, and it doesn't cancel out what the seven days did.</p>
        </div>
        <div class="faq-item">
          <h3>Do I have to talk to anybody?</h3>
          <p>No. There's no group, no call, no forum, no accountability partner. It's you, an email each morning, and fifteen minutes. Nobody sees what you write.</p>
        </div>
        <div class="faq-item">
          <h3>How long does it actually take?</h3>
          <p>Fifteen minutes, most days less. Each morning gives you one idea, one question to think about, and one thing to actually do. It's built for a man with a full schedule and no spare energy.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section>
    <div class="wrap">
      <div class="rule"></div>
      <h2>Men who've done this.</h2>

      <div class="testimonial">
        <p>"I never believed in working on my mental health, but after I finished university I felt lost, like I wasn't the man I was supposed to be. The Reactivation helped me gain direction and focus on the goals I'm chasing today."</p>
        <p class="testimonial-name">Braden, 24 <span>— started with the free guide, then The Reactivation</span></p>
      </div>

      <div class="testimonial">
        <p>"I've always struggled to find the right path for me and had trouble accepting who I am and what my purpose was. I stumbled onto MentalCore and resonated with the message, so I decided to try The Reactivation. I couldn't recommend it more to other men who need guidance without the fear of having to ask for help."</p>
        <p class="testimonial-name">Ryan, 27 <span>— The Reactivation</span></p>
      </div>

      <div class="testimonial">
        <p>"Most men think they have it figured out by my age, but I noticed nobody ever feels like they've made it until they can live with their own thoughts and ideas. The Reactivation helped me navigate the thoughts I've been avoiding and forced me to become a better man. Best twenty dollars I've spent on myself in a long time. Highly recommend."</p>
        <p class="testimonial-name">Noah, 37 <span>— The Reactivation</span></p>
      </div>
    </div>
  </section>

  <!-- CLOSE -->
  <section>
    <div class="wrap">
      <span class="anchor-price" data-price>$19</span>
      <div class="copy">
        <p>A single therapy session often runs $150 to $250. I'm not saying this is therapy. I'm saying it's <span data-price>$19</span>, it lands tomorrow morning, there's no waitlist, and the only thing it asks of you is fifteen minutes and something honest.</p>
      </div>
      <div class="cta-block" style="margin-top:34px">
        <a class="btn" href="https://mentalcore.gumroad.com/l/reactivation" data-buy>Get The Reactivation</a>
        <p class="cta-sub">One time. Instant access. You can start tonight.<br>Start it, feel nothing, get your money back. That's the deal, and I mean it.</p>
      </div>
    </div>
  </section>


</main>

<footer>
  <div class="wrap">
    <div class="footer-row">
      <span class="wordmark">MentalCore</span>
      <span><a href="/start">Free guide</a> · <a href="mailto:hello@mentalcore.co">Questions? Email me</a> · <a href="/privacy">Privacy</a></span>
    </div>
  </div>
</footer>

<div class="bar" aria-hidden="true">
  <span class="bar-label">The Reactivation<br><span data-price>$19</span> · 7 days</span>
  <a class="btn" href="https://mentalcore.gumroad.com/l/reactivation" data-buy tabindex="-1">Get Access</a>
</div>
`;

const BEHAVIOR_JS = `
(function(){
  'use strict';
  var root = document.querySelector('.mc-sales');
  if (!root) return;

  var cfg = window.MENTALCORE || { checkoutUrl: '', price: '$19' };

  var base = cfg.checkoutUrl || '';
  var qs = new URLSearchParams(location.search);
  var src = qs.get('src') || qs.get('utm_source') || 'direct';

  root.querySelectorAll('[data-buy]').forEach(function(a){
    if (!base) { console.error('MentalCore config missing checkoutUrl, buy buttons falling back to unparameterized href'); return; }
    a.href = base + (base.indexOf('?') > -1 ? '&' : '?') + 'src=' + encodeURIComponent(src);
    a.rel = 'noopener';
    a.addEventListener('click', function(){
      if (window.va) window.va('event', { name: 'buy_click', data: { src: src } });
    });
  });

  root.querySelectorAll('a[href^="/start"]').forEach(function(a){
    a.href = '/start?src=' + encodeURIComponent(src);
  });

  if (cfg.price) {
    root.querySelectorAll('[data-price]').forEach(function(el){ el.textContent = cfg.price; });
  }

  var days = root.querySelectorAll('.day');
  if (!('IntersectionObserver' in window)) {
    days.forEach(function(d){ d.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        var i = +e.target.dataset.i;
        setTimeout(function(){ e.target.classList.add('in'); }, i * 90);
        io.unobserve(e.target);
      });
    }, { threshold: 0.6, rootMargin: '0px 0px -8% 0px' });
    days.forEach(function(d,i){ d.dataset.i = i; io.observe(d); });
  }

  var bar = root.querySelector('.bar');
  var hero = root.querySelector('.hero .cta-block');
  if (bar && hero && 'IntersectionObserver' in window) {
    var barLink = bar.querySelector('.btn');
    new IntersectionObserver(function(entries){
      var visible = entries[0].isIntersecting;
      bar.classList.toggle('show', !visible);
      bar.setAttribute('aria-hidden', visible ? 'true' : 'false');
      barLink.tabIndex = visible ? -1 : 0;
    }, { threshold: 0 }).observe(hero);
  }
})();
`;

export default function SalesPage() {
  return (
    <div className="mc-sales">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Script id="mc-config" src="/config.js" strategy="beforeInteractive" />
      <Script
        id="mc-sales-behavior"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: BEHAVIOR_JS }}
      />
    </div>
  );
}
