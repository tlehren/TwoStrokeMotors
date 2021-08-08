// const button = document.querySelector("a.randomButton");

// const sites = [
//     'https://www.youtube.com/watch?v=_r0n9Dv6XnY&ab_channel=nailofgilead',
//     'https://www.youtube.com/watch?v=C1JD3a_FuEY&ab_channel=nailofgileadnailofgilead',
//     'https://www.nbcsports.com/edge/football/nfl/player/11856/jeff-wilson',
//     'https://www.unomaha.edu/international-studies-and-programs/center-for-afghanistan-studies/about-us/jack-shroder.php',
//     'https://www.youtube.com/watch?v=m9kaQ3ZKPE0'
// ];

// let randomSite = function() {

// }

// button.addEventListener("click", () => {
//     let i = sites[Math.floor(Math.random()*items.length)];
//     location.href = sites[i];

// });

const sites = [
    'https://www.youtube.com/watch?v=_r0n9Dv6XnY&ab_channel=nailofgilead',
    'https://www.youtube.com/watch?v=C1JD3a_FuEY&ab_channel=nailofgileadnailofgilead',
    'https://www.nbcsports.com/edge/football/nfl/player/11856/jeff-wilson',
    'https://www.unomaha.edu/international-studies-and-programs/center-for-afghanistan-studies/about-us/jack-shroder.php',
    'https://www.youtube.com/watch?v=m9kaQ3ZKPE0'
];

function randomSite() {
    let i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}
