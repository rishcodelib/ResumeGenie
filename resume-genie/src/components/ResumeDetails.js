import React, { useState } from 'react';

const ResumeDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber1, setContactNumber1] = useState('');
  const [contactNumber2, setContactNumber2] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState([{ company: '', position: '', years: '' }]);
  const [education, setEducation] = useState([{ institute: '', city: '', state: '', country: '', year: '', degree: '', specialization: '' }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const skillsArray = skills.split(',').map(skill => skill.trim());
    const resumeDetails = {
      firstName,
      lastName,
      contactNumber1,
      contactNumber2,
      address,
      email,
      skills: skillsArray,
      experience,
      education
    };
    console.log('Resume Details:', resumeDetails);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', years: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { institute: '', city: '', state: '', country: '', year: '', degree: '', specialization: '' }]);
  };

  return (
    <div className="container mt-5">
      <h2>Enter Resume Details</h2>
      <form onSubmit={handleSubmit} className="row" >
        <div className="mb-3 col-md-6 col-md-6">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-6 col-md-6">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-6 col-md-6">
          <label className="form-label">Contact Number 1:</label>
          <input
            type="tel"
            className="form-control"
            value={contactNumber1}
            onChange={(e) => setContactNumber1(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Contact Number 2 (if any):</label>
          <input
            type="tel"
            className="form-control"
            value={contactNumber2}
            onChange={(e) => setContactNumber2(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Address:</label>
          <textarea
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-12">
          <label className="form-label">Skills (comma separated):</label>
          <input
            type="text"
            className="form-control"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label">Experience:</label>
          {experience.map((exp, index) => (
            <div key={index} className="mb-3 ">
              <input
                type="text"
                className="form-control mb-2" placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Years"
                value={exp.years}
                onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addExperience}>Add Experience</button>
        </div>
        <div className="mb-3 ">
          <label className="form-label">Educational Qualifications:</label>
          {education.map((edu, index) => (
            <div key={index} className="mb-3 ">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Institute Name"
                value={edu.institute}
                onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="City"
                value={edu.city}
                onChange={(e) => handleEducationChange(index, 'city', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="State"
                value={edu.state}
                onChange={(e) => handleEducationChange(index, 'state', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Country"
                value={edu.country}
                onChange={(e) => handleEducationChange(index, 'country', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Year of Passing"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Specialization"
                value={edu.specialization}
                onChange={(e) => handleEducationChange(index, 'specialization', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addEducation}>Add Education</button>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResumeDetails;