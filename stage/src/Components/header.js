import React from 'react';

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: '#FF4D20',
        height: '65px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
      }}>  
        <div style={{
        width: '180px',
        height: '28px',
        top: '16px',
        left: '61px',
        position: 'absolute', 
      }}>
        <span style={{
          color: 'black',
          fontFamily: 'Oswald',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}>
          BREAKING NEWS:
        </span>
      </div>
      {[0, 1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          style={{
            width: '181px',
            height: '28px',
            top: '18px',
            left: `${250 + 250 * index}px`,
            position: 'absolute',
            animation: `slideAnimation 5s linear ${index}s infinite`,
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Oswald',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0.39em',
              textAlign: 'left',
            }}
          >
            WE ARE LIVE!
          </span>
        </div>
      ))}
      <style>
        {`
          @keyframes slideAnimation {
            0% {
              transform: translateX(0);
            }
            50% {
                transform: translateX(50%);
              }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
