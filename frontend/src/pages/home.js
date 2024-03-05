import React from "react";
import ContactSidebar from "../components/contactsidebar";
import HomeEle from "../components/homeEle";

const Home = () => {
  return (
    <div className="backdrop">
      <ContactSidebar />
      <HomeEle />
    </div>
  );
};

export default Home;
