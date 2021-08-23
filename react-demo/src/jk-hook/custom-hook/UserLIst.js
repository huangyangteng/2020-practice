import React, { useCallback, useState } from "react";
// useCallback(fn,[])
const  useAsync=(asyncFn)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


    const execute=useCallback(()=>{
        // 设置loading以及清除数据操作
        setLoading(true)
        setData(null)
        setError(null)

        return asyncFn().then((res)=>{
            setData(res)
            setLoading(false)

        }).catch((error)=>{
            setError(error)
            setData(null)
            setLoading(false)

        })
    },[asyncFn])
    return {execute,data,loading,error}

}
export default function UserList() {
//   // 使用三个 state 分别保存用户列表，loading 状态和错误状态
//   const [users, setUsers] = React.useState([]);
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);
//   // 定义获取用户的回调函数
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("https://reqres.in/api/users/");
//       const json = await res.json();
//       // 请求成功后将用户数据放入 state
//       setUsers(json.data);
//     } catch (err) {
//       // 请求失败将错误状态放入 state
//       setError(err);
//     }
//     setLoading(false);
//   };
  const {execute:fetchUsers,data:users,loading,error}=useAsync(async()=>{
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    return json.data
  })

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && 
        <div style={{ color: "red" }}>Failed: {String(error)}</div>
      }
      <br />
      <ul>
        {users && users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}