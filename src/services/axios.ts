import Axios from "axios";
export const axios = Axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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"
  }
});
