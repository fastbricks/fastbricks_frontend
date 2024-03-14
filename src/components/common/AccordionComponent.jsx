// AccordionComponent
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import AddIcon from "@mui/icons-material/Add";
export default function AccordionComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div style={{ padding: "5px 5px" }}>
      <Accordion
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
          <Typography>How to get 25% discount?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </div>
  );
}
