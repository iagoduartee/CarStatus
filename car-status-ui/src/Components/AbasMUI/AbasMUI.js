import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BuscarTodasManutencoes from '../ManutencoesComponents/BuscarTodasManutencoes/BuscarTodasManutencoes';
import BuscarManutencoesPorMecanico from '../ManutencoesComponents/BuscarManutencoesPorMecanico/BuscarManutencoesPorMecanico';
import BuscarManutencoesPorId from '../ManutencoesComponents/BuscarManutencoesPorId/BuscarManutencoesPorId';
import { useState } from 'react';
import ModalDetalhes from '../ModalDetalhes/ModalDetalhes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [manutencaoModal, setManutencaoModal] = useState(null);

  const handleOpenModal = (manutencao) => {
    setManutencaoModal(manutencao);
    setOpenModal(true);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {
        manutencaoModal && 
        <ModalDetalhes detalhes={manutencaoModal} open={openModal} handleClose={() => setOpenModal(false)}/>
      }
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Todas" {...a11yProps(0)} />
          <Tab label="Mecânico" {...a11yProps(1)} />
          <Tab label="Código" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BuscarTodasManutencoes modal={handleOpenModal}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BuscarManutencoesPorMecanico/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BuscarManutencoesPorId/>
      </TabPanel>
    </Box>
  );
}
