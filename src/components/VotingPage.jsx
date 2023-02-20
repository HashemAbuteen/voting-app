import { useState } from "react";
import Admin from "./Admin";
import Header from "./Header";
import PartyCard from "./PartyCard";

function VotingPage({ user, parties, onLogout }) {
  const [votes, setVotes] = useState(getVotes());
  const [userVotes, setUserVotes] = useState(getUserVotes());
  const [openAdminPage, setOpenAdminPage] = useState(false);

  function getVotes() {
    return JSON.parse(localStorage.getItem("votes")) || {};
  }

  function getUserVotes() {
    return JSON.parse(localStorage.getItem("userVotes")) || {};
  }
  function didVote() {
    if (userVotes[user.email]) {
      return true;
    }
    return false;
  }

  function getVotedForParty() {
    return parties.find((p) => p.id === userVotes[user.email]);
  }

  function updateStorage() {
    localStorage.setItem("votes", JSON.stringify(votes));

    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }

  const handleVote = (partyId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [partyId]: (prevVotes[partyId] || 0) + 1,
    }));

    setUserVotes((prevUserVotes) => ({
      ...prevUserVotes,
      [user.email]: partyId,
    }));
    updateStorage();
  };

  const handleClearVote = () => {
    const votedForParty = getVotedForParty();
    setVotes((prevVotes) => ({
      ...prevVotes,
      [votedForParty.id]: prevVotes[votedForParty.id] - 1,
    }));
    setUserVotes((prevUserVotes) => ({
      ...prevUserVotes,
      [user.email]: undefined,
    }));
    updateStorage();
  };

  const goToAdmin = () => {
    setOpenAdminPage(true);
  };

  const logout = () => {
    onLogout();
  };

  const goToVoting = () => {
    setOpenAdminPage(false);
  };

  return (
    <div>
      <Header
        name={user.name}
        isAdmin={user.type === "admin"}
        logout={logout}
        goToAdmin={goToAdmin}
        goToVoting={goToVoting}
      ></Header>
      {openAdminPage && (
        <Admin uservotes={userVotes} parties={parties} votes={votes}></Admin>
      )}
      {openAdminPage || didVote() || (
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
      {openAdminPage ||
        (didVote() && (
          <main>
            <p>You voted for {getVotedForParty().name}.</p>
            <button onClick={handleClearVote}>Change Vote</button>
            {user.type === "admin" && (
              <button onClick={goToAdmin}>Admin Page</button>
            )}
          </main>
        ))}
    </div>
  );
}

export default VotingPage;
