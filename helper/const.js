const URL = Object.freeze({
    GRAPHQL: "https://oasis-bot-test-deploy.herokuapp.com/graphql",
    NEW_PROJECT: "https://soil-app-front-p7kor7uzy-msaratzidis-gmailcom.vercel.app/form"
})

const GRAPHQL_ERROR = Object.freeze({
    KEY_ERROR: "Key Error."
})

const SKILL_STATE = Object.freeze({
    WAITING: "waiting",
    REJECTED: "rejected",
    APPROVED: "approved"
})

const LINK = Object.freeze({
    SOIL: "https://www.Soil.xyz",
    PROJECT: "https://www.soil.xyz/project/%s",
    PROJECT_GATEWAY: "https://www.soil.xyz/project/",
    USER: "https://www.soil.xyz/profile/%s/",
    SKILL: "https://www.soil.xyz/member/%s/",
    ONBOARD: "https://www.soil.xyz/onboard/%s/",
    ENDORSEMENTS: "https://www.soil.xyz/member/%s/endorsements/",
    CLAIM_ENDORSEMENT: "https://www.soil.xyz/endorsment/%s/"
})

const CONTENT = Object.freeze({
    ONBOARD: "Say hi 👋 to your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nIn order for the perfect project to find you ❤️ - we've made a quick & easy onboarding flow.\n\nClick 👇\n\n🔗Link to [onboarding flow](%(onboardLink)s).",
    INVITE_DM: "Hi - you're receiving this message because \`%(inviterName)s\` wanted you to join in on the fun.\n\nMy name is Soil 🌱, your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nIn order for the perfect project to find you ❤️ - we've made a quick & easy onboarding flow.\n\nClick 👇\n\n🔗Link to onboarding flow: %(onboardLink)s.",
    INVITE_DM_FAIL: "Hello <@%(inviteeId)s>! <@%(inviterId)s> just invited you to join Soil 🌱 \n\n🔗You can onboard yourself here: %(onboardLink)s.",
    
    ENDORSE_NEW_MEMBER_CASE_ENDORSER_REPLY: "By endorsing other community members, you increase their chance of finding magical opportunities✨.\n\nIn other words, you're awesome. On behalf of \`%(endorseeName)s\`, a heartfelt thank you 🙏 wagmi!\n\nWhile you're at it, feel free to check out your own [endorsements](%(endorserEndorsementLink)s) .",
    ENDORSE_OLD_MEMBER_CASE_ENDORSER_REPLY: "On behalf of \`%(endorseeName)s\`, a heartfelt thank you - this is how wagmi ❤️",

    
    ENDORSE_NEW_MEMBER_CASE_ENDORSEE_DM: `Looks like this is your first time using Soil 🌱 , \`%(endorseeName)s\`! Allow us to take this opportunity to welcome 👋  you to Soil 🌱, your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nWithout you knowing, someting amazing just happened. \`%(endorserName)s\` just endorsed your for \`%(skillName)s\` 🤩\n\nGo fill out your profile so you can claim your endorsement! %(onboardLink)s\n\nOr if you'd like to learn more about Soil 🌱, go to ${LINK.SOIL} !`,
    ENDORSE_NEW_MEMBER_CASE_ENDORSEE_DM_FAIL: `Looks like this is your first time using Soil 🌱 , <@%(endorseeId)s>! Allow us to take this opportunity to welcome 👋  you to Soil 🌱, your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nWithout you knowing, someting amazing just happened. <@%(endorserId)s> just endorsed your for \`%(skillName)s\` 🤩\n\nGo fill out your profile so you can claim your endorsement! %(onboardLink)s\n\nOr if you'd like to learn more about Soil 🌱, go to ${LINK.SOIL} !`,
    ENDORSE_OLD_MEMBER_CASE_ENDORSEE_DM: "Your skills are getting noticed, %(endorseeName)s! \`%(endorserName)s\` just endorsed you for \`%(skillName)s\`\n\nClaim your endorsements here: %(claimEndorsementLink)s !",
    ENDORSE_OLD_MEMBER_CASE_ENDORSEE_DM_FAIL: "Your skills are getting noticed, <@%(endorseeId)s>! <@%(endorserId)s> just endorsed you for \`%(skillName)s\`\n\nClaim your endorsements here: %(claimEndorsementLink)s !",
    
    ENDORSE_NEW_MEMBER_CASE_ENDORSEE_DM_UNVERIFIED_SKILL: `Looks like this is your first time using Soil 🌱 , \`%(endorseeName)s\`! Allow us to take this opportunity to welcome 👋  you to Soil 🌱, your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nWithout you knowing, someting amazing just happened. \`%(endorserName)s\` just endorsed your for **unverified** \`%(skillName)s\` 🤩\n\nGo fill out your profile so you can claim your endorsement! %(onboardLink)s\n\nOr if you'd like to learn more about Soil 🌱, go to ${LINK.SOIL} !`,
    ENDORSE_NEW_MEMBER_CASE_ENDORSEE_DM_FAIL_UNVERIFIED_SKILL: `Looks like this is your first time using Soil 🌱 , <@%(endorseeId)s>! Allow us to take this opportunity to welcome 👋  you to Soil 🌱, your magic ✨, AI-driven bot that helps you find & be found 🔎  for opportunities to collaborate, learn & earn across the DAO.\n\nWithout you knowing, someting amazing just happened. <@%(endorserId)s> just endorsed your for **unverified** \`%(skillName)s\` 🤩\n\nGo fill out your profile so you can claim your endorsement! %(onboardLink)s\n\nOr if you'd like to learn more about Soil 🌱, go to ${LINK.SOIL} !`,
    ENDORSE_OLD_MEMBER_CASE_ENDORSEE_DM_UNVERIFIED_SKILL: "Your skills are getting noticed, %(endorseeName)s! \`%(endorserName)s\` just endorsed you for **unverified** \`%(skillName)s\`\n\nClaim your endorsements here: %(claimEndorsementLink)s !",
    ENDORSE_OLD_MEMBER_CASE_ENDORSEE_DM_FAIL_UNVERIFIED_SKILL: "Your skills are getting noticed, <@%(endorseeId)s>! <@%(endorserId)s> just endorsed you for **unverified** \`%(skillName)s\`\n\nClaim your endorsements here: %(claimEndorsementLink)s !"

})

module.exports = { URL, GRAPHQL_ERROR, SKILL_STATE, LINK, CONTENT }