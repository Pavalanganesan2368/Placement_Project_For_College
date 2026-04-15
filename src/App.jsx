import { useState } from "react";

const studentsData = [
  { name: "Adithya K", dept: "Computer Science (CSE)", cgpa: 8.92, sem: 7, profile: 95 },
  { name: "Priya M", dept: "Electronics (ECE)", cgpa: 7.5, sem: 7, profile: 100 },
  { name: "Rahul S", dept: "Mechanical (MECH)", cgpa: 8.1, sem: 5, profile: 65 },
  { name: "Sneha R", dept: "Civil Engineering", cgpa: 7.85, sem: 7, profile: 85 },
  { name: "Vijay T", dept: "Electrical (EEE)", cgpa: 9.1, sem: 7, profile: 100 },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = studentsData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const getColor = (p) => {
    if (p >= 90) return "bg-green-500";
    if (p >= 80) return "bg-blue-500";
    if (p >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* 🔹 FILTER BAR */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex gap-3 items-center flex-wrap">
            <span className="text-gray-500">Filters:</span>

            <select className="border px-3 py-1 rounded">
              <option>Department: All</option>
            </select>

            <select className="border px-3 py-1 rounded">
              <option>CGPA: &gt; 7.0</option>
            </select>

            <select className="border px-3 py-1 rounded">
              <option>Profile: &gt; 80%</option>
            </select>

            <select className="border px-3 py-1 rounded">
              <option>Semester: 7</option>
            </select>

            <button className="text-blue-600 ml-4">
              Clear all filters
            </button>
          </div>

          {/* 🔍 SEARCH + EXPORT */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Export CSV
            </button>
          </div>
        </div>

        {/* 🔹 TABLE */}
        <div className="bg-white rounded-xl shadow">
          <div className="grid grid-cols-6 p-4 bg-gray-100 text-sm font-semibold">
            <div>Student Name</div>
            <div>Department</div>
            <div>CGPA</div>
            <div>Semester</div>
            <div>Profile Completion</div>
            <div>Actions</div>
          </div>

          {filtered.map((s, i) => (
            <div key={i} className="grid grid-cols-6 p-4 border-t items-center">
              
              {/* Name + Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold">
                  {s.name[0]}
                </div>
                <span className="font-medium">{s.name}</span>
              </div>

              <div>{s.dept}</div>
              <div className="font-semibold">{s.cgpa}</div>
              <div>{s.sem}</div>

              {/* Progress */}
              <div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className={`h-2 rounded ${getColor(s.profile)}`}
                    style={{ width: `${s.profile}%` }}
                  />
                </div>
                <span className="text-sm ml-2">{s.profile}%</span>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="text-blue-600">View Profile</button>
                <button className="text-red-500">Delete student</button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 PAGINATION */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500">
            Showing 1 to 5 of 450 students
          </p>

          <div className="flex items-center gap-2">
            <button className="px-2">&lt;</button>

            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              1
            </button>
            <button className="px-3 py-1">2</button>
            <button className="px-3 py-1">3</button>
            <span>...</span>
            <button className="px-3 py-1">90</button>

            <button className="px-2">&gt;</button>
          </div>
        </div>

        {/* 🔹 CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Eligible Students</h2>
            <p className="text-3xl font-bold">342</p>
            <p className="text-green-500 text-sm">↑ 12 from last cycle</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Placed Students</h2>
            <p className="text-3xl font-bold">128</p>
            <p className="text-blue-500 text-sm">37.4% Success Rate</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Pending Profiles</h2>
            <p className="text-3xl font-bold">56</p>
            <p className="text-yellow-500 text-sm">Follow-up required</p>
          </div>

        </div>
      </div>
    </div>
  );
}