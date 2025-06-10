import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const accentColor = ' #094eae ';

    const styles = {
        header: {
            backgroundColor: '#333',
            borderRadius: '30px',
            // border: 'solid',
            padding: '20px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            transition: 'box-shadow 0.3s ease', // smooth hover effect
            boxShadow: isHovered ? `0 0 0 10px  ${accentColor}` : 'none',
        },
        titleContainer: {
            display: 'flex',
            gap: '50px',
            alignItems: 'center',
        },
        title: {
            margin: 0,
        },
        amount: {
            backgroundColor: accentColor,
            padding: '10px',
            color: 'white',
            borderRadius: '5px',
        },
        nav: {
            display: 'flex',
            gap: '20px',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
        }
    };

    return (
    <header
        style={styles.header}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div style={styles.titleContainer}>
            <h1 style={styles.title}>Expense Tracker</h1>
            <h2 style={styles.amount}>Current Worth:</h2>
        </div>
      <nav style={styles.nav}>
          <NavLink to="/" style={styles.link}>Home</NavLink>
          <NavLink to="/about" style={styles.link}>About</NavLink>
          <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </nav>
    </header>
    );
};

export default Header;