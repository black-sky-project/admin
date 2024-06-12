export interface CourseDto {
	id: number;
	degree: Degree;
	name: string;
	departmentId: number;
}

export interface PostCourseDto {
	degree: Degree;
	name: string;
	departmentId: number;
}