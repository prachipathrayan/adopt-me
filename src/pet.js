// import React from "react";
//
// export default function Pet({ name, animal, breed, media, location, id }) {
//   let hero = "http://placecorgi.com/300/300";
//   if (media.length) {
//     hero = media[0].small;
//   }
//
//   return (
//     <a href={`/details/${id}`} className="pet">
//       <div className="image-container">
//         <img src={hero} alt={name} />
//       </div>
//       <div className="info">
//         <h1>{name}</h1>
//         <h2>{`${animal} - ${breed} - ${location}`}</h2>
//       </div>
//     </a>
//   );
// }

import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
