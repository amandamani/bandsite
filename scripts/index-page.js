let comments = [

    {userName: "Connor Walton",
    timeStamp: "02/17/2021",
    userComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},

    {userName: "Emilie Beach",
    timeStamp: "01/09/2021",
    userComment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},

    {userName: "Miles Acosta",
    timeStamp: "12/20/2020",
    userComment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
];

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

let displayComment = () => {
    
    const commentSection = document.getElementById('comment-section');
    commentSection.innerText = "";
    const hrEl = document.createElement('hr')
    commentSection.appendChild(hrEl)
    
    comments.forEach(element => {
        createnewcomment(element);
    })
}

displayComment();

const commentsForm = document.getElementById('comments-form');

commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentToAdd = {};
    commentToAdd.userName = e.target.userName.value;
    commentToAdd.userComment = e.target.userComment.value;
    let current_date = new Date();
    commentToAdd.timeStamp = String(current_date.getMonth() + 1 + "/" + current_date.getDate() + "/" + current_date.getFullYear());
    comments.unshift(commentToAdd);
    e.target.reset();
    displayComment();
})
