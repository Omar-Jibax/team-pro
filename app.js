const express = require("express");
const app = express();
const errorHandler = require("./utils/errorHandler")

// Existing routes
const roleRoute = require("./src/router/roleRoute")
const userRoute = require("./src/router/userRoute")
const skillRoute = require("./src/router/skillRoute")
const userSkillRoute = require("./src/router/userSkillRoute")
const userInterestRoute = require("./src/router/userInterestRoute")
const userSocialLinkRoute = require("./src/router/userSocialLinkRoute")
const connectionRoute = require("./src/router/connectionRoute")
const projectSkill = require("./src/router/projectSkill");
const projectInvitation = require("./src/router/projectInvitation");

// New routes
const projectRoutes = require("./src/router/projectRoutes");
const projectMemberRoutes = require("./src/router/projectMemberRoutes");

app.use(express.json())

// Existing
app.use('/api/roles', roleRoute)
app.use('/api/users', userRoute)
app.use('/api/skills', skillRoute)
app.use('/api/user-skills', userSkillRoute)
app.use('/api/user-interests', userInterestRoute)
app.use('/api/user-social-links', userSocialLinkRoute)
app.use('/api/connections', connectionRoute)
app.use('/api/project-skills', projectSkill);
app.use("/api/project-invitations", projectInvitation);

// New routes
app.use("/api/projects", projectRoutes);
app.use("/api/project-members", projectMemberRoutes);

// Global error handler
app.use(errorHandler)

module.exports = app;
