import React from 'react';
import './navElement.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

type ButtonVariant = "text" | "outlined" | "contained" | undefined
interface NavElementProps {
  title: string
  href: string
  variant: ButtonVariant
}

function NavElement(props: NavElementProps) {
  return (
    <div className="nav-el">
      <Link to={`${props.href}`}>
      <Button variant={props.variant} className="linkingBtn">
        {props.title}
      </Button>
      </Link>
    </div>
  );
}

export default NavElement;
