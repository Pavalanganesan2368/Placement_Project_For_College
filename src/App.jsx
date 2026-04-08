import { useState, useRef } from "react";
import "./App.css";

export default function ProfilePage() {
  const fileRef = useRef();

  const [profile, setProfile] = useState({
    name: "Alex Harrison",
    degree: "B.E Computer Science and Engineering",
    college: "Government College of Engineering, Srirangam",
    skills: ["PYTHON", "JAVA"],
    image: null,
    about:
      "Aspiring Software Engineer with a strong foundation in full-stack development and cloud technologies.",
    contact: {
      phone: "+1 (255) 800-4254",
      email: "dalwin@gmail.com",
      address: "Sundarapandiyam",
    },
    experience: [
      {
        role: "Software Engineer Intern",
        company: "Tech Innovation Lab",
        duration: "May 2023 - Aug 2023",
        description: "Improved system latency by 20%",
      },
    ],
    education: [
      {
        college: "GCE Srirangam",
        degree: "B.Tech CSE",
        year: "2020-2024",
        grade: "3.9",
      },
    ],
    projects: [
      {
        title: "CloudScaler",
        desc: "Cloud resource optimization system.",
      },
      {
        title: "SecureAuth",
        desc: "Blockchain-based IAM system.",
      },
    ],
  });

  // ✅ FIXED: separate function
  const updateAbout = () => {
    const newAbout = prompt("Update About", profile.about);
    if (newAbout) setProfile({ ...profile, about: newAbout });
  };

  const addEducation = () => {
    const college = prompt("College Name");
    const degree = prompt("Degree");

    if (college && degree) {
      setProfile({
        ...profile,
        education: [...profile.education, { college, degree }],
      });
    }
  };

  const calculateCompletion = () => {
    let total = 5;
    let filled = 0;

    if (profile.about) filled++;
    if (profile.contact.email) filled++;
    if (profile.education.length) filled++;
    if (profile.projects.length) filled++;
    if (profile.experience.length) filled++;

    return Math.floor((filled / total) * 100);
  };

  const completion = calculateCompletion();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfile({ ...profile, image: url });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      {/* HEADER */}
      <div className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between items-center">
        <h1 className="font-bold">GCE Srirangam</h1>
        <button className="text-blue-600">← Go to Home</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* PROFILE */}
          <div className="bg-white rounded-2xl shadow p-6 relative">
            <div
              className="cursor-pointer"
              onClick={() => fileRef.current.click()}
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 overflow-hidden">
                {profile.image && (
                  <img
                    src={profile.image}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <input
                type="file"
                ref={fileRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
            <p>{profile.degree}</p>
          </div>

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between">
              <h2>About</h2>
              <button onClick={updateAbout}>✏️</button>
            </div>
            <p>{profile.about}</p>
          </div>

          {/* EDUCATION */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between">
              <h2>Education</h2>
              <button onClick={addEducation}>➕</button>
            </div>

            {profile.education.map((edu, i) => (
              <div key={i} className="mt-3">
                <h3>{edu.college}</h3>
                <p>{edu.degree}</p>
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2>Projects</h2>
            {profile.projects.map((proj, i) => (
              <div key={i} className="mt-2">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between">
              <span>Profile Completion</span>
              <span>{completion}%</span>
            </div>
            <div className="bg-gray-200 h-2 mt-2">
              <div
                className="bg-blue-600 h-2"
                style={{ width: `${completion}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  
