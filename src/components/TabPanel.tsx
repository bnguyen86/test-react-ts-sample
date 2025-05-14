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
    return <div key={index} hidden={value !== index}>
      {tab.contents}
    </div>
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ margin: '1rem' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Window Tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {tabsNodes}
        </Tabs>
        <Box sx={{flex: 1}}>
          {tabContents}
        </Box>
      </Box>
    </Box>
  );
}