import axios from "axios";

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const fetchImages = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const dogService = {
  fetchImages,
};

export default dogService;
