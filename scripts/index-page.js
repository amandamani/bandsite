let apiUrl = "https://project-1-api.herokuapp.com/";
let apiKey = "9e0e3d6d-f22e-49f7-a582-6f15fcd91c55";

updateComments = () =>{
    let comments = new Array();

    let displayComment = () => {
        const commentSection = document.getElementById('comment-section');
        commentSection.innerText = "";
        const hrEl = document.createElement('hr')
        commentSection.appendChild(hrEl)
        
        comments.forEach(element => {
            createnewcomment(element);
        })
    };
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
                comments.push(object);
            });
            comments.sort(function(a, b){return b.timeStamp - a.timeStamp});
            comments.forEach(element => {
                element.timeStamp = new Intl.DateTimeFormat('en-US', {day: "2-digit", month: "2-digit", year:"numeric"}).format(element.timeStamp)
            })
            displayComment();
        }
    );
}
let createnewcomment = (element) => {
    const newComment = document.createElement('div');
    newComment.classList.add('new-comment');

    const userPictureContainer = document.createElement('div');
    const userPhoto = document.createElement('img');
    userPhoto.setAttribute('src', 'assets/Images/greyBackground.jpg')
    userPhoto.setAttribute('alt', 'No User Icon')
    userPhoto.classList.add('comments-form__usericon')
    userPictureContainer.appendChild(userPhoto);
    newComment.appendChild(userPictureContainer);

    const userInfo = document.createElement('div');

    const userDetails = document.createElement('div');
    userDetails.classList.add('new-comment__userdetails');

    const userName = document.createElement('h3');
    userName.classList.add('new-comment__userdetails__sub-heading')
    userName.innerText = element.userName;
    userDetails.appendChild(userName);

    const timeStamp = document.createElement('h3');
    timeStamp.classList.add('new-comment__userdetails--mercuryTextcolor')
    timeStamp.innerText = element.timeStamp;
    userDetails.appendChild(timeStamp);

    userInfo.appendChild(userDetails);

    const userCommentContent = document.createElement('p');
    userCommentContent.classList.add('new-comment__userdetails__comment');
    userCommentContent.innerText = element.userComment;

    userInfo.appendChild(userCommentContent);

    newComment.appendChild(userInfo);

    const hrLine = document.createElement('hr');

    const commentSection = document.getElementById('comment-section');

    commentSection.appendChild(newComment);
    commentSection.appendChild(hrLine);

}

updateComments();

const commentsForm = document.getElementById('comments-form');

commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentToAdd = {};
    commentToAdd.name = e.target.userName.value;
    commentToAdd.comment = e.target.userComment.value;
    e.target.reset();
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
