import '../styles/Dashboard.css'
import {useEffect, useState} from "react";
import {UserDto} from "../dtos/userDtos.ts";
import {getAllUsers} from "../controllers/userController.ts";

function Dashboard() {
	const [users, setUsers] = useState<UserDto[]>([]);
	const token = localStorage.getItem('authToken');
	if (!token) {
		console.error('No auth token found');
		return null;
	}

	const handleGetAllUsers = async () => {
		try {

			const allUsers: UserDto[] = await getAllUsers();
			setUsers(allUsers);
		} catch (error) {
			console.error("Error getting users", error);
		}
	}

	useEffect(() => {
		handleGetAllUsers();
	}, []);

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<div>{user.name}</div>
					</li>
				))}
			</ul>
		</div>
	)
}


export default Dashboard;