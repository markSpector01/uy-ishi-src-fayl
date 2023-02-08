import React, { useEffect, useState } from "react";
import a from "./com.module.scss";
function Comment() {
  const [comul, setComul] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/10/comments`)
      .then((res) => res.json())
      .then((json) => setComul(json));
  });
  console.log(comul);
  return (
    <div className={a.com}>
      <h1>comments</h1>
      {comul?.map((em) => (
        <div className={a.w}>
          <h4>{em.email}</h4>
          <p><span>name</span>:{em.name}</p>
          <p>{em.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Comment;
