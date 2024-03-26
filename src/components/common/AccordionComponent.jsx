// AccordionComponent
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Fade from "@mui/material/Fade";
import AddIcon from "@mui/icons-material/Add";
export default function AccordionComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "5px 5px" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          padding: "10px",
          boxShadow: "none",
          ":hover": {
            border: "2px solid #f7c8bd",
            borderRadius: "10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                backgroundColor: "#f7c8bd",
                color: "#fff",
                borderRadius: "50%",
                ":hover": {
                  backgroundColor: "#f28e7a",
                },
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Do I need GST to sell on Fastbricks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, sellers are required to have GST registration to work on any
            contract on Fastbricks. However, for the some category, only PAN
            (Permanent Account Number) is mandatory.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          padding: "10px",
          boxShadow: "none",
          ":hover": {
            border: "2px solid #f7c8bd",
            borderRadius: "10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                backgroundColor: "#f7c8bd",
                color: "#fff",
                borderRadius: "50%",
                ":hover": {
                  backgroundColor: "#f28e7a",
                },
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Why should I sell on Fastbricks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fastbricks is a trusted platform for providing all construction
            services & other requirements in India. By selling on Fastbricks,
            you gain access to a vast customer base.The cost of doing business
            on Fastbricks is also low, providing a lucrative opportunity for
            sellers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          padding: "10px",
          boxShadow: "none",
          ":hover": {
            border: "2px solid #f7c8bd",
            borderRadius: "10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                backgroundColor: "#f7c8bd",
                color: "#fff",
                borderRadius: "50%",
                ":hover": {
                  backgroundColor: "#f28e7a",
                },
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            What do I need to register to bid for contract on Fastbricks.in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To register and bid for contract products on Fastbricks.in, you will
            need the following details:
          </Typography>
          <ol>
            <li>
              <ArrowRightAltSharpIcon color="warning" />
              Business information
            </li>
            <li>
              {" "}
              <ArrowRightAltSharpIcon color="warning" />
              Contact details (email ID and phone number)
            </li>
            <li>
              <ArrowRightAltSharpIcon color="warning" />
              Tax registration details, such as GSTIN and PAN.
            </li>
          </ol>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          padding: "10px",
          boxShadow: "none",
          ":hover": {
            border: "2px solid #f7c8bd",
            borderRadius: "10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                backgroundColor: "#f7c8bd",
                color: "#fff",
                borderRadius: "50%",
                ":hover": {
                  backgroundColor: "#f28e7a",
                },
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            I don&apos;t have a website, can I still bid for contract on
            Fastbricks.in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! You can bid for contract on Fastbricks.in without having
            a website. Once registered, you will gain access to the Fastbricks
            Seller Hub, where you can list your services and start accepting
            bookings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </div>
  );
}
