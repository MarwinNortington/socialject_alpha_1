import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SPU Pages
// import ExplorePage from "../pages/app/searching_project_user/ExplorePage";

import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";
// import ChooseType from "../pages/app/searching_project_user/ChooseType";
import ChooseType_Ken from "../pages/app/searching_project_user/ChooseType_Ken";

// PPU Pages
import Registration from "../pages/app/posting_project_user/Registration";
import BeautifyProfile from "../pages/app/posting_project_user/BeautifyProfile";
import FinishCreate from "../pages/app/posting_project_user/FinishCreate";
import ProfilePage from "../pages/app/posting_project_user/ProfilePage";
import CreatePostModal from "../pages/app/posting_project_user/CreatePostModal";
import CreatePostModal_2 from "../pages/app/posting_project_user/CreatePostModal_2";
import CreatePostModal_3 from "../pages/app/posting_project_user/CreatePostModal_3";
import AddActivityModal from "../pages/app/posting_project_user/AddActivityModal";

import ProfilePage_example from "../pages/app/posting_project_user/ProfilePage_example.js";

import LoginPage from "../pages/auth/LoginPage";
import ChoosingUser from "../pages/auth/ChoosingUser";

import ApplyForm from "../pages/app/searching_project_user/ApplyForm";

// react-router-dom

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/profile/createPostModal/:profileId" component={CreatePostModal} /> */}
        <Route path="/profile" component={ProfilePage} />
        <Route path="/beautifyProfile" component={BeautifyProfile} />
        <Route path="/projectInfo" component={ProjectInfoPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/finishCreate" component={FinishCreate} />
        <Route path="/createPostModal" component={CreatePostModal} />
        <Route path="/createPostModal_2" component={CreatePostModal_2} />
        <Route path="/createPostModal_3" component={CreatePostModal_3} />
        <Route path="/addActivity" component={AddActivityModal} />
        <Route path="/applyForm" component={ApplyForm}/>
        <Route exact path="/profilePage_test" component={ProfilePage_example} />
        <Route path="/choosingUser" component={ChoosingUser} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/" component={ChooseType} /> */}
        <Route path="/" component={ChooseType_Ken} />
      </Switch>
    </Router>
  );
};

export default MainRoute;
