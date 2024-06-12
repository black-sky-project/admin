import userClient from "../Api.ts";
import {postAdminDto, postMentorDto, postStudentDto} from "../dtos/userDtos.ts";

export const getAllUsers = async () => {
	const response = await userClient.get('/api/v1/users/get/list/all');
	return response.data;
}

export const getAdmins = async () => {
	const response = await userClient.get('/api/v1/users/get/list/admins');
	return response.data;
}

export const getMentors = async (departmentId?: number, universityId?: number) => {
	const response = await userClient.get('/api/v1/users/get/list/mentors', {
		params: {
			departmentId: departmentId,
			universityId: universityId,
		}
	});
	return response.data;
}

export const postStudent = async (studentData: postStudentDto) => {
	const response = await userClient.post('/api/v1/users/new/student', studentData);
	return response.data;
}

export const postMentor = async (mentorData: postMentorDto) => {
	const response = await userClient.post('/api/v1/users/new/mentor', mentorData);
	return response.data;
}

export const postAdmin = async (adminData: postAdminDto) => {
	const response = await userClient.post('/api/v1/users/new/admin', adminData);
	return response.data;
}

export const deleteUser = async(id: number) => {
	const response = await userClient.delete('/api/v1/users/delete', {
		params: {
			id: id,
		}
	});
	return response.data;
}