// Utility for generating universal calendar events (Apple Calendar, Google, Android, Outlook, etc.)

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

export function buildIcsContent(event = weddingFullEvent) {
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

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Apoorv & Chhavi Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${Date.now()}-${Math.random().toString(36).substring(2, 9)}@apoorvchhavi.wedding`,
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
}

export function buildIcsDataUri(event = weddingFullEvent) {
  const icsContent = buildIcsContent(event);
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
}

export function downloadIcsFile(event = weddingFullEvent, filename = "Apoorv-Chhavi-Wedding.ics") {
  const icsContent = buildIcsContent(event);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 1000);
}

/**
 * Universal Native Calendar Trigger:
 * - On iPhone / iPad (iOS): triggers .ics file which opens native Apple Calendar
 * - On Mac (macOS): opens Apple Calendar / native calendar
 * - On Android & Windows: triggers .ics file which opens default calendar app (Samsung, Google, Outlook, etc.)
 */
export function addToDeviceCalendar(event = weddingFullEvent) {
  const cleanFilename = `${(event.title || 'Wedding_Event').replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
  downloadIcsFile(event, cleanFilename);
}

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
