import axios from "axios"

function getBoardList(pageNo=1) {
  const promise = axios.get("/board/list",{params:{pageNo:pageNo}});
  return promise;
}

function createBoard(multipartFormData) {
  const promise = axios.post("/board/create",multipartFormData);
  return promise;
}

function readBoard(bno,hit) {
  const promise = axios.get(`/board/${bno}`,{params:{hit}});
  return promise;
}

function updateBoard(multipartFormData) {
  const promise = axios.post("/board/update",multipartFormData);
  return promise;
}

function deleteBoard(bno) {
  const promise = axios.delete(`/board/${bno}`);
  return promise;
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard,
}