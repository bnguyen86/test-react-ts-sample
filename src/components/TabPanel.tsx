import { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import type { Tab as TabType } from "./types";

type TabPanelProps = {
  tabs: TabType[];
}

export default function TabPanel({ tabs }: TabPanelProps) {
  const [value, setValue] = useState(4);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsNodes = tabs.map((tab, index) => {
    return <Tab label={tab.label} key={index} />
  })

  const tabContents = tabs.map((tab, index) => {
    return <div key={index} hidden={value !== index} style={{ flex: 1 }}>
      {tab.contents}
    </div>
  });

  return (
    <Box sx={{ width: '100%', flex: '1', overflow: 'hidden'}}>
      <Box sx={{ margin: '1rem', display: 'flex', flexDirection: 'column', height: '100%'}}> 
        <Tabs value={value} onChange={handleChange} aria-label="Window Tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {tabsNodes}
        </Tabs>
        <Box sx={{flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column'}}>
          {tabContents}
        </Box>
      </Box>
    </Box>
  );
}