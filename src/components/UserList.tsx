import {useEffect, useState} from "react";
import {UserDto} from "../dtos/userDtos.ts";
import {deleteUser, getAllUsers} from "../controllers/userController.ts";
import '../styles/EntityList.css'


function UserList() {
	const [users, setUsers] = useState<UserDto[]>([]);

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

	const handleDeleteUser = async (id: number) => {
		try {
			await deleteUser(id);
			console.log(`User with id ${id} deleted successfully.`);
		} catch (error) {
			console.error('Error deleting user', error);
		}
	}

	return (
		<div className="list-container">
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<div>
							{user.name}
							<button onClick={() => handleDeleteUser(user.id)}>Delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserList;