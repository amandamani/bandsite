//API KEY AND URL DEFINED
let apiUrl = "https://project-1-api.herokuapp.com/";
let apiKey = "9e0e3d6d-f22e-49f7-a582-6f15fcd91c55";

//UPDATE COMMENTS FROM API CALL
updateComments = () => {
    let comments = new Array();
    let currentTime = new Date();
    let displayComment = () => {
        const commentSection = document.getElementById('comment-section');
        commentSection.innerText = "";
        const hrEl = document.createElement('hr')
        commentSection.appendChild(hrEl)
        
        comments.forEach(element => {
            createnewcomment(element);
        })
    };

    //GET THE TIME DIFFERENCE BETWEEN CURRENT TIMESTAMP AND COMMENT TIMESTAMP AND RETURN DYNAMIC TIMESTAMP STRING
    function dynamicTimeString(dynaimcTimeStamp) {
        let timeDifference = Math.round(currentTime.getFullYear() - dynaimcTimeStamp.getFullYear());
        if ( timeDifference >= 1){
            return timeDifference == 1 ? `${timeDifference} year ago` : `${timeDifference} years ago`;
        }
        else if (Math.round((currentTime.getMonth() + 1) - (dynaimcTimeStamp.getMonth() + 1)) > 0) {
            timeDifference = Math.round((currentTime.getMonth() + 1) - (dynaimcTimeStamp.getMonth() + 1))
            return timeDifference == 1 ? `${timeDifference} month ago` : `${timeDifference} months ago`;
        }
        else if (Math.round(currentTime.getDate()  - dynaimcTimeStamp.getDate()) >= 1) {
            timeDifference = Math.round(currentTime.getDate()  - dynaimcTimeStamp.getDate())
            return timeDifference == 1 ? `${timeDifference} day ago` : `${timeDifference} days ago`;
        }
        else if (Math.round((currentTime.getHours() + 1)  - (dynaimcTimeStamp.getHours() + 1)) >= 1) {
            timeDifference = Math.round((currentTime.getHours() + 1)  - (dynaimcTimeStamp.getHours() + 1))
            return timeDifference == 1 ? `${timeDifference} hour ago` : `${timeDifference} hours ago`;
        }
        else if (Math.round((currentTime.getMinutes() + 1)  - (dynaimcTimeStamp.getMinutes() + 1)) >= 1) {
            timeDifference = Math.round((currentTime.getMinutes() + 1)  - (dynaimcTimeStamp.getMinutes() + 1))
            return timeDifference == 1 ? `${timeDifference} minute ago` : `${timeDifference} minutes ago`;
        }
        else {
            timeDifference = Math.round((currentTime.getSeconds() + 1)  - (dynaimcTimeStamp.getSeconds()) + 1)
            return timeDifference == 1 ? `${timeDifference} second ago` : `${timeDifference} seconds ago`;
        }
    };

    //GET REQUEST FOR COMMENTS
    const data = axios.get(apiUrl+"comments"+"?api_key="+apiKey)
    data.then(
        result => {
            result.data.forEach(element => {
                let object = {};
                object.userName = element.name;
                object.timeStamp = element.timestamp;
                object.id = element.id;
                object.userComment = element.comment;
                object.likes = element.likes;
                object.dynaimcTimeStamp = new Date(element.timestamp);
                comments.push(object);
                
            });
            //sort comments by timestamp desc
            comments.sort(function(a, b){return b.timeStamp - a.timeStamp});
            comments.forEach(element => {
                // uncomment the line below for dd/mm/yyyy format and comment the line after
                // element.timeStamp = new Intl.DateTimeFormat('en-US', {day: "2-digit", month: "2-digit", year:"numeric"}).format(element.timeStamp)

                element.timeStamp = dynamicTimeString(element.dynaimcTimeStamp);
            })
            //then display each comment
            displayComment();
        }
    );
}

