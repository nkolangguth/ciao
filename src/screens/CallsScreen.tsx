import Icon from "../components/Icon/Icon";
import Avatar from "../components/Avatar/Avatar";
import juliaAvatar from "../assets/Julia-profile.png";
import IconButton from "../components/IconButton/IconButton";

function CallsScreen() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Calls</h1>
            <Icon name="phone-fill" size={24} color="var(--color-semantic-call)" />
            <Avatar src={juliaAvatar} alt="Julia" />
            <IconButton
                icon="phone-fill"
                variant="call"
                onClick={() => console.log("call")}
                aria-label="Start call"
            />

            <IconButton
                icon="information-line"
                variant="info"
                onClick={() => console.log("info")}
                aria-label="View details"
            />
        </div>
    );
}

export default CallsScreen