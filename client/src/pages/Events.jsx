import EventCard from "../components/EventCard";

export default function Events() {
  const events = [
    { title: "Tech Conference", description: "AI & ML Summit", date: "2025-10-01" },
    { title: "Music Fest", description: "Live Concert Night", date: "2025-11-12" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {events.map((e, i) => <EventCard key={i} event={e} />)}
    </div>
  );
}
