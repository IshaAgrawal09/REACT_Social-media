import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import CartContext from "./Context";
import { useContext } from "react";

const ShowPost = () => {
  const {
    addPostArr,
    setAddPostArr,
    commentId,
    setCommentId,
    loggedUser,
    setActivityThoughts,
    setActivityImage,
    setActivityDisplay,
    setEditData,
    seteditDataIndex,
  } = useContext(CartContext);

  const [thoughts, setThoughts] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // EmojiPicker
  const onEmojiClick = (event, emojiObject) => {
    setThoughts((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  // DELETE UPLOADED POST
  const deletePost = (event) => {
    let result = window.confirm("Are You Sure, you want to delete this Post?");

    console.log(event.currentTarget.id);
    if (result) {
      setAddPostArr(
        addPostArr.filter((items, index) => {
          return index != event.currentTarget.id;
        })
      );
    }
  };

  // EDIT UPLOADED POST
  const editPost = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    addPostArr.filter((items, index) => {
      if (index == event.currentTarget.id) {
        setActivityThoughts(items.text);
        setActivityImage(items.image);
        setActivityDisplay("block");
        setEditData(true);
        seteditDataIndex(index);
      }
    });
  };
  // LIKE FUNCTION
  const like = (event) => {
    setAddPostArr(
      addPostArr.map((item, index) => {
        if (index == event.currentTarget.id) {
          if (item.likes === 0) {
            item.likes = item.likes + 1;
          } else {
            item.likes = 0;
          }
        }
        return item;
      })
    );
  };
  console.log("Single Post.......");
  console.log(addPostArr);

  // COMMENT FUNCTION
  const comment = (event) => {
    setAddPostArr(
      addPostArr.map((item, index) => {
        if (index == event.currentTarget.id) {
          item.commentInputDisplay = true;
        }
        return item;
      })
    );
  };

  // POST COMMENT FUNCTION
  const commentPost = (event) => {
    if (thoughts !== "") {
      setAddPostArr(
        addPostArr.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.commentInputDisplay = false;
            item.commentArrDisplay = true;
            item.comment = [
              ...item.comment,
              { id: commentId, text: thoughts },
            ].reverse();
          }
          return item;
        })
      );
    }
    setThoughts("");
    setCommentId(commentId + 1);
  };

  return (
    <div className="showPostPage">
      <h3>All Updates</h3>
      {addPostArr.map((item, index) => {
        return (
          <div className="singlePost" key={index}>
            {/* SINGLE POST HEAD   */}
            <div className="singlePostHead">
              <div style={{ display: "flex" }}>
                <div id="userIcon">
                  <img src="singlePostIcon.jpeg" alt="" />
                </div>
                <div className="singlePostContent">
                  <p>
                    <b>{item.username}</b>&nbsp;posted an update
                  </p>
                  <p>
                    1 year ago &nbsp;&nbsp;
                    <i className="fa-solid fa-earth-americas"></i>
                  </p>
                </div>
              </div>
              {/* EDIT DELETE ICONS  */}
              {item.username == loggedUser ? (
                <div className="editDeleteIcons">
                  <button
                    style={{ color: "purple" }}
                    id={index}
                    onClick={editPost}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    style={{ color: "red" }}
                    onClick={deletePost}
                    id={index}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              ) : null}
            </div>
            {/* POST IMAGE  */}
            <div className="singlePostUpload">
              <img src={item.image} alt="" />
            </div>
            {/* POST CAPTION  */}
            <h4 id="postCaption">
              {item.username}:&nbsp;&nbsp;
              <span style={{ fontWeight: "400" }}>{item.text}</span>
            </h4>
            {/* LIKE COMMENT SECTION  */}
            <div className="likeComment">
              <p>
                {item.likes}&nbsp; Like&nbsp;&nbsp;&nbsp;{item.comment.length}
                &nbsp;Comments
              </p>
              {item.likes !== 0 ? (
                <span>
                  <i
                    className={`fa-solid fa-thumbs-up`}
                    id={index}
                    onClick={like}
                  ></i>
                  Unlike
                </span>
              ) : (
                <span>
                  <i
                    className={`fa-regular fa-thumbs-up`}
                    id={index}
                    onClick={like}
                  ></i>
                  Like
                </span>
              )}
              <span>
                <i
                  className="fa-regular fa-comment"
                  id={index}
                  onClick={comment}
                ></i>
                Comment
              </span>
            </div>
            {/* COMMENT INPUT DISPLAY  */}

            {item.commentInputDisplay == true ? (
              <>
                <div className="commentSection">
                  <div className="userIcon">
                    <img src="userIcon.png" alt="" />
                  </div>

                  <div id="thoughts">
                    <input
                      type="text"
                      value={thoughts}
                      onChange={(event) => setThoughts(event.target.value)}
                    />
                  </div>
                </div>
                <div className="commentSectionIcon">
                  <div className="leftSection">
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-solid fa-video"></i>
                    <img
                      title="Emoji"
                      className="emoji-icon"
                      src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                      alt=""
                      onClick={() => setShowPicker((val) => !val)}
                    />
                    {showPicker && (
                      <Picker
                        pickerStyle={{ width: "100%" }}
                        onEmojiClick={onEmojiClick}
                      />
                    )}
                  </div>
                  <div className="rightSection">
                    <button id={index} onClick={commentPost}>
                      POST
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {/* COMMENTS ARRAY DISPLAY  */}
            {item.commentArrDisplay == true ? (
              <div className="commentDekho">
                <table>
                  <tbody>
                    {item.comment.map((items) => {
                      return (
                        <tr>
                          <td>
                            <div id="userkiPhoto">
                              <img src="userIcon.png" alt="" />
                            </div>

                            <div>
                              <h5>
                                {loggedUser} &nbsp;
                                <span style={{ color: "gray" }}>
                                  a second ago
                                </span>
                              </h5>

                              <p>{items.text}</p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ShowPost;
