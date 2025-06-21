import { useState, useEffect, useRef } from "react";
import { Plus, Filter, Edit, Trash2, Users } from "lucide-react";
import {
  FaChartBar,
  FaCalendarAlt,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
  FaRobot,
  FaBars,
} from "react-icons/fa";
import Analytics from "./Analytics";
import Calendar from "./Calendar";
import Messages from "./Messages";
import ChatWithAI from "./ChatWithAI";
import Profile from "./Profile";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const SidebarLink = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 w-full text-left ${
      active ? "bg-white text-blue-900 font-semibold" : "hover:bg-blue-800"
    }`}
  >
    <Icon /> {label}
  </button>
);

const Sidebar = ({ activePage, setActivePage, isOpen }) => (
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white py-6 px-4 transform transition-transform duration-300 z-40 md:relative md:translate-x-0 md:flex-shrink-0 md:w-64 md:block ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
    <nav className="space-y-2">
      <SidebarLink icon={FaChartBar} label="Your Offers" active={activePage === "offers"} onClick={() => setActivePage("offers")} />
      <SidebarLink icon={FaChartBar} label="Analytics" active={activePage === "analytics"} onClick={() => setActivePage("analytics")} />
      <SidebarLink icon={FaCalendarAlt} label="Calendar" active={activePage === "calendar"} onClick={() => setActivePage("calendar")} />
      <SidebarLink icon={FaEnvelope} label="Messages" active={activePage === "messages"} onClick={() => setActivePage("messages")} />
      <SidebarLink icon={FaRobot} label="Chat with AI" active={activePage === "ai"} onClick={() => setActivePage("ai")} />
      <SidebarLink icon={FaUser} label="Profile" active={activePage === "profile"} onClick={() => setActivePage("profile")} />
      <SidebarLink icon={FaSignOutAlt} label="Log Out" active={activePage === "logout"} onClick={() => setActivePage("logout")} />
    </nav>
  </div>
);

const OfferCard = () => (
  <div className="bg-white shadow p-4 rounded border">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <h2 className="text-xl font-semibold">Web Developer</h2>
      <span className="text-sm text-gray-400 mt-1 sm:mt-0">Posted at: 12/6/2024</span>
    </div>
    <p className="text-xs text-gray-500 mb-2">Category: Development</p>
    <p className="text-sm text-gray-700 mb-2">
      We are hiring new web developers, especially for the backend side in Python and PHP, using frameworks like Django and Laravel. We need developers with over 4 years of experience.
      Salary will be discussed during the interview. Interested candidates can contact us at: contact@charikaX.com
    </p>
    <div className="flex flex-wrap gap-2 mt-4">
      <button className="py-2 px-4 roounded bg-green-500 hover:bg-green-600 text-white">Edit</button>
      <button className="py-2 px-4 roounded bg-orange-400 hover:bg-orange-500 text-white">Applicants</button>
      <button className="py-2 px-4 roounded bg-red-500 hover:bg-red-600 text-white">Delete</button>
      <button className="py-2 px-4 roounded bg-purple-500 hover:bg-purple-600 text-white">Duplicate</button>
    </div>
  </div>
);

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("offers");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case "offers": return <YourOffers />;
      case "analytics": return <Analytics />;
      case "calendar": return <Calendar />;
      case "messages": return <Messages />;
      case "ai": return <ChatWithAI />;
      case "profile": return <Profile />;
      case "logout": return <Link to={'/'}><Logout /></Link>;
      default: return null;
    }
  };

  return (
    <>
    <div className="flex h-screen w-full overflow-hidden relative">
      <Sidebar activePage={activePage} setActivePage={setActivePage} isOpen={sidebarOpen} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-brightness-40  z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="flex-1 p-4 md:p-6 bg-gray-100 overflow-auto w-full">
        <div className="md:hidden mb-4">
          <button onClick={() => setSidebarOpen(true)} className="text-2xl">
            <FaBars />
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
    </>
  );
}


const initialOffers = [
  { id: 1, title: "Frontend Developer", applicants: 12 },
  { id: 2, title: "Backend Developer", applicants: 8 },
  { id: 3, title: "UI/UX Designer", applicants: 5 },
];

function YourOffers() {
  const [offers, setOffers] = useState(initialOffers);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Job Offers</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search offers... (press / to search)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchRef}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-blue-700">
            <Filter size={16} /> Filter
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-green-700">
            <Plus size={16} /> Add Offer
          </button>
        </div>
      </div>

      {searchOpen && search && (
        <div className="mb-4 text-sm text-gray-600">Searching for: <strong>{search}</strong></div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <div key={offer.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2">{offer.title}</h2>
            <p className="text-sm text-gray-600 mb-4">Applicants: {offer.applicants}</p>
            <div className="flex justify-between">
              <button className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                <Edit size={14} /> Edit
              </button>
              <button className="text-purple-600 hover:underline text-sm flex items-center gap-1">
                <Users size={14} /> View Applicants
              </button>
              <button className="text-red-600 hover:underline text-sm flex items-center gap-1">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
