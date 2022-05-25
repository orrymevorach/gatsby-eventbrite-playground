import React from 'react';
import useLoadEvenbriteOnPageLoad from '../hooks/useLoadEvenbriteOnPageLoad';

const IndexPage = () => {
  useLoadEvenbriteOnPageLoad();
  return (
    <>
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <title>Highlands Music Festival</title>
        <h1>Highlands Music Festival</h1>
        <div
          // style={{ position: 'absolute', bottom: '0', right: '0' }}
          id="eventbrite-widget-container-328526651057"
        ></div>
        {/* <button
          style={{
            borderRadius: '2px',
            border: 'none',
            background: '#2f2f2f',
            color: 'white',
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          id="eventbrite-widget-modal-trigger-328526651057"
          type="button"
        >
          Buy Tickets
        </button> */}
      </main>
    </>
  );
};

export default IndexPage;
