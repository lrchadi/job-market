import React, { useState } from "react";
import { format } from "date-fns";

const initialMeetings = [
  { id: 1, name: "Yassine Ouakrim", date: new Date(), time: "10:00 AM" },
  { id: 2, name: "Sara El Amrani", date: new Date(), time: "2:30 PM" },
];

export default function Calendar() {
  const [meetings, setMeetings] = useState(initialMeetings);
  const [form, setForm] = useState({ name: "", date: "", time: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMeeting = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: meetings.length + 1,
      ...form,
      date: new Date(form.date),
    };
    setMeetings([...meetings, newMeeting]);
    setForm({ name: "", date: "", time: "" });
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Calendar & Meeting Scheduler</h1>

      <div className="mb-8">
        <form onSubmit={addMeeting} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium">Employee Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="md:col-span-3">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Schedule Meeting
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Scheduled Meetings</h2>
        {meetings.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {meetings.map((m) => (
              <li key={m.id} className="py-3">
                <strong>{m.name}</strong> - {format(m.date, "MMM dd, yyyy")} at {m.time}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No meetings scheduled yet.</p>
        )}
      </div>
    </div>
  );
}
