import userClient from "../Api.ts";
import {PostDepartmentDto} from "../dtos/departmentDtos.ts";

export const getDepartments = async(universityId?: number) => {
	const response = await userClient.get('/api/v1/departments/get/list', {
		params: {
			universityId: universityId,
		}
	});
	return response.data;
}

export const postDepartment = async(departmentData: PostDepartmentDto) => {
	const response = await userClient.post('/api/v1/offers/new', departmentData);
	return response.data;
}

export const deleteDepartment = async(id: number) => {
	const response = await userClient.delete('/api/v1/offers/delete', {
		params: {
			id: id,
		}
	});
	return response.data;
}