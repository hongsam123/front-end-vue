import axios from "axios"

//auth 통신 모듈 정의

function join(user) {   //user = {id:xxx, name:xxx, password:xxx, role:xxx, email:xxx}
  //const promise = axios.post();
  //axios의 모든 메소드는 promise리턴
  //return promise;
  return axios.post(
    "/member/join2",
    {
      mid:user.id,
      mname:user.name,
      mpassword :user.password,
      mrole:user.role,
      memail:user.email
    }
  );
}

function login(user) {  //user = {id:xxx, password:xxx}
  return axios.post(
    "/member/login1",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join, login
}