
import React, { useState, useContext, createContext } from "react";

export const FeedContext = React.createContext();

const FeedProvider = ({ children }) => {

  const [feedContext, setFeedContext] = useState({
    step: 1,
    feedController: {
      quantity: 20,
      page: 1,
    },
    clear: () => {
    }
  })

  function updatefeedController(payload) {

    let feedController = { ...feedContext.feedController }

    feedController.quantity = payload.quantity
    feedController.page = payload.page


    setFeedContext(
      {
        ...feedContext,
        feedController
      }
    )
  }

  function updateStep(step) {
    setFeedContext(
      {
        ...feedContext,
        step
      }
    )
  }

  return (
    <FeedContext.Provider
      value={
        {
          feedContext,
          updateStep,
          updatefeedController
        }
      }
    >
      {children}
    </FeedContext.Provider>
  );

};

export default FeedProvider;
