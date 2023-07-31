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
    divTop.setAttribute('id', 'show'+shows.indexOf(element))

    // ADD DATE
    const divDate = document.createElement('div');
    divDate.classList.add('shows__add__section');
    divDate.setAttribute('id', 'show'+shows.indexOf(element))
    const h5 = document.createElement('h5');
    h5.classList.add('shows__add__section__h5');
    h5.innerText = "DATE";
    h5.setAttribute('id', 'show'+shows.indexOf(element))
    const h3 = document.createElement('h3');
    if (shows.indexOf(element) === 0) {
        h3.classList.add('shows__add__section__h5');
    }
    else{
        h3.classList.add('shows__add__section__h3--bold');
    }
    h3.innerText = element.date;
    h3.setAttribute('id', 'show'+shows.indexOf(element))
    if(!mediaQuery.matches){
        divDate.appendChild(h5);}
    divDate.appendChild(h3);
    divTop.appendChild(divDate);

     // ADD VENUE
     const divVenue = document.createElement('div');
     divVenue.classList.add('shows__add__section');
     divVenue.setAttribute('id', 'show'+shows.indexOf(element))
     const h5Venue = document.createElement('h5');
     h5Venue.classList.add('shows__add__section__h5');
     h5Venue.innerText = "VENUE";
     h5Venue.setAttribute('id', 'show'+shows.indexOf(element))
     const h3Venue = document.createElement('h3');
     if (shows.indexOf(element) === 0) {
        h3Venue.classList.add('shows__add__section__h5');
    }
    else{
        h3Venue.classList.add('shows__add__section__h3');
    }
     h3Venue.innerText = element.venue;
     h3Venue.setAttribute('id', 'show'+shows.indexOf(element))
     if(!mediaQuery.matches){
         divVenue.appendChild(h5Venue);}
     divVenue.appendChild(h3Venue);
     divTop.appendChild(divVenue);

     // ADD LOCATION
     const divLocation = document.createElement('div');
     divLocation.classList.add('shows__add__section');
     divLocation.setAttribute('id', 'show'+shows.indexOf(element))
     const h5Location = document.createElement('h5');
     h5Location.classList.add('shows__add__section__h5');
     h5Location.innerText = "LOCATION";
     h5Location.setAttribute('id', 'show'+shows.indexOf(element))
     const h3Location = document.createElement('h3');
     if (shows.indexOf(element) === 0) {
        h3Location.classList.add('shows__add__section__h5');
    }
    else{
        h3Location.classList.add('shows__add__section__h3');
    }
     h3Location.innerText = element.location;
     h3Location.setAttribute('id', 'show'+shows.indexOf(element))
     if(!mediaQuery.matches){
         divLocation.appendChild(h5Location);}
     divLocation.appendChild(h3Location);
     divTop.appendChild(divLocation);

     // ADD BUTTON
     const divButton = document.createElement('div');
     divButton.classList.add('shows__add__section');
     divButton.setAttribute('id', 'show'+shows.indexOf(element))
     const button = document.createElement('button');
     button.classList.add('buttonBandsite');
     button.classList.add('buttonBandsite__buyTicket');
     if (shows.indexOf(element) === 0){
        button.classList.add('hidden')
     }
     button.innerText = "BUY TICKETS";
     button.setAttribute('id', 'show'+shows.indexOf(element))
     divButton.appendChild(button);
     divTop.appendChild(divButton);

    const hrLine = document.createElement('hr');

    const showSection = document.getElementById('shows');

    showSection.appendChild(divTop);
    if (shows.indexOf(element) !== 0){
        showSection.appendChild(hrLine);}
} 

let renderShows = () => {
    let showSection = document.getElementById('shows')
    showSection.innerHTML = '';

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
    showSection.appendChild(showDiv);
}

renderShows();

window.addEventListener("resize", renderShows);



window.addEventListener("click", (e) => {

    e.stopImmediatePropagation();
    let highlighted = document.querySelectorAll('.highlight');
    console.log(highlighted.length);
    if (highlighted.length > 0) {
        console.log(highlighted);
        highlighted[0].classList.add('what')
        highlighted[0].classList.remove('highlight');
    }
    
    let showId = e.target.id;
    if (showId !== "show0"){
        let shows = document.querySelectorAll('#'+showId);
        console.log(shows[0]);
        shows[0].classList.add('highlight');
    }
    
})
