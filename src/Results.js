// import React from "react";
// import Pet from "./pet";
//
// const Results = ({ pets }) => {
//   return (
//     <div className="search">
//       {pets.length === 0 ? (
//         <h1>No Pets Found</h1>
//       ) : (
//         pets.map((pet) => (
//           <Pet
//             animal={pet.type}
//             key={pet.id}
//             name={pet.name}
//             breed={pet.breeds.primary}
//             media={pet.photos}
//             location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
//             id={pet.id}
//           />
//         ))
//       )}
//     </div>
//   );
// };
//
// export default Results;

import Pet from "./pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
