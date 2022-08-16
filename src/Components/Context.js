import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [userArr, setUserArr] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  const [count, setCount] = useState(1);
  const [commentId, setCommentId] = useState(1);
  // NEW FEED ACTIVITY POST
  const [activityThoughts, setActivityThoughts] = useState("");
  const [activityImage, setActivityImage] = useState("");
  const [activityDisplay, setActivityDisplay] = useState("none");
  const [editData, setEditData] = useState(false);
  const [editDataIndex, seteditDataIndex] = useState(0);
  const [addPostArr, setAddPostArr] = useState([
    {
      id: 1,
      username: "Marcos",
      text: "Sunday Mood",
      image: "example1.jpeg",
      likes: 0,
      comment: [],
      commentInputDisplay: false,
      commentArrDisplay: false,
      commentId: 1,
    },
    {
      id: 2,
      username: "Jennifer",
      text: "Hello..",
      image: "example2.jpeg",
      likes: 0,
      comment: [],
      commentInputDisplay: false,
      commentArrDisplay: false,
      commentId: 1,
    },
  ]);
  const [addPostCount, setAddPostCount] = useState(3);

  return (
    <CartContext.Provider
      value={{
        userArr,
        setUserArr,
        loggedUser,
        setLoggedUser,
        count,
        setCount,
        addPostArr,
        setAddPostArr,
        addPostCount,
        setAddPostCount,
        commentId,
        setCommentId,
        activityThoughts,
        setActivityThoughts,
        activityImage,
        setActivityImage,
        activityDisplay,
        setActivityDisplay,
        editData,
        setEditData,
        editDataIndex,
        seteditDataIndex,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
