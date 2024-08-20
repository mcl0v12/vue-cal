/**
  * vue-cal v4.9.0
  * (c) 2024 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1", "\u03A4\u03C1\u03AF\u03C4\u03B7", "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7", "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7", "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE", "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF", "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE"], e = ["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2", "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2", "\u039C\u03AC\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2", "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2", "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"], t = ["\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5", "\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5", "\u039C\u03B1\u0390\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5", "\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5", "\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5"], M = "\u0388\u03C4\u03B7", s = "\u0388\u03C4\u03BF\u03C2", n = "\u039C\u03AE\u03BD\u03B1", o = "\u0395\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1", d = "\u0397\u03BC\u03AD\u03C1\u03B1", m = "\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1", y = "\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD", r = "\u0397\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03BF \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD", v = "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE", l = "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD\u03C4\u03BF\u03C2", h = "dddd D MMMMG YYYY", E = "\u03C0.\u03BC.", D = "\u03BC.\u03BC.", Y = { weekDays: a, months: e, monthsGenitive: t, years: "\u0388\u03C4\u03B7", year: s, month: n, week: o, day: d, today: m, noEvent: y, allDay: r, deleteEvent: v, createEvent: l, dateFormat: h, am: E, pm: D };
export {
  r as allDay,
  E as am,
  l as createEvent,
  h as dateFormat,
  d as day,
  Y as default,
  v as deleteEvent,
  n as month,
  e as months,
  t as monthsGenitive,
  y as noEvent,
  D as pm,
  m as today,
  o as week,
  a as weekDays,
  s as year,
  M as years
};
