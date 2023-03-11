import React from "react";
import "./nonmain.css";

const About = () => {
  return (
    <div className="page-struct">
      <p className="text">
        The Chicago Moon-Times is the first, fully-automated satirical news site
        created to spread laughter and joy in the world. The site is powered by
        OpenAI’s ChatGPT and all content is satirical and not meant to be taken
        seriously.{" "}
      </p>
      <p className="text">
        Topics focus on both local and national issues and all articles
        generated after January 2023 were written by artificial intelligence.
        This site was first created in April 2022 by a bored{" "}
        <a href="https://alexanderjdean.com">Alex Dean</a> on a Saturday night.{" "}
      </p>
      <p className="text">
        Have any thoughts or suggestions? You can contact the Chicago Moon-Times
        by sending an email to moontimeletters at gmail dot com.
      </p>
    </div>
  );
};

export default About;
