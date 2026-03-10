import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent } from '../redux/studentsSlice';
import toast from 'react-hot-toast';

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isEditMode = Boolean(id);
  const students = useSelector((state) => state.students.students);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  useEffect(() => {
    if (isEditMode) {
      const studentToEdit = students.find(s => s.id === id);
      if (studentToEdit) {
        setFormData(studentToEdit);
      } else {
        toast.error('Student not found');
        navigate('/students');
      }
    }
  }, [id, isEditMode, students, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email format');
      return;
    }

    if (isEditMode) {
      dispatch(updateStudent(formData));
      toast.success('Student updated successfully!');
    } else {
      const newStudent = {
        ...formData,
        id: Date.now().toString(), // Generate a simple unique ID
      };
      dispatch(addStudent(newStudent));
      toast.success('Student added successfully!');
    }
    navigate('/students');
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">{isEditMode ? 'Edit Student' : 'Add New Student'}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="input input-bordered w-full focus:input-primary" 
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="input input-bordered w-full focus:input-primary" 
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input 
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="20" 
                className="input input-bordered w-full focus:input-primary" 
                min="1"
                max="120"
                required
              />
            </div>

            <div className="card-actions justify-end mt-6">
              <button 
                type="button" 
                className="btn btn-ghost"
                onClick={() => navigate('/students')}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {isEditMode ? 'Update' : 'Save'} Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
