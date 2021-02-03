import React from "react";
import "./ErrorPage.scss";

import PageHeader from "../../components/shared/PageHeader/PageHeader";
import LinkButton from "../../components/shared/LinkButton/LinkButton";

function ErrorPage(props) {
  return (
    <div className="ErrorPage">
      <PageHeader
        heading="404 Not Found"
        subheading="Sorry, the page you are looking for does not exist."
      />
      <div className="ErrorPage__redirect">
        <LinkButton color="indigo" to="/">
          Redirect To Home Page
        </LinkButton>
      </div>
    </div>
  );
}

export default ErrorPage;
