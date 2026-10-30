/* ===== Knight Lab TimelineJS: MTV through the years ===== */
var timelineData = {
  title: {
    text: { headline: 'MTV through the years', text: '<p>Key moments from 1981 to 2021.</p>' },
    media: { url: 'images/main-tv.jpg', credit: 'Zulfugar Karimov / Unsplash' }
  },
  events: [
    { start_date: { year: 1981, month: 8, day: 1 },
      text: { headline: 'MTV goes on the air', text: '<p>The first video played is "Video Killed the Radio Star."</p>' },
      media: { url: 'images/shuttle-launch.jpg', credit: 'NASA' } },
    { start_date: { year: 1983, month: 12, day: 2 },
      text: { headline: '"Thriller" premieres', text: '<p>Michael Jackson\'s video becomes a TV event.</p>' } },
    { start_date: { year: 1984, month: 9, day: 14 },
      text: { headline: 'First Video Music Awards', text: '<p>The VMAs become a yearly event.</p>' } },
    { start_date: { year: 1987, month: 8, day: 1 },
      text: { headline: 'MTV Europe launches', text: '<p>MTV starts going global.</p>' } },
    { start_date: { year: 1989, month: 11, day: 26 },
      text: { headline: '"Unplugged" debuts', text: '<p>The acoustic series produces hit live albums.</p>' } },
    { start_date: { year: 1992, month: 5, day: 21 },
      text: { headline: '"The Real World" premieres', text: '<p>An early model for reality TV.</p>' } },
    { start_date: { year: 1993, month: 3, day: 8 },
      text: { headline: '"Beavis and Butt-Head"', text: '<p>Mike Judge\'s cartoon pushes adult animation forward.</p>' } },
    { start_date: { year: 2009, month: 12, day: 3 },
      text: { headline: '"Jersey Shore"', text: '<p>A reality hit with international spin-offs.</p>' } },
    { start_date: { year: 2021, month: 8, day: 1 },
      text: { headline: 'MTV turns 40', text: '<p>Four decades of shaping pop culture.</p>' } }
  ]
};

new TL.Timeline('mtv-timeline', timelineData);
