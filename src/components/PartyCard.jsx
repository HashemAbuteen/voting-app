import "./style/PartyCard.css";
function PartyCard({ party, onVote, partyCount }) {
  const handleVote = () => {
    onVote(party.id);
  };

  return (
    <div className="party-card">
      <div className="party-card-top">
        <img src={party.image} alt={party.name} />
        <div className="party-card-name">
          <h2>{party.name}</h2>
          <h3>votes: {partyCount}</h3>
        </div>
      </div>
      <div className="party-card-button-div">
        <button onClick={handleVote}>Vote for {party.name}</button>
      </div>
    </div>
  );
}

export default PartyCard;
