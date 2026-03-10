import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStudents, setLoading } from '../redux/studentsSlice';
import StudentTable from '../components/StudentTable';
import StudentsChart from '../components/StudentsChart';
import Loader from '../components/Loader';
import dummyData from '../data/students.json';
import { exportToExcel } from '../utils/exportExcel';
import { FaDownload, FaPlus } from 'react-icons/fa';

const StudentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loading } = useSelector((state) => state.students);

  useEffect(() => {
    // Only fetch if students array is empty (to preserve state on back navigation)
    if (students.length === 0) {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setStudents(dummyData));
        dispatch(setLoading(false));
      }, 1000);
    }
  }, [dispatch, students.length]);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Students Management</h1>
        <div className="flex gap-2">
          <button 
            className="btn btn-outline btn-success"
            onClick={() => exportToExcel(students)}
            disabled={loading || students.length === 0}
          >
            <FaDownload className="mr-2" />
            Download Excel
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/add-student')}
            disabled={loading}
          >
            <FaPlus className="mr-2" />
            Add Student
          </button>
        </div>
      </div>
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <StudentsChart students={students} />
          <StudentTable students={students} />
        </>
      )}
    </div>
  );
};

export default StudentsPage;
