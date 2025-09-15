export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-xl">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-sm text-gray-500">{event.date}</p>
    </div>
  );
}
