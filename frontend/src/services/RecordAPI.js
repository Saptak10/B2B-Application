import axios from 'axios';

const RecordUrl = 'http://localhost:8080/Backend-java/';

export const getData = async () => {
    let response = await axios.get(`${RecordUrl}`);
    console.log(response.data);
    return response.data;
  };

export const postData = async (record) => {
    return await axios.post(`${RecordUrl}/insert`, new URLSearchParams(record),{});
}

export const EditData = async (record) => {
    return await axios.post(`${RecordUrl}/update`, new URLSearchParams(record),{});
}

export const DeleteData = async (record) => {
    return await axios.post(`${RecordUrl}/delete`, new URLSearchParams(record),{});
}