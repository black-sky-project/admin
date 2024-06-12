import {useState} from 'react';
import '../styles/Dashboard.css';
import UserList from './UserList.tsx';
import AdminCreateForm from './UserCreateForm/AdminCreateForm.tsx';
import StudentCreateForm from './UserCreateForm/StudentCreateForm.tsx';
import MentorCreateForm from './UserCreateForm/MentorCreateForm.tsx';
import UniversityAddForm from "./UniversityAddForm.tsx";
import DepartmentAddForm from "./DepartmentAddForm.tsx";
import CourseAddForm from "./CourseAddForm.tsx";

function Dashboard() {
	const [activeForm, setActiveForm] = useState('admin');
	const token = localStorage.getItem('authToken');

	if (!token) {
		console.error('No auth token found');
		return null;
	}

	return (
		<>
			<UserList/>
			<div className="form-selector">
				<select
					value={activeForm}
					onChange={(e) => setActiveForm(e.target.value)}
				>
					<option value="admin">Create Admin</option>
					<option value="student">Create Student</option>
					<option value="mentor">Create Mentor</option>
					<option value="university">Add University</option>
					<option value="department">Add Department</option>
					<option value="course">Add Course</option>
				</select>
			</div>
			{activeForm === 'admin' && <AdminCreateForm/>}
			{activeForm === 'student' && <StudentCreateForm/>}
			{activeForm === 'mentor' && <MentorCreateForm/>}
			{activeForm === 'university' && <UniversityAddForm/>}
			{activeForm === 'department' && <DepartmentAddForm/>}
			{activeForm === 'course' && <CourseAddForm/>}
		</>
	);
}

export default Dashboard;
