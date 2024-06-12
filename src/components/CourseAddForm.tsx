import {useState} from "react";
import {postCourse} from "../controllers/courseController.ts";
import '../styles/CreateForm.css'

function CourseAddForm() {
	const [name, setName] = useState('');
	const [departmentId, setDepartmentId] = useState('');
	const [degree, setDegree] = useState('');

	const handleAddCourse = async(e: React.FormEvent) => {
		e.preventDefault();
		await postCourse({degree: degree, name: name, departmentId: departmentId});
	}

	// TODO: Parse departments and degrees
	return (
		<div>
			<p>Add Department</p>
			<form onSubmit={handleAddCourse}>
				<div>
					<label>
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Department ID:
						<input type="text" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Degree:
						<input type="text" value={degree} onChange={(e) => setDegree(e.target.value)}/>
					</label>
				</div>
				<button type="submit">Add</button>
			</form>
		</div>
	)
}

export default CourseAddForm;