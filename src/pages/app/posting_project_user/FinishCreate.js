/*
*Contributor: Tiến 2nd september 2020
*Function: Page register(render page for PPU to create their account)

*/

// Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid_v4 } from "uuid"
import * as profileActions from "../../../store/actions/posting-project-user/profile/profileAction";

//Styles
import "./styles/FinishCreateStyles.css";

const FinishCreate = (props) => {
  //Initialize the states
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Facebook, setFacebook] = useState("");

  const organization = useSelector(state => state.authReducer.userData);

  //Handle state of 3 screen
  const organizationProperties = {
    orgName: props.location.organizationName,
    description: props.location.description,
    location: props.location.location.selectedOption.label,
    university: props.location.university,
    image: props.location.image,
    imageFile: props.location.imageFile,
    email: Email,
    phoneNumber: PhoneNumber,
    facebook: Facebook,
  };

  //Dispatch
  const dispatch = useDispatch();

  /**
   * @summary Handle the state of email
   * @param {string} Email
   * @return {void}
   */
  const _onChangeEmail = (Email) => {
    setEmail(Email);
  };

  /**
   * @summary Handle the state of description
   * @param {string} PhoneNumber
   * @return {void}
   */
  const _onChangePhoneNumber = (PhoneNumber) => {
    setPhoneNumber(PhoneNumber);
  };

  /**
   * @summary Handle the state of Facebook
   * @param {string} facebook
   * @return {void}
   */
  const _onChangeFacebook = (Facebook) => {
    setFacebook(Facebook);
  };

  /**
   * @summary Trigger the Registration action
   * @param {string} FinishEmail
   * @param {number} FinishPhoneNumber
   * @param {string} FinishFacebook
   * @returns {void}
   */

  const _onFinish = () => {
    console.log("Creating profile");
    const organizationId = uuid_v4();
    dispatch(
      profileActions._createProfile_ppu(
        organization.uid,
        organizationId,
        organizationProperties.orgName,
        organizationProperties.description,
        organizationProperties.location,
        organizationProperties.university,
        organizationProperties.email,
        organizationProperties.phoneNumber,
        organizationProperties.facebook,
        organizationProperties.imageFile,
      )
    );
    props.history.push({
      pathname: "/profile",
      profileId: organizationId
    });
  };

  return (
    <div className="page">
      <div className="container-FinishCreate">
        <div>
          <h1 className="my-header-FinishCreate"> Finish off </h1>
          <p className="description-FinishCreate">
            {" "}
            Tell people about how to contact your page{" "}
          </p>
        </div>
        <div className="view-text-input-FinishCreate">
          <input
            className="input-text-FinishCreate"
            type="text"
            placeholder="Email * "
            value={Email}
            onChange={(Email) => _onChangeEmail(Email.target.value)}
          />
          <input
            className="input-text-FinishCreate"
            type="text"
            placeholder="Phone number"
            value={PhoneNumber}
            onChange={(PhoneNumber) =>
              _onChangePhoneNumber(PhoneNumber.target.value)
            }
          ></input>
          <input
            className="input-text-FinishCreate"
            type="text"
            placeholder="Facebook"
            value={Facebook}
            onChange={(Facebook) => _onChangeFacebook(Facebook.target.value)}
          ></input>
        </div>

        <div>
          <button
            className="container-finish"
            onClick={() => {
              _onFinish();
              
            }}
          >
            <span> Finish </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishCreate;
