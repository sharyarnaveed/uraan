import React from "react";
import "./submit.css";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios"

function Submit() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectprograms = [
    { id: 1, name: "SE" },
    { id: 2, name: "CS" },
    { id: 3, name: "EE" },
    { id: 4, name: "DS" },
    { id: 5, name: "CE" },
    { id: 6, name: "CYS" },
    { id: 7, name: "AI" },
  ];

  async function formsubmit (data) {
    console.log(data);
const formdata= new FormData();

// formdata.append("projectname",data.projectname)
// formdata.append("projectdescription",data.projectdescription)
// formdata.append("programname",data.programname)
// formdata.append("membersname",data.membersname)

formdata.append("image1",data.image1[0])
// formdata.append("image2",data.image2[0].name)

try {
  const responce=await axios.post("http://localhost:3000/api/user/submitform",formdata)
console.log(responce);
} catch (error) {
  console.log(error);
}


  }

  return (
    <>
      <main className="submitform">
        <Navbar />
        <div className="form_conn">
          <form className="uploadproject" onSubmit={handleSubmit(formsubmit)}>
            <input
              type="text"
              placeholder=" Project Name"
              {...register("projectname", {
                required: { value: true, message: "Field Required" },
              })}
            />
            {errors.projectname && (
              <span className="error_message">
                *{errors.projectname.message}
              </span>
            )}

            <select
              {...register("prograname", {
                required: { value: true, message: "Field Required" },
              })}
            >
              {selectprograms.map((program) => (
                <option key={program.id} value={program.name}>
                  {program.name}
                </option>
              ))}
            </select>
            {errors.prograname && (
              <span className="error_message">
                *{errors.prograname.message}
              </span>
            )}

            <textarea
              {...register("projectdescription", {
                required: { value: true, message: "Field Required" },
              })}
              rows={10}
              id=""
              cols="70"
              placeholder="Project Description"
            ></textarea>
            {errors.projectdescription && (
              <span className="error_message">
                *{errors.projectdescription.message}
              </span>
            )}

            <textarea
              name=""
              {...register("membersname", {
                required: { value: true, message: "Field Required" },
              })}
              rows={10}
              id=""
              cols="40"
              placeholder="Team Members Name"
            ></textarea>
            {errors.membersname && (
              <span className="error_message">
                *{errors.membersname.message}
              </span>
            )}

            <input
              type="url"
              {...register("githublink", {
                required: { value: true, message: "Field Required" },
              })}
              placeholder="GithubLink"
            />
            {errors.githublink && (
              <span className="error_message">
                *{errors.githublink.message}
              </span>
            )}

            <span>
              <p>Upload Project Images</p>
               <input
                {...register("image1", {
                  required: { value: true, message: "Field Required" },
                })}
                type="file"
           
                id=""
              />
              {errors.image1 && (
                <span className="error_message">
                  *{errors.image1.message}
                </span>
              )} 

              {/* <input
                {...register("image2", {
                  required: { value: true, message: "Field Required" },
                })}
                type="file"
             
                id=""
              />
              {errors.image2 && (
                <span className="error_message">
                  *{errors.image2.message}
                </span>
              )} */}
            </span>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Submit;
