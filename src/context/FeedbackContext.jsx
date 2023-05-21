import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      rating: 9,
      text: "This is feedback item 1 coming from the backend",
    },
    {
      id: 2,
      rating: 8,
      text: "This is feedback item 2 coming from the backend",
    },
    {
      text: "Updated all packages to latest",
      rating: 6,
      id: 4,
    },
  ]);

  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Feedback
  const addFeedback = (newFeedback) => {
    // to generate unique id we use package name "uuid" install it using npm
    newFeedback.id = uuidv4();
    // console.log(newFeedback)
    // hum sidhe hi isme newFeedback ko push nhi kr sakte h esliye humise spred operater (...) ka use krege
    // ...feedback se current feed aajaye ge obj m or esse phele hum jo newFeedback h use rakh de ge or
    // ese , se seprate kr dege
    setfeedback([newFeedback, ...feedback]);
  };

  // Edit Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
     // console.log(FeedbackEdit);
  };

  // Update Feedback item
  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem);
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    setFeedbackEdit({
      item : {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        FeedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

