import axios from "axios";
import { AxiosTimeout } from "../utils/constants";

const api = axios.create({
    baseURL: 'http://185.117.153.245:8002/',
    timeout: AxiosTimeout,
    timeoutErrorMessage: "Сервер не отвечает",
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
)

export default api;