import React from 'react'

const Stepfour = ({formData, setFormData}) => {

  const handleAddSkill = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: [...prevFormData.skills, ''],
    }));
  };

  const handleSkillChange = (index, value) => {
    setFormData((prevFormData) => {
      const updatedSkills = [...prevFormData.skills];
      updatedSkills[index] = value;
      return {
        ...prevFormData,
        skills: updatedSkills,
      };
    });
  }

  const renderSkills = () => {
    return formData.skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ));
  };

  console.log(formData)

  return (
    <div>Add Skills
      <h4>Skills</h4>
      {formData.skills.map((skill, index) => (
        <input
          key={index}
          type="text"
          value={skill}
          onChange={(e) => handleSkillChange(index, e.target.value)}
          placeholder="Skill"
        />
      ))}

      <button onClick={handleAddSkill}>+</button>
      <div>
        {renderSkills()}
      </div>
      
    </div>
  )
}

export default Stepfour;