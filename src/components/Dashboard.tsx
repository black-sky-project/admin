import {useState} from 'react';
import '../styles/Dashboard.css';
import UserList from './UserList.tsx';
import AdminCreateForm from './UserCreateForm/AdminCreateForm.tsx';
import StudentCreateForm from './UserCreateForm/StudentCreateForm.tsx';
import MentorCreateForm from './UserCreateForm/MentorCreateForm.tsx';
import UniversityAddForm from "./UniversityAddForm.tsx";
import DepartmentAddForm from "./DepartmentAddForm.tsx";
import CourseAddForm from "./CourseAddForm.tsx";
import UniversityList from "./UniversityList.tsx";

function Dashboard() {
	const [activeForm, setActiveForm] = useState('admin');
	const [activeList, setActiveList] = useState('user');
	const token = localStorage.getItem('authToken');

	if (!token) {
		console.error('No auth token found');
		return null;
	}

	return (
		<>
			<div className="form-selector">
				<select value={activeList}
				onChange={(e) => setActiveList(e.target.value)}
				>
					<option value="user">View Users</option>
					<option value="university">View Universities</option>
				</select>
			</div>
			{activeList === 'user' && <UserList/>}
			{activeList === 'university' && <UniversityList/>}

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
