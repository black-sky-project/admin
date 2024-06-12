import {useState} from "react";
import {postUniversity} from "../controllers/universityController.ts";
import '../styles/CreateForm.css'

function UniversityAddForm() {
	const [name, setName] = useState('');

	const handleCreateUniversity = async(e: React.FormEvent) => {
		e.preventDefault();
		await postUniversity(name);
	}

	return (
		<div>
			<p>Add University</p>
			<form onSubmit={handleCreateUniversity}>
				<div>
					<label>
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default UniversityAddForm;