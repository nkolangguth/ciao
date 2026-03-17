import CallsScreen from "./screens/CallsScreen"
import TutorsScreen from "./screens/TutorsScreen"
import ProfileScreen from "./screens/ProfileScreen"
import { useState } from "react"

function App() {
  const [activeTab, setActiveTab] = useState<"calls" | "tutors" | "profile">(
    "calls"
  )

  return (
    <div>
      {activeTab === "calls" && <CallsScreen />}
      {activeTab === "tutors" && <TutorsScreen />}
      {activeTab === "profile" && <ProfileScreen />}

      <nav
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid #eee",
          padding: "12px",
          background: "white",
        }}
      >
        <button onClick={() => setActiveTab("calls")}>Calls</button>
        <button onClick={() => setActiveTab("tutors")}>Tutors</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
      </nav>
    </div>
  )
}

export default App