// export function Character(character) {
//   return (
//     <div key={character.id}>
//       <h2>{props.character.name}</h2>
//       <img src={character.image} alt={character.name} />
//     </div>
//   );
// }

// export default Character;


export function Character(character) {
  return (
    <div className="text-center p-5" key={character.id}>
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <p>{ character.origin.name}</p>
    </div>
  );
}
export default Character;