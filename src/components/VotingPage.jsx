import { useEffect, useState } from "react";
import Admin from "./Admin";
import Header from "./Header";
import PartyCardsList from "./PartyCardsList";
import "./style/VotingPage.css";
import Voted from "./Voted";

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
  };

  const handleClearVote = () => {
    const votedForParty = getVotedForParty();
    setVotes((prevVotes) => ({
      ...prevVotes,
      [votedForParty.id]: prevVotes[votedForParty.id] - 1,
    }));
    delete userVotes[user.email];
    setUserVotes(userVotes);
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
    <>
      <Header
        name={user.name}
        isAdmin={user.type === "admin"}
        logout={logout}
        goToAdmin={goToAdmin}
        goToVoting={goToVoting}
      ></Header>
      {openAdminPage && (
        <main>
          <Admin uservotes={userVotes} parties={parties} votes={votes}></Admin>
        </main>
      )}
      {openAdminPage || didVote() || (
        <main>
          <PartyCardsList
            parties={parties}
            handleVote={handleVote}
            votes={votes}
          />
        </main>
      )}
      {openAdminPage ||
        (didVote() && (
          <main>
            <Voted
              votedForParty={getVotedForParty()}
              handleClearVote={handleClearVote}
              user={user}
              goToAdmin={goToAdmin}
              logout={logout}
            />
          </main>
        ))}
    </>
  );
}

export default VotingPage;
