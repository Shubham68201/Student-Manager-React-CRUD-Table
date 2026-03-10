import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  loading: false,
};

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
  },
});

export const { setLoading, setStudents, addStudent, updateStudent, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
