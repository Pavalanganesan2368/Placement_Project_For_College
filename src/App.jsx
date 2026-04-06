import { useState } from 'react'
import { Landmark } from 'lucide-react'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      status: 'Live on Profile',
      title: 'Quantum CRM',
      description: 'A high-luxury enterprise CRM interface...',
      techStack: ['Next.js', 'PostgreSQL'],
      theme: 'green'
    },
    {
      status: 'Live on Profile',
      title: 'SecurChain Auth Service',
      description: 'Blockchain-based identity verification...',
      techStack: ['Solidity', 'Node.js', 'Azure'],
      theme: 'dark'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    tech: '',
    description: '',
    live: '',
    repo: '',
    media: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitForm = () => {
    if (formData.title.trim()) {
      const newProject = {
        status: 'Live on Profile',
        title: formData.title,
        description: formData.description,
        techStack: formData.tech.split(',').map(t => t.trim()),
        theme: 'blue'
      };
      setProjects(prev => [...prev, newProject]);
      setFormData({
        title: '',
        tech: '',
        description: '',
        live: '',
        repo: '',
        media: ''
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      {/* Navbar */}
      <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm mb-8">
        {/* Group: Icon + Text */}
        <div className="flex items-center gap-2 group">
          <Landmark className="w-6 h-6 text-blue-600 group-hover:text-blue-800 group-hover:scale-110 transition-all duration-300" />
          <h1 className="font-bold text-lg text-blue-600">GCE Srirangam</h1>
        </div>
        
        {/* Menu */}
        <div className="flex gap-6">
          <p className="text-gray-700 hover:text-blue-600 hover:animate-pulse hover:scale-110 hover:shadow-lg cursor-pointer transition-all duration-300 px-2 py-1 rounded">Home</p>
          <p className="text-blue-600 border-b-2 border-blue-600 hover:animate-pulse hover:scale-110 hover:shadow-lg cursor-pointer transition-all duration-300 px-2 py-1 rounded">Projects</p>
          <p className="text-gray-700 hover:text-blue-600 hover:animate-pulse hover:scale-110 hover:shadow-lg cursor-pointer transition-all duration-300 px-2 py-1 rounded">Notification</p>
        </div>
        
        {/* Avatar */}
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>

      {/* Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2">Portfolio Projects</h1>
        <p className="text-gray-500 mb-6">Showcase your technical excellence.</p>
      </div>

      {/* Post New Project Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">+</span>
          <h2 className="font-semibold text-blue-600">Post New Project</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
            <input
              className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Distributed Cloud Engine"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
            <input
              className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
              placeholder="React, Node.js, AWS"
              name="tech"
              value={formData.tech}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
            placeholder="Describe your project..."
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Live Link</label>
            <input
              className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
              placeholder="https://..."
              name="live"
              value={formData.live}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Repository</label>
            <input
              className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
              placeholder="GitHub/GitLab"
              name="repo"
              value={formData.repo}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Media Link</label>
          <input
            className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:outline-none"
            placeholder="YouTube / Demo"
            name="media"
            value={formData.media}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            onClick={handleSubmitForm}
          >
            Add Project to Portfolio
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className={`p-4 ${project.theme === 'green' ? 'bg-green-500' : project.theme === 'dark' ? 'bg-gray-800' : 'bg-blue-500'} text-white`}>
              <p className="text-sm font-medium">{project.status}</p>
              <h3 className="text-lg font-bold mt-1">{project.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-center gap-6 text-gray-500 text-sm">
        <p>© 2024 GCE Placement Cell</p>
        <p>Support Center</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>

    </div>
  );
}

export default App;
