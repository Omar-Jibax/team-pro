const express = require("express")
const app = express();
const errorHandler = require("./utils/errorHandler")
const roleRoute = require("./src/router/roleRoute")
const userRoute = require("./src/router/userRoute")
const skillRoute = require("./src/router/skillRoute")
const userSkillRoute = require("./src/router/userSkillRoute")
const userInterestRoute = require("./src/router/userInterestRoute")
const userSocialLinkRoute = require("./src/router/userSocialLinkRoute")
const connectionRoute = require("./src/router/connectionRoute")
app.use(express.json())
app.use('/api/roles', roleRoute)
app.use('/api/users', userRoute)
app.use('/api/skills', skillRoute)
app.use('/api/user-skills', userSkillRoute)
app.use('/api/user-interests', userInterestRoute)
app.use('/api/user-social-links', userSocialLinkRoute)
app.use('/api/connections', connectionRoute)

//Global error handler
app.use(errorHandler)

module.exports = app;


