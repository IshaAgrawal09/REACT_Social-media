import React, { useState } from "react";
import CartContext from "./Context";
import { useContext } from "react";
const Activity = () => {
  const {
    loggedUser,
    addPostArr,
    setAddPostArr,
    addPostCount,
    setAddPostCount,
    commentId,
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
  } = useContext(CartContext);

  const handleImageUpload = (event) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setActivityImage(image);
    setActivityDisplay("block");
    event.target.value = "";
  };

  //   NEW POST FUNCTION
  const newPost = () => {
    if (activityThoughts == "" || activityImage == "") {
      alert("Please share your Thoughts and a Post Image too!");
    } else {
      if (editData) {
        setAddPostArr([
          ...addPostArr.filter((item, index) => {
            if (index == editDataIndex) {
              item.text = activityThoughts;
              item.image = activityImage;

              return item;
            }
            return item;
          }),
        ]);
        setEditData(false);
      } else {
        setAddPostArr([
          {
            id: addPostCount,
            username: loggedUser,
            text: activityThoughts,
            image: activityImage,
            likes: 0,
            comment: [],
            commentDisplay: false,
            commentId: commentId,
          },
          ...addPostArr,
        ]);
        setAddPostCount(addPostCount + 1);
      }
    }
    setActivityThoughts("");
    setActivityImage("");
    setActivityDisplay("none");
  };
  console.log(addPostArr);
  return (
    <div className="activityPage">
      <h2>Activity Feed</h2>
      <div className="shareYourFeed">
        <div id="userIcon">
          <img src="userIcon.png" alt="" />
        </div>
        <div id="thoughts">
          <input
            type="text"
            placeholder={`Share What's on your mind, ${loggedUser}...`}
            value={activityThoughts}
            onChange={(event) => setActivityThoughts(event.target.value)}
          />
        </div>
      </div>
      <div className="lowerDiv">
        <div className="showPostImage" style={{ display: activityDisplay }}>
          <img src={activityImage} alt="" />
        </div>
        <div className="functionFlex">
          <div className="attachIcon">
            <i className="fa-solid fa-camera"></i>
            <input type="file" id="choose" onChange={handleImageUpload} />
          </div>
          <div id="postButton">
            <button onClick={newPost}>POST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
