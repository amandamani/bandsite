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

let createNewComment = (element) => {
    const divTop = document.createElement('div');
    divTop.classList.add('newComment');

    const divImg = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/Images/greyBackground.jpg')
    img.setAttribute('alt', 'No User Icon')
    img.classList.add('commentsForm__userIcon')
    divImg.appendChild(img);
    divTop.appendChild(divImg);

    const divInfo = document.createElement('div');

    const divUserDetails = document.createElement('div');
    divUserDetails.classList.add('newComment__userDetails');

    const userName = document.createElement('h3');
    userName.classList.add('newComment__userDetails__h3')
    userName.innerText = element.userName;
    divUserDetails.appendChild(userName);

    const timeStamp = document.createElement('h3');
    timeStamp.classList.add('newComment__userDetails--mercuryTextcolor')
    timeStamp.innerText = element.timeStamp;
    divUserDetails.appendChild(timeStamp);

    divInfo.appendChild(divUserDetails);

    const pInfo = document.createElement('p');
    pInfo.innerText = element.userComment;

    divInfo.appendChild(pInfo);

    divTop.appendChild(divInfo);

    const hrLine = document.createElement('hr');

    const commentSection = document.getElementById('commentSection');

    commentSection.appendChild(divTop);
    commentSection.appendChild(hrLine);

} 

let renderComments = () => {
    (document.getElementById('commentSection')).innerHTML = "<hr>";
    comments.forEach(element => {
        createNewComment(element);
    })
}

renderComments();

const commentsForm = document.getElementById('commentsForm');

commentsForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let commentToAdd = {};
    commentToAdd.userName = e.target.userName.value;
    commentToAdd.userComment = e.target.userComment.value;
    let current_date = new Date();
    commentToAdd.timeStamp = String(current_date.getMonth() + 1 + "/" + current_date.getDate() + "/" + current_date.getFullYear());
    comments.unshift(commentToAdd);
    e.target.reset();
    renderComments();
})
