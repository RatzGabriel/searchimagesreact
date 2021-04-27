import { apiKey } from "./config";
import axios from "axios";

function api(term: any) {
  const imageResponse: any = axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&format=json&nojsoncallback=1`
    )
    .then((response) => {
      return response.data.photos.photo;
    });

  return imageResponse;
}

export default api;
