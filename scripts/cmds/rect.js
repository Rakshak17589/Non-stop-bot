module.exports = {
config: {
name: "autoreact",
version: "1.0",
author: "tero bau rko",
countDown: 5,
role: 0,
shortDescription: "",
longDescription: "",
category: "dont know ",
},
onStart: async function (){},
onChat: async function ({ event ,api}) {
if (event.body.toLowerCase().indexOf("i loveyou") !== -1) return api.setMessageReaction("😙", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("himal") !== -1) return api.setMessageReaction("👑", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("rko") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("RKO") !== -1) return api.setMessageReaction("👑", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("😢") !== -1) return api.setMessageReaction("😢", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("Himal") !== -1) return api.setMessageReaction("💝", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("good afternoon") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("good evening") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("wow") !== -1) return api.setMessageReaction("☺️", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("voot") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("RKO BRO") !== -1) return api.setMessageReaction("💝", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("maya") !== -1) return api.setMessageReaction("💝", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("love you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("god") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("pending") !== -1) return api.setMessageReaction("⏳", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("haha") !== -1) return api.setMessageReaction("😂", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("haso ") !== -1) return api.setMessageReaction("😂", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("😏") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("ramro") !== -1) return api.setMessageReaction("💝", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("fuck you") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("beautiful") !== -1) return api.setMessageReaction("💝", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("kid") !== -1) return api.setMessageReaction("👧", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("i hate you") !== -1) return api.setMessageReaction("😞", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("useless") !== -1) return api.setMessageReaction("😓", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("omg") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("shoti") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("dami") !== -1) return api.setMessageReaction("❣️", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("miss you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("i miss you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("sad") !== -1) return api.setMessageReaction("😔", event.messageID,event.threadID)

}
};
