enum degree { Bachelor, Master }

export interface CourseDto {
	id: number;
	degree: degree;
	name: string;
	departmentId: number;
}

export interface PostCourseDto {
	degree: degree;
	name: string;
	departmentId: string;
}