import React from "react";

import Card from "../hoc/card";

import Auth from "../hoc/auth";

const Profile = () => {
  return (
    <div>
      <Auth>
        <Card>profile</Card>
      </Auth>
    </div>
  );
};
export default Profile;
