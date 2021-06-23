import axios from "axios";

const handleError = (error) => {
    console.log('error : ', error)
    alert(error)
}

const get = (url, params = {}) => {
  axios
    .get(url, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
        handleError(error)
    });
};

const post = (url, params = {}) => {
  axios
    .post(url, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
        handleError(error)
    });
};

const put = (url, params = {}) => {
  axios
    .put(url, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
        handleError(error)
    });
};

const patch = (url, params = {}) => {
  axios
    .patch(url, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
        handleError(error)
    });
};

export {
    get,
    post,
    put,
    patch,
}
