import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/studentsSlice';
import toast from 'react-hot-toast';

const StudentTable = ({ students }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Show daisyUI modal dynamically or just use window.confirm for simplicity?
    // The requirement says "Use DaisyUI modal for Delete Confirmation".
    // We will handle the modal in the parent or implement it here.
    // Let's implement modal logic here.
    const modal = document.getElementById(`delete_modal_${id}`);
    if (modal) {
      modal.showModal();
    }
  };

  const confirmDelete = (id) => {
    dispatch(deleteStudent(id));
    toast.success('Student deleted successfully!');
  };

  return (
    <div className="overflow-x-auto bg-base-100 shadow-xl rounded-box">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover">
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td className="flex justify-center gap-2">
                <button
                  onClick={() => navigate(`/edit-student/${student.id}`)}
                  className="btn btn-sm btn-info btn-square"
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="btn btn-sm btn-error btn-square"
                  title="Delete"
                >
                  <FaTrash />
                </button>

                <dialog id={`delete_modal_${student.id}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Delete</h3>
                    <p className="py-4">Are you sure you want to delete {student.name}?</p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn mr-2" onClick={() => confirmDelete(student.id)}>Yes, Delete</button>
                        <button className="btn btn-ghost">Cancel</button>
                      </form>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
