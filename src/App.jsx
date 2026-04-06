import React, { useState, useEffect } from "react";
import bellIcon from "./assets/notification.png";
import "./App.css";

function App() {
  const [hasNotification, setHasNotification] = useState(false);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      cgpa: "8.5+",
      deadline: "Oct 25, 2023",
      status: "Active",
      posted: "2h ago",
    },
  ]);

  const [stats, setStats] = useState({
    totalJobs: 1,
    weeklyPosted: 1,
    registeredStudents: 1248,
    appliedToday: 156,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newJob = {
        id: Date.now(),
        company: ["Amazon", "Microsoft", "Infosys"][
          Math.floor(Math.random() * 3)
        ],
        role: "Software Engineer",
        cgpa: "7.5+",
        deadline: "Nov 10, 2023",
        status: "Active",
        posted: "Just now",
      };

      setJobs((prev) => [newJob, ...prev]);

      setStats((prev) => ({
        ...prev,
        totalJobs: prev.totalJobs + 1,
        weeklyPosted:
          Math.random() > 0.4
            ? prev.weeklyPosted + 1
            : prev.weeklyPosted,
        appliedToday: prev.appliedToday + Math.floor(Math.random() * 10),
      }));

      setHasNotification(true);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        registeredStudents:
          prev.registeredStudents + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const WEEKLY_TARGET = 100;

  const progress = Math.min(
    (stats.weeklyPosted / WEEKLY_TARGET) * 100,
    100
  );

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ NAVBAR FIXED */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm">

        {/* Left Side */}
        <div className="flex items-center gap-30 ">

          {/* Logo */}
          <div>
            <h1 className="font-bold text-lg md:text-xl">GCE Srirangam</h1>
            <p className="text-xs md:text-base text-gray-500">Placement Cell</p>
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-6">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-500">Jobs</span>
            <span className="text-gray-500">Students</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => setHasNotification(false)}
          >
            <img src={bellIcon} alt="bell" className="w-5 h-5 md:w-6 md:h-6" />
            {hasNotification && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </div>

          <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-300 rounded-full"></div>
        </div>

      </div>

      {/* 🔹 CONTENT */}
      <div className="px-4 md:px-10 py-6 md:py-8">

        <h2 className="font-montserrat text-2xl md:text-4xl font-bold mb-2">
          Admin Dashboard Overview
        </h2>

        <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-lg">
          Welcome back, Admin. Here's what's happening today in the placement portal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* JOB FEED */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">
              Recent Job Activity Feed
            </h3>

            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-sm mb-4"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-lg"></div>

                  <div>
                    <h4 className="font-semibold text-base md:text-lg">{job.company}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {job.role} | CGPA: {job.cgpa}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Deadline: {job.deadline}
                    </p>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs md:text-sm">
                    ● {job.status}
                  </span>
                  <p className="text-gray-400 text-xs mt-2">
                    Posted {job.posted}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
              <h3 className="font-montserrat font-bold mb-4 text-base md:text-lg">📊 Job Statistics</h3>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Total Active Jobs</span>
                <span className="text-2xl md:text-3xl font-bold text-blue-600">
                  {stats.totalJobs}
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded mt-4">
                <div
                  className="bg-blue-600 h-2 rounded transition-all duration-700"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between mt-4 text-xs md:text-sm">
                <span className="text-gray-500">Posted This Week</span>
                <span className="font-semibold">
                  {stats.weeklyPosted}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
              <h3 className="font-montserrat font-bold mb-4 text-base md:text-lg">👥 Student Engagement</h3>

              <div className="flex justify-between mb-4">
                <span className="text-gray-500 text-sm">Total Registered</span>
                <span className="font-bold">
                  {stats.registeredStudents}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Applied Today</span>
                <span className="font-bold">
                  {stats.appliedToday}
                </span>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300 text-sm md:text-base">
                Generate Engagement Report
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;