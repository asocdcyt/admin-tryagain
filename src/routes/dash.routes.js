import { Router } from 'express';
import * as dashCtrl from '../controllers/dash.controller';
import { isAuthenticated } from "../helpers/auth";

const router = Router();

router.get('/data', isAuthenticated, dashCtrl.data);

router.get('/data/view/:id', isAuthenticated, dashCtrl.view);

router.get('/data/email/:id', isAuthenticated, dashCtrl.email);

router.get('/data/edit/:id', isAuthenticated, dashCtrl.edit);

router.put('/data/edit/:id', isAuthenticated, dashCtrl.editUpdate);

router.get("/data/delete/:id", isAuthenticated, dashCtrl.deleteNoteGET);

router.delete("/data/delete/:id", isAuthenticated, dashCtrl.deleteNote);

export default router;