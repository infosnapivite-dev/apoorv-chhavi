// Utility for generating calendar links (Google, Apple iCal, Outlook, Yahoo)

export const weddingFullEvent = {
  title: "Apoorv & Chhavi's Wedding Celebrations",
  start: "20261209T133000Z", // Dec 9, 2026 at 7:00 PM IST (13:30 UTC)
  end: "20261211T183000Z",   // Dec 11, 2026 at 11:59 PM IST (18:30 UTC)
  startISO: "2026-12-09T19:00:00+05:30",
  endISO: "2026-12-11T23:59:00+05:30",
  location: "Goa Marriott Resort & Spa, Miramar, Panaji, Goa 403001",
  details: `Apoorv & Chhavi's Wedding Celebrations in Goa!

Dates: 9, 10, 11 December 2026
Venue: Goa Marriott Resort & Spa, Miramar, Panaji, Goa

EVENTS SCHEDULE:
• Dec 9 (7:00 PM) - Bollywood Social (North Central Lawn)
• Dec 10 (11:00 AM) - Haldi (Poolside)
• Dec 10 (7:00 PM) - Sangeet (Grand Ballroom)
• Dec 11 (10:00 AM) - Mayra (Grand Ballroom)
• Dec 11 (2:00 PM) - Baarat (Arrival Lounge) & (5:00 PM) Pheras (By the Beach)

Hashtag: #ApoorvedByChhavi`
};

export function generateGoogleCalendarUrl(event = weddingFullEvent) {
  const baseUrl = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.details || event.description || "",
    location: event.location || event.venue || "",
    dates: `${event.start}/${event.end}`,
  });
  return `${baseUrl}?${params.toString()}`;
}

export function generateOutlookUrl(event = weddingFullEvent) {
  const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title,
    body: event.details || event.description || "",
    location: event.location || event.venue || "",
    startdt: event.startISO || "2026-12-09T19:00:00",
    enddt: event.endISO || "2026-12-11T23:59:00",
  });
  return `${baseUrl}?${params.toString()}`;
}

export function generateYahooUrl(event = weddingFullEvent) {
  const baseUrl = "https://calendar.yahoo.com/";
  const params = new URLSearchParams({
    v: "60",
    view: "d",
    type: "20",
    title: event.title,
    st: event.start,
    et: event.end,
    desc: event.details || event.description || "",
    in_loc: event.location || event.venue || "",
  });
  return `${baseUrl}?${params.toString()}`;
}

export function downloadIcsFile(event = weddingFullEvent, filename = "Apoorv-Chhavi-Wedding.ics") {
  const cleanDescription = (event.details || event.description || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

  const cleanLocation = (event.location || event.venue || "")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

  const cleanTitle = (event.title || "Wedding Event")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

  const nowISO = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Apoorv & Chhavi Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${Date.now()}@apoorvchhavi.wedding`,
    `DTSTAMP:${nowISO}`,
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    `SUMMARY:${cleanTitle}`,
    `DESCRIPTION:${cleanDescription}`,
    `LOCATION:${cleanLocation}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${cleanTitle}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
