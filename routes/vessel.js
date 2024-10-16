import express from 'express';
import { fetchAllVesselData } from '../firebase/firebaseMethods';

const router = express.Router();

// POST request to suggest a reroute for vessels
router.post('/', (req, res) => {
  const { vesselId, newRoute } = req.body;
  // Logic to handle reroute recommendation
  const data = fetchAllVesselData();
  res.json(data);
});

router.post('/hi', (req, res) => {
  const { vesselId, newRoute } = req.body;
  // Logic to handle reroute recommendation
  const reply = {
    message: foo(vesselId),
    message2: foo(newRoute),
  }
  res.json(reply);
});

export default router;
