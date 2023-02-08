import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import u from "./cald.module.scss";

function Cald() {
  const [coment, setComent] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((json) => setComent(json));
  }, []);

  return (
    <div className={u.cas}>
      
      {coment?.map((r) => (
          <div className={u.wa}>
            <p>
              <img
                src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                alt="avatar"
              />
            </p>
            <p>{r.title}</p>
            <p>{r.body}</p>

            <button>
              <Link to={"/comment"}>comment</Link>
            </button>
          </div>
      ))}
    </div>
  );
}

export default Cald;
