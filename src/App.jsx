import React from 'react';
import Header from './components/Header';
import ConferenceDetails from './components/ConferenceDetails';
import AboutICSTEET from './components/AboutICSTEET';
import KeyHighlights from './components/KeyHighlights';
import SubmissionDeadlines from './components/SubmissionDeadlines';
import Footer from './components/Footer';
import ConferenceTheme from './components/ConferenceTheme';
import WelcomeToICSTEET from './components/WelcomeToICSTEET';
import SessionAndTracks from './components/SessionAndTracks';
import WhyJoinUs from './components/WhyJoinUs';
import SideBySideWithHover from './components/SideBySideWithHover';
import MouseFollower from './components/MouseFollower';


const App = () => {
  return (
    <div className="font-sans bg-gray-200">
      <MouseFollower />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ConferenceDetails />
        <WelcomeToICSTEET />
        <SideBySideWithHover />
        <KeyHighlights />
        <SessionAndTracks />
        <SubmissionDeadlines />
        <WhyJoinUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
