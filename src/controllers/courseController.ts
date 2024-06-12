import userClient from "../Api";
import {PostCourseDto} from "../dtos/courseDtos.ts";

export const getCourses = async (departmentId?: number, universityId?: number) => {
	const response = await userClient.get(`/api/v1/courses/get/list/`, {
		params: {
			departmentId: departmentId,
			universityId: universityId,
		}
	});
	return response.data;
}

export const postCourse = async (courseData: PostCourseDto) => {
	const response = await userClient.post('/api/v1/courses/new', courseData);
	return response.data;
}

export const deleteCourse = async (id: number) => {
	const response = await userClient.delete('/api/v1/course/delete', {
		params: {
			id: id,
		}
	});
	return response.data;
}