import { axiosRequest } from "@api/xhr";

export default class ExamsService {
  static async fetchExams(params) {
    return await axiosRequest.get(`exams/exams/`, { params });
  }

  static async fetchEnrollments(params) {
    return await axiosRequest.get(`exams/enrollments/`, { params });
  }

  static async startEnrollment(id) {
    return await axiosRequest.post(`exams/enrollments/${id}/start/`);
  }

  static async getQuestions(id) {
    return await axiosRequest.get(`exams/enrollments/${id}/questions/`);
  }

  static async fetchEnrollment(id) {
    return await axiosRequest.get(`exams/enrollments/${id}/`);
  }

  static async completeEnrollment(id) {
    return await axiosRequest.post(`exams/enrollments/${id}/complete/`);
  }

  static async saveResponses(id, data) {
    return await axiosRequest.post(
      `exams/enrollments/${id}/save_responses`,
      data
    );
  }
}
