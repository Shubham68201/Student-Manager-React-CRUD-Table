import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import StudentsPage from './pages/StudentsPage'
import StudentForm from './components/StudentForm'

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Toaster position="top-right" />
      <div className="navbar bg-base-100 shadow-sm mb-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Student Admin</a>
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/students" replace />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
