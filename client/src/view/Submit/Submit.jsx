import React, { useState } from "react";
import "./submit.css";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import Flashcard from "../../components/Flashcard.jsx";

function Submit() {
  const [ErrorMsg, SetErrorMsg] = useState("");
  const [ErrorState, SetErrorState] = useState(false);
  const [Success, SetSuccessMsg] = useState("");
  const [SuccessState, SetSuccessState] = useState(false);
const [buttonState,SetButtonState]=useState(false)
  const {
    register,
    handleSubmit,
    resetField,
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

  const year=[
    { id: 1, name: "1year" },
    { id: 2, name: "2year" },
    { id: 3, name: "3year" },
    {id:4,name:'4year'}
  ]

  async function formsubmit(data) {
    console.log(data);
    SetButtonState(true)
    const formdata = new FormData();

    formdata.append("projectname", data.projectname);
    formdata.append("projectdescription", data.projectdescription);
    formdata.append("programname", data.programname);
    formdata.append("year", data.year);

    formdata.append("membersname", data.membersname);
    formdata.append("githublink", data.githublink);

    formdata.append("image1", data.image1[0]);
    // formdata.append("image2",data.image2[0].name)

    try {
      const responce = await axios.post(
        "http://localhost:3000/api/user/submitform",
        formdata
      );
      console.log(responce.data);
      if (responce.data.success === false) {
        SetErrorState(true);
        SetErrorMsg(responce.data.message);
        SetSuccessState(false);
      } else {
        SetSuccessState(true);
        SetSuccessMsg(responce.data.message);
        SetErrorState(false);
        resetField("projectname")
        resetField("projectdescription")
        resetField("year")
        resetField("membersname")
        resetField("githublink")
        resetField("image1")

        
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      SetButtonState(false)
    }
  }

  return (
    <>
      <main className="submitform">
        <Navbar />
        <div className="form_conn">
          <form className="uploadproject" onSubmit={handleSubmit(formsubmit)}>
            {ErrorState && (
              <div style={{ width: "100%", height: "50px" }}>
                <Flashcard color={"red"} msg={ErrorMsg} />
              </div>
            )}
            {SuccessState && (
              <div style={{ width: "100%", height: "50px" }}>
                <Flashcard color={"green"} msg={Success} />
              </div>
            )}

            <input
              type="text"
              placeholder=" Project Name"
              {...register("projectname", {
                required: { value: true, message: "Field Required" },
                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: "Only Letter and Number are Allowed",
                },
              })}
            />
            {errors.projectname && (
              <span className="error_message">
                *{errors.projectname.message}
              </span>
            )}

            <select
              {...register("programname", {
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

<select name=""
{...register("year",{
  required:{value:true,message:"Field Required"}
})}

id=""
>

{
  year.map((theyear)=>
  (
    <option key={theyear.id} value={theyear.name}>
{theyear.name}

    </option>
  ))
}

</select>
{errors.year && (
              <span className="error_message">
                *{errors.year.message}
              </span>
            )}

            <textarea
              {...register("projectdescription", {
                required: { value: true, message: "Field Required" },
                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: "Only Letter and Number are Allowed",
                },
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
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "Only Letter Are Allowed",
                },
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
                <span className="error_message">*{errors.image1.message}</span>
              )}
            </span>
            <button className="submitbutton" disabled={buttonState} type="submit">
              {buttonState?"Submitting":"Submit"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Submit;
