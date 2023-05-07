const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    console.log(newUser);
    
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("TESTING INSIDE LOGGING ROUTE");
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      console.log("USER FAILED");
      res.status(400).json({ message: "No user with that username!" });
      return;
    }
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      console.log("password failed")
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user: user, message: "You are now logged in!" });
      console.log(req.session.loggedIn)
    });
    
  } catch (err) { console.log("Catch TEST53")
    res.status(400).json({ message: "no user account found" });
  }
});

router.post('/logout', (req, res) => {
  console.log("test");
  console.log(req.session.loggedIn)
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;