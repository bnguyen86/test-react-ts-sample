import GroupListData from "./GroupListData";
import GroupListFilters from "./GroupListFilters";

export default function GroupList() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <GroupListData/>
            <GroupListFilters/>
        </div>
    );
}