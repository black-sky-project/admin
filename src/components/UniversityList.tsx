import {useEffect, useState} from "react";
import {UniversityDto} from "../dtos/universityDtos.ts";
import {deleteUniversity, getUniversities} from "../controllers/universityController.ts";
import '../styles/EntityList.css'


function UniversityList() {
	const [universities, setUniversities] = useState<UniversityDto[]>([]);

	const handleGetAllUniversities = async () => {
		try {
			const allUniversities: UniversityDto[] = await getUniversities();
			setUniversities(allUniversities);
		} catch (error) {
			console.error("Error getting universities", error);
		}
	}

	useEffect(() => {
		handleGetAllUniversities();
	}, []);

	const handleDeleteUniversity = async (id: number) => {
		try {
			await deleteUniversity(id);
			console.log(`University with id ${id} deleted successfully.`);
		} catch (error) {
			console.error('Error deleting university', error);
		}
	}

	return (
		<div>
			<ul>
				{universities.map((university) => (
					<li key={university.id}>
						<div>
							{university.name}
							<button onClick={() => handleDeleteUniversity(university.id)}>Delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UniversityList;