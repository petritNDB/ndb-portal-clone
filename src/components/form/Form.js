import React, { useState } from "react"
import Container from "../container"
import CustomButton from "../customButton"
import countries from "./countries"

import arrow from "../../assets/images/icons/arrow.svg"
import NDBWrapper from "../wrapper"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [relationship, setRelationship] = useState("")
  const [message, setMessage] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = event => {
    console.log(`
      First Name:${firstName},
      Last Name:${lastName},
      Email: ${email},
      Linkedin: ${linkedin},
      Country: ${country},
      Phone: ${phone},
      Relationship Inteded: ${relationship},
      Message: ${message},
      Accepted Terms: ${acceptedTerms}
    `)

    event.preventDefault()
  }

  return (
    <NDBWrapper>
      <form className="form-section" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="form-section__item">
          {" "}
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />{" "}
          <input
            name="last-name"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="form-section__item">
          {" "}
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          />{" "}
          <input
            name="linkedin"
            type="text"
            value={linkedin}
            onChange={e => setLinkedin(e.target.value)}
            required
            placeholder="Linkedin"
          />
        </div>
        <div className="form-section__item">
          <select
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          >
            <option value="" disabled selected>
              Country
            </option>
            <option key="" />
            {countries.map(country => (
              <option key={country}>{country}</option>
            ))}
          </select>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="form-section__item">
          <select
            name="relationship"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
            placeholder="Intended Relationship"
          >
            <option key="" />
            {countries.map(country => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-section__item">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          {/* <input
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          /> */}
        </div>
        <div className="form-section__item column">
          <p>
            NDB Inc. is committed to protecting and respecting your privacy, and
            we’ll only use your personal information to administer your account
            and to provide the products and services you requested from us. From
            time to time, we would like to contact you about our products and
            services, as well as other content that may be of interest to you.
            If you consent to us contacting you for this purpose, please tick
            below to say how you would like us to contact you:
          </p>

          <label>
            <input
              name="acceptedTerms"
              type="checkbox"
              onChange={e => setAcceptedTerms(e.target.value)}
              required
            />
            I accept the terms of service
          </label>
        </div>
        <div className="form-section__item column">
          <p>
            You can unsubscribe from these communications at any time. For more
            information on how to unsubscribe, our privacy practices, and how we
            are committed to protecting and respecting your privacy, please
            review our Privacy Policy.
          </p>
          <p>
            By clicking submit below, you consent to allow NDB Inc. to store and
            process the personal information submitted above to provide you the
            content requested.
          </p>
        </div>
        {/* <div className="form-section__item"> */}
          <CustomButton
            buttonTitle="Submit"
            buttonType="button"
            buttonImg={arrow}
            buttonTextOrder="order-1"
            flex="flex-left"
            buttonWidth="w-20"
          />
        {/* </div> */}
      </form>
    </NDBWrapper>
  )
}

export default Form
