import PartyCard from "./PartyCard";
import "./style/PartyCardsList.css";

function PartyCardsList({ parties, handleVote, votes }) {
  return (
    <>
      <div className="voting-page-party-list">
        {parties.map((party) => (
          <PartyCard
            key={party.id}
            party={party}
            onVote={handleVote}
            partyCount={votes[party.id] || 0}
          />
        ))}
      </div>
    </>
  );
}

export default PartyCardsList;