//CREATE INDIVIDUAL COMMENT FUNCTIONALITY
let createnewcomment = (element) => {
    //new comment div
    const newComment = document.createElement('div');
    newComment.classList.add('new-comment');

    //user photo div
    const userPictureContainer = document.createElement('div');
    const userPhoto = document.createElement('img');
    userPhoto.setAttribute('src', 'assets/Images/greyBackground.jpg')
    userPhoto.setAttribute('alt', 'No User Icon')
    userPhoto.classList.add('comments-form__usericon')
    userPictureContainer.appendChild(userPhoto);
    newComment.appendChild(userPictureContainer);

    //User details div and user comment div
    const userInfo = document.createElement('div');
    const userComment = document.createElement('div');

    const userDetails = document.createElement('div');
    userDetails.classList.add('new-comment__userdetails');

    //userName Element
    const userName = document.createElement('h3');
    userName.classList.add('new-comment__userdetails__sub-heading')
    userName.innerText = element.userName;
    userDetails.appendChild(userName);

    //Timestamp Element
    const timeStamp = document.createElement('h3');
    timeStamp.classList.add('new-comment__userdetails--mercuryTextcolor')
    timeStamp.innerText = element.timeStamp;
    userDetails.appendChild(timeStamp);

    userInfo.appendChild(userDetails);

    //User comment element
    const userCommentContent = document.createElement('p');
    userCommentContent.classList.add('new-comment__userdetails__comment');
    userCommentContent.innerText = element.userComment;
    userComment.appendChild(userCommentContent);

    //Like button
    const likeButton = document.createElement('button');
    likeButton.id = element.id;
    likeButton.classList.add('like-button');

    const likeLogo = document.createElement('img');
    likeLogo.src = "assets/icons/SVG/icon-like.svg";
    likeLogo.alt = "likeLogo";
    likeLogo.id = element.id;
    likeLogo.classList.add('like');
    likeButton.appendChild(likeLogo);

    const likes = document.createElement('span');
    likes.innerText = element.likes;
    likes.classList.add('like');
    likeButton.appendChild(likes);

    userComment.appendChild(likeButton);

    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.id = element.id;
    deleteButton.classList.add('delete-button')

    const deleteLogo = document.createElement('img');
    deleteLogo.src = "assets/icons/SVG/icon-delete.svg";
    deleteLogo.alt = "deleteLogo";
    deleteLogo.id = element.id;
    deleteLogo.classList.add('delete-button')
    deleteButton.appendChild(deleteLogo);

    userComment.appendChild(deleteButton);




    
    userInfo.appendChild(userComment);

    newComment.appendChild(userInfo);

    const hrLine = document.createElement('hr');

    const commentSection = document.getElementById('comment-section');

    commentSection.appendChild(newComment);

    //Horizontal Line
    commentSection.appendChild(hrLine);
}

//On page refresh update comments again
updateComments();

//Form Validation function
function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);

  }
const commentsForm = document.getElementById('comments-form');
const commentInput = document.getElementById('userName');


//Comment submit EventListener
commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentToAdd = {};
    commentToAdd.name = e.target.userName.value;
    commentToAdd.comment = e.target.userComment.value;

    //Form input validation
    if (!(onlyLettersAndSpaces(commentToAdd.name))){
        e.target.reset();
        commentInput.classList.remove('comments-form__feild--error');
        return
    }
    //Reset form feilds
    e.target.reset();

    //Post new Comment
    const postComment = axios.post(apiUrl+"comments"+"?api_key="+apiKey, commentToAdd);
    postComment
    .then(
        result => {
            updateComments();
        }
    )
    .catch(
        err => {
            alert("Error: " + err);
        }
        )
})

//Form Validation event listener
commentInput.addEventListener('input', (e) => {
    e.preventDefault()
    if(!(onlyLettersAndSpaces(commentInput.value))){
        commentInput.classList.add('comments-form__feild--error');
    }
    else {
        commentInput.classList.remove('comments-form__feild--error');
    }
})

const commentSection = document.getElementById('comment-section');

//Like and Delete Functionality
commentSection.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const commentId = e.target.attributes.id.nodeValue;
    const commentClass = e.target.attributes.class.nodeValue;
    if (commentClass == 'delete-button') {
        const deleteComment = axios.delete(apiUrl+"comments/"+commentId+"?api_key="+apiKey);
        deleteComment
        .then(
                result => {
                    updateComments();
                }
            )
            .catch(
                err => {
                    alert("Error: " + err);
                }
                )
    }
    else if (commentClass == 'like-button' || commentClass == 'like'){
        const addLike = axios.put(apiUrl+"comments/"+commentId+"/like"+"?api_key="+apiKey);
        addLike
        .then(
            result => {
                updateComments();
            }
        )
        .catch(
            err => {
                alert("Error: " + err);
            }
            )
    }
})