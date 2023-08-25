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

    //CREATE ROW
    const showItem = document.createElement('div');
    showItem.classList.add('shows__add');
    showItem.setAttribute('id', 'show'+shows.indexOf(element))

    // ADD DATE
    const showDate = document.createElement('div');
    showDate.classList.add('shows__add__section');
    showDate.setAttribute('id', 'show'+shows.indexOf(element))
    const dateHeading = document.createElement('h5');
    dateHeading.classList.add('shows__add__section__cell-content');
    dateHeading.innerText = "DATE";
    dateHeading.setAttribute('id', 'show'+shows.indexOf(element))
    const dateContent = document.createElement('h3');

    if (shows.indexOf(element) === 0) {
        dateContent.classList.add('shows__add__section__cell-content');
    }
    else{
        dateContent.classList.add('shows__add__section__sub-heading--bold');
    }
    
    dateContent.innerText = element.date;
    dateContent.setAttribute('id', 'show'+shows.indexOf(element))
    if(!mediaQuery.matches){
        showDate.appendChild(dateHeading);}
    showDate.appendChild(dateContent);
    showItem.appendChild(showDate);

     // ADD VENUE
     const showVenue = document.createElement('div');
     showVenue.classList.add('shows__add__section');
     showVenue.setAttribute('id', 'show'+shows.indexOf(element))
     const venueHeading = document.createElement('h5');
     venueHeading.classList.add('shows__add__section__cell-content');
     venueHeading.innerText = "VENUE";
     venueHeading.setAttribute('id', 'show'+shows.indexOf(element))
     const venueContent = document.createElement('h3');
     if (shows.indexOf(element) === 0) {
        venueContent.classList.add('shows__add__section__cell-content');
    }
    else{
        venueContent.classList.add('shows__add__section__sub-heading');
    }
     venueContent.innerText = element.venue;
     venueContent.setAttribute('id', 'show'+shows.indexOf(element))
     if(!mediaQuery.matches){
         showVenue.appendChild(venueHeading);}
     showVenue.appendChild(venueContent);
     showItem.appendChild(showVenue);

     // ADD LOCATION
     const showLocation = document.createElement('div');
     showLocation.classList.add('shows__add__section');
     showLocation.setAttribute('id', 'show'+shows.indexOf(element))
     const locationHeading = document.createElement('h5');
     locationHeading.classList.add('shows__add__section__cell-content');
     locationHeading.innerText = "LOCATION";
     locationHeading.setAttribute('id', 'show'+shows.indexOf(element))
     const locationContent = document.createElement('h3');
     if (shows.indexOf(element) === 0) {
        locationContent.classList.add('shows__add__section__cell-content');
    }
    else{
        locationContent.classList.add('shows__add__section__sub-heading');
    }
     locationContent.innerText = element.location;
     locationContent.setAttribute('id', 'show'+shows.indexOf(element))
     if(!mediaQuery.matches){
         showLocation.appendChild(locationHeading);}
     showLocation.appendChild(locationContent);
     showItem.appendChild(showLocation);

     // ADD BUTTON
     const buttonCell = document.createElement('div');
     buttonCell.classList.add('shows__add__section');
     buttonCell.setAttribute('id', 'show'+shows.indexOf(element))
     const buyTicket = document.createElement('button');
     buyTicket.classList.add('bandsite__button');
     buyTicket.classList.add('bandsite__button__buyticket');
     if (shows.indexOf(element) === 0){
        buyTicket.classList.add('hidden')
     }
     buyTicket.innerText = "BUY TICKETS";
     buyTicket.setAttribute('id', 'show'+shows.indexOf(element))
     buttonCell.appendChild(buyTicket);
     showItem.appendChild(buttonCell);

    const hrLine = document.createElement('hr');

    const showSection = document.getElementById('shows');

    showSection.appendChild(showItem);
    if (shows.indexOf(element) !== 0){
        showSection.appendChild(hrLine);}
} 

let renderShows = () => {
    let showSection = document.getElementById('shows')
    showSection.innerText = '';

    shows.forEach(element => {
        if (shows.indexOf(element) === 0){
            if (mediaQuery.matches) {
                createNewShow(element);
            }
        }
        else{
            createNewShow(element);
        }
    })
}

renderShows();

window.addEventListener("resize", renderShows);



window.addEventListener("click", (e) => {

    e.stopImmediatePropagation();
    let highlighted = document.querySelectorAll('.highlight');
    if (highlighted.length > 0) {
        highlighted[0].classList.remove('highlight');
    }
    
    let showId = e.target.id;
    if (showId !== "show0"){
        let shows = document.querySelectorAll('#'+showId);
        shows[0].classList.add('highlight');
    }
    
})
