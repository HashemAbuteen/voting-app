import { useState } from "react";

function VotingPage({ user, onLogout }) {
  const [selectedParty, setSelectedParty] = useState(null);

  const handlePartySelection = (event) => {
    setSelectedParty(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>
          Welcome, {user.name} ({user.type})
        </h1>
        <button onClick={() => onLogout()}>Logout</button>
      </header>
      <main>
        <h2>Select your preferred political party:</h2>
        <form>
          <label>
            <input
              type="radio"
              name="party"
              value="partyA"
              onChange={handlePartySelection}
            />
            Party A
          </label>
          <label>
            <input
              type="radio"
              name="party"
              value="partyB"
              onChange={handlePartySelection}
            />
            Party B
          </label>
          <label>
            <input
              type="radio"
              name="party"
              value="partyC"
              onChange={handlePartySelection}
            />
            Party C
          </label>
          <label>
            <input
              type="radio"
              name="party"
              value="partyD"
              onChange={handlePartySelection}
            />
            Party D
          </label>
        </form>
        <p>You have selected: {selectedParty}</p>
      </main>
    </div>
  );
}

export default VotingPage;
