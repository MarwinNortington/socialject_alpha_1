import React from "react";

import "../../styles/ProjectInfoPage/IndividualForm.css";

const imageURL =
  "https://i.pinimg.com/originals/39/46/55/39465510117c36c2023b2d72cdcf05b3.jpg";

const formData = [
  { id: "1", question: "Your favorite pokemon?", answer: "Charizard" },
  { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  {
    id: "3",
    question: "Your favorite type of girl?",
    answer: "Having no dick is enough",
  },
];

const AnswerCard = (props) => {
  const data = props.data;
  return (
    <div className="individual-card">
      <div className="individual-textcontainer">
        <div className="individual-text title">
          {data.id}. {data.question}
        </div>
        <div className="individual-textcontainer answer">
          <div className="individual-text">{data.answer}</div>
        </div>
      </div>
    </div>
  );
};

const IndividualForm = (props) => {
  //These data are just example.
  const data = formData;
  return (
    <div className="individual-container">
      <div className="individual-card">
        <img src={imageURL} alt="Loading..." className="individual-avatar" />
        <div className="individual-textcontainer">
          <div className="individual-text title">Name: Long wibu</div>
          <div className="individual-text">email: hahahhahha@gmail.com</div>
        </div>
      </div>
      {data.map((element) => (
        <AnswerCard data={element} />
      ))}
    </div>
  );
};

export default IndividualForm;