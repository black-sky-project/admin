import {useState} from "react";
import {postDepartment} from "../controllers/departmentController.ts";
import '../styles/CreateForm.css'

function DepartmentAddForm() {
	const [name, setName] = useState('');
	const [universityId, setUniversityId] = useState('');

	const handleAddDepartment = async(e: React.FormEvent) => {
		e.preventDefault();
		await postDepartment({universityId: universityId, name: name});
	}

	// TODO: Parse universities
	return (
		<div>
			<p>Add Department</p>
			<form onSubmit={handleAddDepartment}>
				<div>
					<label>
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						University ID:
						<input type="text" value={universityId} onChange={(e) => setUniversityId(e.target.value)}/>
					</label>
				</div>
				<button type="submit">Add</button>
			</form>
		</div>
	)
}

export default DepartmentAddForm;