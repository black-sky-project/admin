import {useState} from "react";
import {postStudent} from "../../controllers/userController.ts";
import '../../styles/CreateForm.css'

function StudentCreateForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState('');
	const [degree, setDegree] = useState('');
	const [department, setDepartment] = useState('');

	const handleCreateStudent = async(e: React.FormEvent) => {
		e.preventDefault();
		await postStudent({name: username, password: password, login: login, acquiringDegree: degree, departmentId: department});
	}

	// TODO: Parse degree and departments.
	return (
		<div className="create-form-container">
			<p>Create Student</p>
			<form onSubmit={handleCreateStudent}>
				<div>
					<label>
						Username:
						<input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Login:
						<input type="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Degree:
						<input type="text" value={degree} onChange={(e) => setDegree(e.target.value)}/>
					</label>
				</div>
				<div>
					<label>
						Department:
						<input type="text" value={department} onChange={(e) => setDepartment(e.target.value)}/>
					</label>
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	)
}

export default StudentCreateForm;