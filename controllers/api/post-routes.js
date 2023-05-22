const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/",async (req, res) => {
  try {
    const allPost = await Post.findAll({});
    res.status(200).json(allPost);
  } catch (err) {
    res.status(500).json(err);
  }

})
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({
      ...body,
      user_id: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end;
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const [affectedRows] = await Post.destroy( {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (affectedRows > 0) {
        res.status(200).end;
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;