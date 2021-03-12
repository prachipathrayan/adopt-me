// import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
// import Results from "./results";
// import useDropdown from "./userDropdown";
// import Pet from "./pet";
//
// const SearchParams = () => {
//   const [location, setLocation] = useState("Seattle, WA");
//   const [breeds, setBreeds] = useState([]);
//   const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
//   const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
//   const [pets, setPets] = useState([]);
//
//   async function requestPets() {
//     const res = await fetch(
//       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
//     );
//
//     const json = await res.json;
//     setPets(json.pets);
//   }
//
//   useEffect(() => {
//     // setBreeds([]);
//     // setBreed("");
//     //
//     // pet.breeds(animal).then(({ breeds: apiBreeds }) => {
//     //   const breedStrings = apiBreeds.map(({ name }) => name);
//     //   setBreeds(breedStrings);
//     // }, console.error);
//     requestPets();
//   }, [animal, setBreeds, setBreed]);
//
//   return (
//     <div className="search-params">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           requestPets();
//         }}
//       >
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </label>
//         <AnimalDropdown />
//         <BreedDropdown />
//         <button>Submit</button>
//       </form>
//       {/*<Results pets={pets}></Results>*/}
//       {pets.map((pet) => (
//         <Pet
//           name={pet.name}
//           animal={pet.animal}
//           breed={pet.breed}
//           key={pet.id}
//         />
//       ))}
//     </div>
//   );
// };
//
// export default SearchParams;

import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            className="search-control"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animal
          <select
            className="search-control"
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="breed">
          Breed
          <select
            className="search-control disabled:opacity-50"
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            className="search-control"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
