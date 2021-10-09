import React from 'react';
import './navElement.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function NavElement(props: { title: string, href:string, variant: "text" | "outlined" | "contained" | undefined }) {
  return (
    <div className="nav-el">
      <Link to={props.href}>
      <Button variant={props.variant} className="linkingBtn">
        {props.title}
      </Button>
      </Link>
    </div>
  );
}

export default NavElement;
