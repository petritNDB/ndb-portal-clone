import React, { useState } from "react"
import CustomButton from "../customButton"
import countries from "./countries"

import arrow from "../../assets/images/icons/arrow.svg"
import NDBWrapper from "../wrapper"

const Form = ({ pageType, title }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [relationship, setRelationship] = useState("")
  const [message, setMessage] = useState("")
  const [purpose, setPurpose] = useState("")
  const [company, setCompany] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const flexDisplay = {
    display: "flex !important",
    justifyContent: "space-between",
  }
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
        <h1>{title}</h1>
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
            value={pageType === "news-kit" ? company : linkedin}
            onChange={
              pageType === "news-kit"
                ? e => setCompany(e.target.value)
                : e => setLinkedin(e.target.value)
            }
            required
            placeholder={pageType === "news-kit" ? "Company" : "Linkedin"}
          />
        </div>
        <div className="form-section__item">
          <select
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          >
            <option value="" disabled selected hidden>
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
        {pageType === "news-kit" ? (
          <div className="form-section__item2 ">
            <div className="column">
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Company Profile
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Human Rights
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                NDB’s Logo
              </label>
            </div>
            <div className="column">
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Gallery
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Press Release
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Code of conduct and business ethics
              </label>
            </div>
            <div className="column">
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                EH&S strategy
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Compliance report
              </label>
            </div>
            <div className="column">
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Climate change response
              </label>
              <label className="span-column-2">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required
                />
                Responsible Sourcing Policy
              </label>
            </div>
          </div>
        ) : (
          <div className="form-section__item">
            <select
              className="w-100"
              name="relationship"
              value={country}
              onChange={e => setRelationship(e.target.value)}
              required
              placeholder="Intended Relationship"
              id="relationship"
            >
              <option value="" disabled selected hidden>
                Inteded Relationship
              </option>
              <option key="" />
              {countries.map(country => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>
        )}
        <div className="form-section__item">
          <textarea
            className="w-100"
            name={pageType === "news-kit" ? "purpose" : "message"}
            cols="30"
            rows="10"
            value={pageType === "news-kit" ? purpose : message}
            onChange={
              pageType === "news-kit"
                ? e => setPurpose(e.target.value)
                : e => setMessage(e.target.value)
            }
            id="message"
            placeholder={pageType === "news-kit" ? "Purpose" : "Message"}
          ></textarea>
          {/* <input
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
          /> */}
        </div>
        <div className="form-section__item ">
          <p className="span-column-2">
            NDB Inc. is committed to protecting and respecting your privacy, and
            we’ll only use your personal information to administer your account
            and to provide the products and services you requested from us. From
            time to time, we would like to contact you about our products and
            services, as well as other content that may be of interest to you.
            If you consent to us contacting you for this purpose, please tick
            below to say how you would like us to contact you:
          </p>

          <label className="span-column-2">
            <input
              name="acceptedTerms"
              type="checkbox"
              onChange={e => setAcceptedTerms(e.target.value)}
              required
            />
            I accept the terms of service
          </label>
        </div>
        <div className="form-section__item ">
          <p className="span-column-2">
            You can unsubscribe from these communications at any time. For more
            information on how to unsubscribe, our privacy practices, and how we
            are committed to protecting and respecting your privacy, please
            review our Privacy Policy.
          </p>
          <p className="span-column-2">
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
          buttonLink="#"
          //  buttonTextOrder="order-2"
          flex="flex-left"
          buttonWidth="w-20"
        />
        {/* </div> */}
      </form>
    </NDBWrapper>
  )
}

export default Form
