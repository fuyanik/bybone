import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Routes, Route, Link, NavLink} from 'react-router-dom';

export default function SimpleAccordion() {
  return (
    <div className="navbar-side-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)" }}>Dekorsuz</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <div className="navbar-side-accordion-items">

             <Link to="/gastroFlate"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Gastro Flate Plate</Typography> </Link>
             <Link to="/Island"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Island</Typography> </Link>
             <Link to="/Smooth"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Smooth</Typography> </Link>
             <Link to="/Gastro"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Gastro</Typography> </Link>
             
             </div>
             
        </AccordionDetails>
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)" }}> Harmony</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <div className="navbar-side-accordion-items">
             <Link to="/ardent"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Ardent</Typography> </Link>
             <Link to="/blance"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Balance</Typography> </Link>
             <Link to="/breeze"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Breeze</Typography> </Link>
             <Link to="/elegance"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Elegance</Typography> </Link>
             <Link to="/enigma"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Enigma</Typography> </Link>
             <Link to="/gleam"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Gleam</Typography> </Link>
             <Link to="/Infinity"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Infinity</Typography> </Link>
             <Link to="/rose"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Rose</Typography> </Link>
             <Link to="/sun"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Sun</Typography> </Link>
             <Link to="/supreme"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Supreme</Typography> </Link>
             <Link to="/tropical"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Vintage</Typography> </Link>
             <Link to="/laterite"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Laterite</Typography> </Link>
          </div>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
         <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)" }}> Tinta</Typography>
        </AccordionSummary>
        <AccordionDetails>
               
        <div className="navbar-side-accordion-items">

             <Link to="/armonia"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Armonia</Typography> </Link>
             <Link to="/edera"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Edera</Typography> </Link>
             <Link to="/ederacobalt"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Edera Cobalt</Typography> </Link>
             <Link to="/kolezyum"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Kolezyum</Typography> </Link>
             <Link to="/legna"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Legna</Typography> </Link>
             <Link to="/rome"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Rome</Typography> </Link>
             <Link to="/spazio"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Spazio</Typography> </Link>
             <Link to="/tessera"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Tessera</Typography> </Link>
             
             </div>

        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)"  }}> Cowry</Typography>
        </AccordionSummary>
        <AccordionDetails>
                
          <div className="navbar-side-accordion-items">

             <Link to="/CowryBlack"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Cowry Black</Typography> </Link>
             <Link to="/CowryBrick"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Cowry Brick</Typography> </Link>
             <Link to="/CowryPurple"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Cowry Purple</Typography> </Link>
             <Link to="/CowryYellow"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Cowry Yellow</Typography> </Link>
             
             </div>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)" }}> Island</Typography>
        </AccordionSummary>
        <AccordionDetails>
               
          <div className="navbar-side-accordion-items">

             <Link to="/IslandOnix"  style={{  textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Island Onix</Typography> </Link>
             <Link to="/IslandOmbra"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Island Ombra</Typography> </Link>
             <Link to="/IslandVelho"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}>Island Velho</Typography> </Link>
              
         </div>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography  style={{fontFamily: "Poppins", color:"rgb(220, 58, 58)"  }}> Smooth</Typography>
        </AccordionSummary>
        <AccordionDetails>
             
       <div className="navbar-side-accordion-items">

             <Link to="/SmoothBlue"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Smooth Ambience Blue</Typography> </Link>
             <Link to="/SmoothYellow"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}> Smooth Ambience Yellow</Typography> </Link>
             <Link to="/SmoothReaction"  style={{   textDecoration: "none",  color: "black",   }}> <Typography  style={{fontFamily: "Poppins",fontSize:"14px",  }}>Smooth Reaction</Typography> </Link>
             
         </div>

        </AccordionDetails>
      </Accordion>


  

    </div>
  );
}
