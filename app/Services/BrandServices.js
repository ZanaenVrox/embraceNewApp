import requests from "./httpService";

const BrandServices = {
  getAllBrands({ name, page, limit }) {
    const searchName = name !== null ? name : "";

    return requests.get(
      `/brand/all?name=${searchName}&page=${page}&limit=${limit}`
    );
  },
  getBrands() {
    return requests.get(`/brand/allbrands`);
  },
  createBrand(body) {
    return requests.post("/brand/create", body);
  },
  updateBrand(id, body) {
    return requests.put(`/brand/update/${id}`, body);
  },
  deleteBrand(id) {
    return requests.delete(`/brand/delete/${id}`);
  },
  statusBrand(id) {
    return requests.post(`/brand/status/${id}`);
  },
};

export default BrandServices;
