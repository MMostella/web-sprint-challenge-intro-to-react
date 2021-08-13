// import React, { useState, useEffect } from "react";
// import axios from "axios";


// export default function Details(props) {
//     // const { name, pHeight, pMass, pHairColor, pSkinColor, pEyeColor, pBirthYear, pGender, pHomeworld, pFilms, pSpecies, pVehicles, pStarships, pCreated, pEdited, pUrl };

//     useEffect(() => {
//         axios.get(`https://swapi.dev/api/people`)
//         .then(res => {
//           // console.log(res.data);
//           // const list = res.data.map(person => {
//           //   return person;
//           res.data.forEach(person => {
//             const personName = person.name;
//             const personHeight = person.height;
//             const personMass = person.mass;
//             const personHairColor = person.hair_color;
//             const personSkinColor = person.skin_color;
//             const personEyeColor = person.eye_color;
//             const personBirthYear = person.birth_year;
//             const personGender = person.gender;
//             const personHomeworld = person.homeworld;
//             const personFilms = person.films;
//             const personSpecies = person.species;
//             const personVehicles = person.vehicles;
//             const personStartships = person.starships;
//             const personCreated = person.created;
//             const personEdited = person.edited;
//             const personUrl = person.url;
//             getName(personName);
//             getHeight(personHeight);
//             getMass(personMass);
//             getHairColor(personHairColor);
//             getSkinColor(personSkinColor);
//             getEyeColor(personEyeColor);
//             getBirthYear(personBirthYear);
//             getGender(personGender);
//             getHomeworld(personHomeworld);
//             getFilms(personFilms);
//             getSpecies(personSpecies);
//             getVehicles(personVehicles);
//             getStarships(personStartships);
//             getCreated(personCreated);
//             getEdited(personEdited);
//             getUrl(personUrl);
//           });
//         })
//       }, [])

//     const [name, getName] = useState('');
//     const [height, getHeight] = useState('');
//     const [mass, getMass] = useState('');
//     const [hairColor, getHairColor] = useState('');
//     const [skinColor, getSkinColor] = useState('');
//     const [eyeColor, getEyeColor] = useState('');
//     const [birthYear, getBirthYear] = useState('');
//     const [gender, getGender] = useState('');
//     const [homeworld, getHomeworld] = useState('');
//     const [films, getFilms] = useState([]);
//     const [species, getSpecies] = useState('');
//     const [vehicles, getVehicles] = useState([]);
//     const [starships, getStarships] = useState([]);
//     const [created, getCreated] = useState('');
//     const [edited, getEdited] = useState('');
//     const [url, getUrl] = useState('');

//     console.log(name);

//     return (
//         <>
//             {name}
//         </>
//     )
// }
