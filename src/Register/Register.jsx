// import { createUserWithEmailAndPassword } from "firebase/auth";

import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

// import { auth } from "../firebase.init";

const Register = () => {

  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const name = e.target.name.value;
  //     console.log(name, email, password);

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         console.log("This is result", result.user);
  //       })
  //       .catch((error) => {
  //         console.log("This is Error", error.message);
  //       });
  //   };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* ----Form---- */}
            <form onSubmit={handleRegister}>
              {" "}
              <fieldset className="fieldset">
                {/* ---Name--- */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                {/* ---Email--- */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* ---Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <p>
              Already have an Account? please{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
