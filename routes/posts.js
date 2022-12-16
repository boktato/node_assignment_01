const express = require("express");
const router = express.Router();

const posts = [
    {
        postId: 1,
        title: "첫번째 게시글",
        user: "닐리리야",
        createdAt: new Date(),
    },
];

// 게시글 작성 API
router.post("/posts", (req, res) => {});

// 게시글 조회 API
router.get("/posts", (req, res) => {});

// 게시글 상세 조회 API
router.get("/posts/:_postId", (req, res) => {});

// 게시글 상세 수정 API
router.put("/posts/:_postId", (req, res) => {});

// 게시글 상세 삭제 API
router.delete("/posts/:_postId", (req, res) => {});

module.exports = router;
