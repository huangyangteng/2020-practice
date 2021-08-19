
import React, { useState, useEffect, useMemo } from "react";

export default function SearchUserList() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      // 组件首次加载时发请求获取用户数据
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doFetch();
  }, []);
  let usersToShow = null;

  if (users) {
    // 无论组件为何刷新，这里一定会对数组做一次过滤的操作
    usersToShow = users.data.filter((user) =>
      user.first_name.includes(searchKey),
    );
  }

// 使用 userMemo 缓存计算的结果
const usesToShow1=useMemo(()=>{
    if(!users)return null;
    return users.data.filter(user=>user.first_name.includes(searchKey))
},[users,searchKey])

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usesToShow1 &&
          usesToShow1.length > 0 &&
          usesToShow1.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}