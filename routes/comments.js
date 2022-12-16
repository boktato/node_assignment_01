const express = require("express");
const router = express.Router();

// 댓글 생성 API
router.post("/comments/:_postId", (req, res) => {});

// 댓글 목록 조회 API
router.get("/comments/:_postId", (req, res) => {});

// 댓글 수정 API
router.put("/comments/:_commentId", (req, res) => {});

// 댓글 삭제 API
router.delete("/comments/:_commentId", (req, res) => {});
