import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility of the mouse follower
  const followerRef = useRef(null);

  // Update the mouse position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Smoothly move the follower with the mouse position
  useEffect(() => {
    const smoothMove = () => {
      if (followerRef.current && isVisible) {
        const followerSize = isHovered ? 100 : 20; // Increase size on hover
        const targetX = mousePosition.x - followerSize / 2;
        const targetY = mousePosition.y - followerSize / 2;

        gsap.to(followerRef.current, {
          x: targetX,
          y: targetY,
          ease: 'power3.out',
          duration: 0.3, // Smooth movement
        });
      }
    };

    smoothMove();
  }, [mousePosition, isHovered, isVisible]);

  // Handle mouse enter and leave events to change size and mix-blend-mode
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    document.querySelectorAll('.mix-blend-target').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.mix-blend-target').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Handle the visibility change when the user leaves or enters the tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden || !document.hasFocus()) {
        setIsVisible(false); // Hide follower when the tab is not active or window is not focused
      } else {
        setIsVisible(true); // Show follower when the tab is active or window is focused
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleVisibilityChange); 
    window.addEventListener('focus', handleVisibilityChange); 

    // Clean up the event listeners
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: isHovered ? '100px' : '20px',  
        height: isHovered ? '100px' : '20px', 
        backgroundColor: '#03503B',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        willChange: 'transform',
        mixBlendMode: isHovered ? 'multiply' : 'normal', 
        opacity: isHovered ? 0.7 : 1, 
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease', 
        visibility: isVisible ? 'visible' : 'hidden', 
      }}
    />
  );
};

export default MouseFollower;
