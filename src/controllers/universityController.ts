import userClient from "../Api.ts";

export const getUniversities = async() => {
	const response = await userClient.get('api/v1/universities/get/list');
	return response.data;
}

export const postUniversity = async (universityName: string) => {
	const response = await userClient.post('/api/v1/universities/new', universityName);
	return response.data;
}

export const deleteUniversity = async(id: number) => {
	const response = await userClient.delete('/api/v1/universities/delete', {
		params: id
	});
	return response.data;
}
