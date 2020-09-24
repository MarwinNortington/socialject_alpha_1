/**
 * Contributor: TrNgTien
 * Day: 19/9/2020
 * Main function: render IU of application form
 */

 //Packages
 import React, {useState} from "react";
 import { useDispatch } from "react-redux";
 import { upDataForm } from "../../../store/actions/searching-project-user/project/project";

 //Styles
 import "./styles/ApplyFormStyles.css";


 const ApplyForm = (props) => {
    //Initialize the states
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    //Dispatch
    const dispatch = useDispatch();

    const FormState ={
        Name:Name,
        Email:Email,
        Message:Message,
    }
   
    /**
     * @summary Handle State of Name
     * @param {string} Name
     * @return {void}
     */
    const onChangeName=(Name) =>{
        setName(Name);
    }

    
    /**
     * @summary Handle State of Email
     * @param {string} Email
     * @return {void}
     */
    const onChangeEmail=(Email) =>{
        setEmail(Email);
    }


    /**
     * @summary Handle State of Message
     * @param {string} Message
     * @return {void}
     */
    const onChangeMessage=(Message) =>{
        setMessage(Message);
    }

    const submitForm =() =>{
        console.log("Sumbit form succesful!");
        dispatch(upDataForm(FormState.Name,FormState.Email,FormState.Message));
    }
    return (
        <div className="page" >
            <h1 className="h1">Project's Name</h1>
            <p className="location">Location</p>
            <div className="contact">
                <form  className="contact-form" autocomplete="off">
                    <div className="contact-form-group">
                        <label 
                            for="name" 
                            className="contact-form-label"
                        >
                            Your Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            className="contact-form-input" 
                            value={Name}
                            onChange={(Name)=> onChangeName(Name.target.value)}
                        />
                    </div>
                    <div className="contact-form-group">
                        <label 
                            for="email" 
                            className="contact-form-label"
                        >
                            Your Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            className="contact-form-input"
                            value={Email}
                            onChange={(Email)=>onChangeEmail(Email.target.value)} 
                        />
                    </div>
                        <div className="contact-form-group">
                        <label 
                            for="message" 
                            className="contact-form-label"
                        >
                            Your Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="contact-form-area" 
                            placeholder="Type something if you want"
                            value={Message}
                            onChange={(Message)=>onChangeMessage(Message.target.value)}
                        >

                        </textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="contact-form-submit"
                        onClick={() => {
                            submitForm();
                            props.history.push({
                              pathname: "/projectInfo",
                            });
                          }}
                    >
                        Submit
                    </button>
                </form>
</div>
        </div>
        );
    };
  export default ApplyForm;
  