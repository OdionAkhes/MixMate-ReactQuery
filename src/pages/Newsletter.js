import React from 'react'
import { Form,redirect,useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";




export const action = async ({ request }) => {
 const formData =    await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect("/")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
}

  };
const Newsletter = () => {
  const navigation = useNavigation();
  console.log(navigation)
  const isSubmitting = navigation.state === "submitting"


  return (
    <Form action="" className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our Newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label" name="name">
          name
        </label>
        <input type="text" name="name" id="name" className="form-input" />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
        />
      </div>
      <button
        type="submit"
        style={{ marginTop: "0.5rem" }}
        className="btn btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
}

export default Newsletter