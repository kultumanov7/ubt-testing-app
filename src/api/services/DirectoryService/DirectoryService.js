import { axiosRequest } from "@api/xhr";

export default class DirectoryService {
  static async fetchRegions(params) {
    return await axiosRequest.get(`api/auth/regions/`, { params });
  }

  static async fetchCities(params) {
    return await axiosRequest.get(`api/auth/cities/`, { params });
  }

  static async fetchSchools(params) {
    return await axiosRequest.get(`api/auth/schools/`, { params });
  }
}
