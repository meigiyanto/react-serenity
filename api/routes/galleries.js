import express from "express";
import {
  addGallery,
  deleteGallery,
  getGallery,
  getGalleries,
  updateGallery,
} from "../controllers/gallery.js";

const router = express.Router();

router.get("/", getGalleries);
router.get("/:id", getGallery);
router.post("/", addGallery);
router.delete("/:id", deleteGallery);
router.put("/:id", updateGallery);

export default router;
