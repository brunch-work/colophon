"use client";

import { useEffect, useState } from "react";

// Montreal time — Eastern Time, with daylight saving handled by the runtime.
const TIME_ZONE = "America/Toronto";

const timeFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

// Current UTC offset for the zone, e.g. "UTC -4" (DST) or "UTC -5" (standard).
function offsetLabel(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    timeZoneName: "shortOffset",
  }).formatToParts(date);

  const name = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
  const match = name.match(/GMT([+-]\d+)/);
  return `UTC ${match ? match[1] : "-5"}`;
}

function formatTime() {
  const now = new Date();
  // "24" can surface at midnight in some engines — normalize to "00".
  const time = timeFormatter.format(now).replace(/^24/, "00");
  return `${time} (${offsetLabel(now)})`;
}

export default function Time() {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="card__time" suppressHydrationWarning>
      {time}
    </time>
  );
}
