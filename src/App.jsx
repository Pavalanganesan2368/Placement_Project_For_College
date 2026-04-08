import { useState, useRef } from "react";
import './App.css';

export default function ProfilePage() {
  const fileRef = useRef();
  const [profile, setProfile] = useState({
    name: "Alex Harrison",
    degree: "B.E Computer Science and Engineering",
    college: "Government College of Engineering, Srirangam",
    skills: ["PYTHON", "JAVA"],
    image: null,
    about: "Aspiring Software Engineer with a strong foundation in full-stack development and cloud technologies. Passionate about building scalable, high-performance applications that solve real-world problems. Experienced in Java, Python, and modern development frameworks, with hands-on project experience in distributed systems. Actively seeking opportunities to contribute, learn, and grow in a dynamic tech environment.",
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
  desc: "CloudScaler is an intelligent cloud resource optimization platform that dynamically scales infrastructure based on real-time usage.  "
},
{
  title: "SecureAuth",
  desc: "SecureAuth is a blockchain-based identity and access management system designed for secure authentication. "
}
    ],
  });

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
  const goHome = () => {
  window.location.href = "/";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      {/* HEADER */}
      <div className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">🎓</div>
          <div>
            <h1 className="font-bold">GCE Srirangam</h1>
            <p className="text-sm text-gray-500">Placement Cell</p>
          </div>
        </div>
        <button className="text-blue-600 text-sm">← Go to Home</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="h-32 sm:h-40 bg-gradient-to-r from-indigo-500 to-gray-400"></div>

            <div className="p-4 sm:p-6 relative">
              <div
                className="absolute -top-12 sm:-top-16 left-4 sm:left-6 cursor-pointer"
                onClick={() => fileRef.current.click()}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-blue-600 overflow-hidden">
                  {profile.image && (
                    <img src={profile.image} className="w-full h-full object-cover" />
                  )}
                </div>
                <input type="file" ref={fileRef} onChange={handleImageUpload} className="hidden" />
              </div>

              <div className="mt-12 sm:mt-16">
                <h2 className="text-xl sm:text-2xl font-bold">{profile.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{profile.degree}</p>
                <p className="text-gray-500 text-sm">🎓 {profile.college}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {profile.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        {/* ABOUT */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
            <div className="flex justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">About</h2>
              <button onClick={updateAbout}>✏️</button>
            </div>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{profile.about}</p>
          </div>
          

         {/* EDUCATION */}
<div className="bg-white mt-6 p-6 rounded-2xl shadow">
  <div className="flex justify-between">
    <h2 className="text-xl font-semibold">Education</h2>
    <button onClick={addEducation}>➕</button>
  </div>

  {profile.education.map((edu, i) => (
    <div key={i} className="mt-3">
      <h3 className="font-bold">{edu.college}</h3>
      <p className="text-gray-500">{edu.degree}</p>
      <p className="text-sm text-gray-400">{edu.year}</p>
      <p className="text-gray-600">Grade: {edu.grade}</p>
    </div>
  ))}
</div>

            {/* PROJECTS MOVED LEFT */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
            <h2 className="text-lg sm:text-xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {profile.projects.map((proj, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h3 className="font-bold">{proj.title}</h3>
                  <p className="text-gray-600 text-sm">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* RIGHT SIDEBAR */}
        <div className="space-y-4">
          {/* PROFILE COMPLETION */}
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between">
              <span className="font-medium">Profile Completion</span>
              <span className="text-blue-600">{completion}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded">
              <div className="bg-blue-600 h-2 rounded" style={{ width: `${completion}%` }}></div>
            </div>
          </div>

          {/* PLACEMENT STATUS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Placement Status</h3>
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm">
              ✔ Open to Internships
              <p>Actively looking for Summer 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 