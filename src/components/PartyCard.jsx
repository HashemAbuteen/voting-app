function PartyCard({ party, onVote, partyCount }) {
  const handleVote = () => {
    onVote(party.id);
  };

  return (
    <div className="party-card">
      <img src={party.image} alt={party.name} />
      <h2>{party.name}</h2>
      <h3>votes: {partyCount}</h3>
      <button onClick={handleVote}>Vote for {party.name}</button>
    </div>
  );
}

export default PartyCard;
