import '../styles/Auth.css'
import {useState} from "react";
import axios from 'axios'

interface AuthProps {
	setIsAuthenticated: (isAuthenticated: boolean) => void;
}

function Auth({setIsAuthenticated}: AuthProps) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post('/api/v1/auth/login', {
				'login': username,
				'password': password,
			});

			const token: string = response.data;
			console.log(response.data);
			localStorage.setItem('authToken', token);
			console.log(localStorage.getItem('authToken'));
			setIsAuthenticated(true);
		} catch (error) {
			setError('Login failed. Please check your credentials and try again.');
			console.error('Error during login:', error);
		}
	};

	return (
		<div className="auth-container">
			<div>
				<form onSubmit={handleSubmit}>
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
					{error && <p>{error}</p>}
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
}

export default Auth;