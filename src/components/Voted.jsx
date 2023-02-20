import "./style/Voted.css";

function Voted({ votedForParty, handleClearVote, user, goToAdmin, logout }) {
  return (
    <div className="voted">
      <p>Thanks for Voting. You voted for {votedForParty.name}</p>
      <p>You can still change your vote or log out</p>
      <button onClick={handleClearVote}>Change Vote</button>
      <button onClick={logout}>Logout</button>
      {user.type === "admin" && (
        <>
          <p>
            You can also visit the admin page to see data about parties and
            users
          </p>
          <button onClick={goToAdmin}>Admin Page</button>
        </>
      )}
    </div>
  );
}

export default Voted;
