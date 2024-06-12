import {useState} from "react";
import {postAdmin} from "../../controllers/userController.ts";
import '../../styles/CreateForm.css'

function AdminCreateForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState('');

	const handleCreateAdmin = async(e: React.FormEvent) => {
		e.preventDefault();
		await postAdmin({name: username, password: password, login: login});
	}

	return (
		<div>
			<p>Create Admin</p>
			<form onSubmit={handleCreateAdmin}>
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
				<button type="submit">Create</button>
			</form>
		</div>
)
}

export default AdminCreateForm;