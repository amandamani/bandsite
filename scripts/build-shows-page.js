let shows = [
    {
        date: "DATE",

        venue: "VENUE" ,

        location: "LOCATION"
    },
    {
        date: "Mon Sept 06 2021",

        venue: "Ronald Lane" ,

        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",

        venue: "Pier 3 East" ,

        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",

        venue: "View Lounge" ,

        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",

        venue: "Hyatt Agency" ,

        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",

        venue: "Moscow Center" ,

        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",

        venue: "Press Club" ,

        location: "San Francisco, CA"
    }
];

const mediaQuery = window.matchMedia('(min-width: 768px)')

let createNewShow = (element) => {
    const divTop = document.createElement('div');
    divTop.classList.add('shows__add');

    // ADD DATE
    const divDate = document.createElement('div');
    divDate.classList.add('shows__add__section');
    const h5 = document.createElement('h5');
    //h5.classList.add('commentsForm__userIcon');
    h5.innerText = "DATE";
    const h3 = document.createElement('h3');
    //h3.classList.add('commentsForm__userIcon');
    h3.innerText = element.date;
    if(!mediaQuery.matches){
        divDate.appendChild(h5);}
    divDate.appendChild(h3);
    divTop.appendChild(divDate);

     // ADD VENUE
     const divVenue = document.createElement('div');
     divVenue.classList.add('shows__add__section');
     const h5Venue = document.createElement('h5');
     //h5Venue.classList.add('commentsForm__userIcon');
     h5Venue.innerText = "VENUE";
     const h3Venue = document.createElement('h3');
     //h3Venue.classList.add('commentsForm__userIcon');
     h3Venue.innerText = element.venue;
     if(!mediaQuery.matches){
         divDate.appendChild(h5Venue);}
     divVenue.appendChild(h3Venue);
     divTop.appendChild(divVenue);

     // ADD LOCATION
     const divLocation = document.createElement('div');
     divLocation.classList.add('shows__add__section');
     const h5Location = document.createElement('h5');
     //h5Location.classList.add('commentsForm__userIcon');
     h5Location.innerText = "LOCATION";
     const h3Location = document.createElement('h3');
     //h3Location.classList.add('commentsForm__userIcon');
     h3Location.innerText = element.location;
     if(!mediaQuery.matches){
         divLocation.appendChild(h5Location);}
     divLocation.appendChild(h3Location);
     divTop.appendChild(divLocation);

     // ADD BUTTON
     const divButton = document.createElement('div');
     divButton.classList.add('shows__add__section');
     const button = document.createElement('button');
     //button.classList.add('commentsForm__userIcon');
     if (shows.indexOf(element) === 0){
        button.classList.add('hidden')
     }
     button.innerText = "BUY TICKETS";
     divButton.appendChild(button);
     divTop.appendChild(divButton);

    const hrLine = document.createElement('hr');

    const showSection = document.getElementById('shows');

    showSection.appendChild(divTop);
    if (shows.indexOf(element) !== 0){
        showSection.appendChild(hrLine);}
} 

let renderShows = () => {
    
    (document.getElementById('shows')).innerHTML = '<h1 class="bandsite__main__h1--bold">Shows</h1>';

    shows.forEach(element => {
        if (shows.indexOf(element) === 0){
            if (mediaQuery.matches) {
                createNewShow(element);
            }
            else{
                //do nothing
            }
        }
        else{
            createNewShow(element);
        }
    })
}

renderShows();
window.addEventListener("resize", renderShows);
