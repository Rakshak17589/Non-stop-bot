const axios = require('axios');

module.exports = {
  config: {
    name: "antispam",
    version: "1.0",
    author: "Samuel Kâñèñgeè",
    countDown: 5,
    role: 0,
    shortDescription: "ban user for Spamming",
    longDescription: "ban user for Spamming then Auto unban users",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, global }) {
    const num = 5; // number of times spam gets banned -1, for example 5 times 6 times will get banned
    const timee = 60; // During `timee` spam `num` times will be banned

    return api.sendMessage(`╔════ஜ۩۞۩ஜ═══╗\n\nautomatically ban users if spam ${num} times\ntime : ${timee}s\n\n╚════ஜ۩۞۩ஜ═══╝`, event.threadID, event.messageID);
  },
  handleEvent: async function ({ Users, Threads, api, event, global }) {
    let { senderID, messageID, threadID } = event;
    var datathread = (await Threads.getData(event.threadID)).threadInfo;

    if (!global.client.autoban) global.client.autoban = {};
if (!global.client.autoban[senderID]) {
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
    }

    const threadSetting = global.data.threadData.get(threadID) || {};
    const prefix = threadSetting.PREFIX || global.config.PREFIX;
    if (!event.body || event.body.indexOf(prefix) != 0) return;

    if (global.client.autoban[senderID].timeStart + timee * 1000 <= Date.now()) {
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
    } else {
      global.client.autoban[senderID].number++;
      if (global.client.autoban[senderID].number >= num) {
        var namethread = datathread.threadName;
        const moment = require("moment-timezone");
        const timeDate = moment.tz("Asia/Dhaka").format("DD/MM/YYYY HH:mm:ss");
        let dataUser = await Users.getData(senderID) || {};
        let data = dataUser.data || {};
        if (data && data.banned == true) return;
        data.banned = true;
        data.reason = `╔════ஜ۩۞۩ஜ═══╗\n\nspam bot ${num} times/${timee}s\n\n╚════ஜ۩۞۩ஜ═══╝` || null;
        data.dateAdded = timeDate;
        await Users.setData(senderID, { data });
        global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
        global.client.autoban[senderID] = {
          timeStart: Date.now(),
          number: 0
        };
        api.sendMessage(
          senderID + " \nname : " + dataUser.name + `╔════ஜ۩۞۩ஜ═══╗\n\nreason : spam bot ${num} times\nautomatically unban after ${timee} seconds\n\nreport sent to admins\n\n╚════ஜ۩۞۩ஜ═══╝`,
          threadID,() => {
            var idad = global.config.ADMINBOT;
            for (let ad of idad) {
              api.sendMessage(
                `╔════ஜ۩۞۩ஜ═══╗\n\nspam ban notification\n\nspam offenders ${num}/${timee}s\nname: ${dataUser.name} \nuser id: ${senderID}\ngroup ID: ${threadID} \ngroup name: ${namethread} \ntime: ${timeDate}\n\n╚════ஜ۩۞۩ஜ═══╝`,
                ad
              );
            }
          }
        );
      }
    }
  }
};
