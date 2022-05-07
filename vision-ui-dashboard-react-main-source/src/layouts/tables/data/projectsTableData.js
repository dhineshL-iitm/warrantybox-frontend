/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "project", align: "left" },
    { name: "price", align: "left" },
    { name: "warranty status", align: "left" },
    { name: "warranty period left", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <AdobeXD size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Product1 Chakra Vision
          </VuiTypography>
        </VuiBox>
      ),
      price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $14,000
        </VuiTypography>
      ),
      "warranty status": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      "warranty period left": <Completion value={60} color="info" />,
      action,
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Atlassian size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Product2 Professional Tracksuit
          </VuiTypography>
        </VuiBox>
      ),
      price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $3,000
        </VuiTypography>
      ),
      "warranty status": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      "warranty period left": <Completion value={100} color="info" />,
      action,
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Slack size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Product3 Goggles set
          </VuiTypography>
        </VuiBox>
      ),
      price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Not set
        </VuiTypography>
      ),
      "warranty status": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      "warranty period left": <Completion value={30} color="info" />,
      action,
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Product4 Mobile Phone
          </VuiTypography>
        </VuiBox>
      ),
      price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </VuiTypography>
      ),
      "warranty status": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      "warranty period left": <Completion value={0} color="info" />,
      action,
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Jira size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Product5 Television set
          </VuiTypography>
        </VuiBox>
      ),
      price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      "warranty status": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      "warranty period left": <Completion value={100} color="info" />,
      action,
    },
  ],
};
