import React from 'react';
import background from '../background.jpg';
import logo from '../logo.png';
import img1 from '../blanc.png';
import blue from '../blue.png';
import couple from '../couple.png';
import status from '../status.png';
import three from '../three.png';
import arrow from '../arrow.png';
import play from '../play.png';
import facebook from '../facebook.png';
import insta from '../insta.png';
import youtube from '../youtube.png';

function Body() {
  return (
    <div
      className="body-container"
      style={{
        position: 'relative',
        height: '100vh',
      }}
    >
      <img
        src={background}
        alt="background"
        className="background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        alt="overlay"
        className="overlay"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.74)',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: 1,
        }}
      />
      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{
          height: '5%',
          width: '10%',
          position: 'absolute',
          top: '5%',
          left: '5%',
          zIndex: 2,
        }}
      />

      <img
        src={img1}
        alt="img1"
        className="img1"
        style={{
          height: '90%',
          width: '30%',
          position: 'absolute',
          top: '10%',
          right: '1%',
          zIndex: 2,
        }}
      />
      
      <div style={{
    backgroundColor: '#FF4D20',
    height: '5%',
    width: '75%',
    top: '13%',
    left:'15%',
    position: 'absolute',
    zIndex: 3,

  }} />
   <div style={{
        width: '180px',
        height: '28px',
        top: '14%',
        right: '72.5%',
        position: 'absolute', 
        zIndex: 5,
      }}>
        <span style={{
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          
        }}>
          LISTEN LIVE
        </span>
      </div>

      <div style={{
        width: '180px',
        height: '28px',
        top: '14%',
        right: '62.5%',
        position: 'absolute', 
        zIndex: 5,
      }}>
        <span style={{
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          
        }}>
          CONTACT US
        </span>
      </div>

      <div style={{
        width: '180px',
        height: '28px',
        top: '14%',
        right: '52.5%',
        position: 'absolute', 
        zIndex: 5,
      }}>
        <span style={{
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          
        }}>
          GET THE APP
        </span>
      </div>
      <img
        src={facebook}
        alt="facebook"
        className="facebook"
        style={{
            height: '2%',
            width: '1%',
          position: 'absolute',
          top: '14.5%',
          right: '12%',
          zIndex: 4,
        }}
      />

<img
        src={youtube}
        alt="youtube"
        className="youtube"
        style={{
            height: '2%',
            width: '1%',
          position: 'absolute',
          top: '14.5%',
          right: '16%',
          zIndex: 4,
        }}
      />

<img
        src={insta}
        alt="insta"
        className="insta"
        style={{
            height: '2%',
            width: '1%',
          position: 'absolute',
          top: '14.5%',
          right: '14%',
          zIndex: 4,
        }}
      />



    <img
        src={arrow}
        alt="arrow"
        className="arrow"
        style={{
          height: '5%',
          width: '2.6%',
          position: 'absolute',
          top: '32%',
          right: '80%',
          zIndex: 4,
        }}
      />

<img
        src={three}
        alt="three"
        className="three"
        style={{
            height: '35%',
            width: '20%',
            position: 'absolute',
            top: '18%',
            right: '18%',
            zIndex: 3,
        }}
      />


<img
        src={blue}
        alt="blue"
        className="blue"
        style={{
            height: '35%',
            width: '20%',
            position: 'absolute',
            top: '18%',
            right: '38%',
            zIndex: 3,
        }}
      />
 <div style={{
        width: '180px',
        height: '28px',
        top: '42%',
        right: '65%',
        position: 'absolute', 
        zIndex: 5,
      }}>
        <span style={{
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          
        }}>
          TRACK MATRAK
        </span>
      </div>

      <div style={{
        width: '180px',
        height: '28px',
        top: '45%',
        right: '68.5%',
        position: 'absolute', 
        zIndex: 5,
      }}>
        <span style={{
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '12px',
          fontWeight: '700',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          
        }}>
          20.12.203
        </span>
      </div>

<img
        src={couple}
        alt="couple"
        className="couple"
        style={{
          height: '35%',
          width: '20%',
          position: 'absolute',
          top: '18%',
          right: '58%',
          zIndex: 3,
        }}
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        alt="overlay"
        className="overlay"
        style={{
          width: '20%',
          height: '35%',
          backgroundColor: 'rgba(0, 0, 0, 0.68)',
          position: 'absolute',
          top: '18%',
          right: '58%',
          zIndex: 4,
        }}
      />
        <div style={{
    backgroundColor: 'white',
    height: '5%',
    width: '75%',
    top: '53%',
    left:'15%',
    position: 'absolute',
    zIndex: 3,

  }} />


{[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          style={{
            width: '12px',
            height: '28px',
            top: '54%',
            left: `${250+ 280 * index}px`, 
            position: 'absolute',
            zIndex: 3,
            animation: `slideAnimation 5s linear ${index}s infinite`, 
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Oswald',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}
          >
          FOLLOWFORMORE<div class="modal fade modal-sm" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  
                </div>
                 
              </div>
            </div>
          </div>
          
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
   <img
        src={arrow}
        alt="arrow"
        className="arrow"
        style={{
          height: '5%',
          width: '2.6%',
          position: 'absolute',
          top: '32%',
          right: '13.5%',
          transform: 'rotate(-180deg)',
          zIndex: 4,
        }}
      />


<img
        src={status}
        alt="status"
        className="status"
        style={{
          height: '40%',
          width: '75%',
          position: 'absolute',
          top: '58%',
          right: '10%',
          zIndex: 3,
        }}
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        alt="overlay"
        className="overlay"
        style={{
          width: '75%',
          height: '40%',
          backgroundColor: 'rgba(0, 0, 0, 0.68)',
          position: 'absolute',
          top: '58%',
          right: '10%',
          zIndex: 4,
        }}
      />
      <img
        src={play}
        alt="play"
        className="play"
        style={{
          height: '15%',
          width: '8%',
          position: 'absolute',
          top: '71%',
          right: '42%',
          zIndex: 4,
        }}
      />





        <div style={{
    backgroundColor: 'black',
    height: '85%',
    width: '75%',
    top: '13%',
    left:'15%',
    position: 'absolute',
    zIndex: 2,

  }} />
      <div
        style={{
          width: '80%',
          height: '15%',
          top: '9%',
          right: '55%',
          position: 'absolute',
          transform: 'rotate(-90deg)',
          color: 'white',
          fontFamily: 'Oswald',
          fontSize: '2.5vw',
          fontWeight: '700',
          lineHeight: '2.5vw', 
          letterSpacing: '0em',
          textAlign: 'left',
          zIndex: 2,
        }}
      >
        We are one people but we live as if
      </div>

      <div
        style={{
          width: '80%',
          height: '15%',
          top: '3%',
          right: '50%',
          position: 'absolute',
          transform: 'rotate(-90deg)',
          color: '#FF4D20',
          fontFamily: 'Oswald',
          fontSize: '2.5vw',
          fontWeight: '700',
          lineHeight: '2.5vw', 
          letterSpacing: '0em',
          textAlign: 'left',
          zIndex: 2,
        }}
      >
        Divided … everything is connected
      </div>
    </div>
  );
}

export default Body;
