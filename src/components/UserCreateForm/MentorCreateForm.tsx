import {useState} from "react";
import {postMentor} from "../../controllers/userController.ts";
import '../../styles/CreateForm.css'

function MentorCreateForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState('');
	const [bio, setBio] = useState('');
	const [department, setDepartment] = useState('');

	const handleCreateMentor = async(e: React.FormEvent) => {
		e.preventDefault();
		await postMentor({name: username, password: password, login: login, bio: bio, departmentId: department});
	}

	return (
		<div>
			<p>Create Mentor</p>
			<form onSubmit={handleCreateMentor}>
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
						Bio:
						<input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
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

export default MentorCreateForm;