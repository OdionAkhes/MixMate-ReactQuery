import React from 'react'

const Newsletter = () => {
  return (
    <form action="" className="form" >
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our Newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label" name="name">
          name
        </label>
        <input
          defaultValue="john"
          type="text"
          name="name"
          id="name
        required"
          className="form-input"
        />
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
          defaultValue="smith"
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
      >
        submit
      </button>
    </form>
  );
}

export default Newsletter