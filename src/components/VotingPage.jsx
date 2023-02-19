import { useEffect, useState } from "react";
import PartyCard from "./PartyCard";

function VotingPage({ user, parties, onLogout }) {
  const [votes, setVotes] = useState({});
  const [userVotes, setUserVotes] = useState({});
  const [voted, setVoted] = useState(false);
  const [party, setParty] = useState();

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(storedVotes);

    const storedUserVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedUserVotes);

    if (storedUserVotes[user.email]) {
      setVoted(true);
      setParty(parties.find((p) => p.id === storedUserVotes[user.email]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));

    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }, [votes, userVotes]);

  const handleVote = (partyId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [partyId]: (prevVotes[partyId] || 0) + 1,
    }));

    setUserVotes((prevUserVotes) => ({
      ...prevUserVotes,
      [user.email]: partyId,
    }));
    setVoted(true);
    setParty(parties.find((p) => p.id === partyId));
  };

  const handleClearVote = () => {
    setVoted(false);
    setParty(undefined);
    setVotes((prevVotes) => ({
      ...prevVotes,
      [party.id]: prevVotes[party.id] - 1,
    }));
    setUserVotes((prevUserVotes) => ({
      ...prevUserVotes,
      [user.email]: undefined,
    }));
  };

  const getPartyCount = (partyId) => {
    return votes[partyId] || 0;
  };

  return (
    <div>
      <header>
        <h1>
          Welcome, {user.name} ({user.type})
        </h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      {voted || (
        <main>
          <h2>Select your preferred political party:</h2>
          <div className="party-list">
            {parties.map((party) => (
              <PartyCard
                key={party.id}
                party={party}
                onVote={handleVote}
                partyCount={votes[party.id] || 0}
              />
            ))}
          </div>
        </main>
      )}
      {voted && (
        <main>
          <p>You voted for {party.name}.</p>
          <button onClick={handleClearVote}>Change Vote</button>
        </main>
      )}
    </div>
  );
}

export default VotingPage;
