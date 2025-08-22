const { io } = require("socket.io-client");

const socket = io("wss://datahub-4d079600.sesam.cloud", {
  path: "/ws/",
  extraHeaders: {
    Authorization: `Bearer  ${process.env.SESAM_API_KEY}`,
  },
});

socket.on("connect", () => {
  console.log("✅ Connected as", socket.id);
});

socket.onAny((event, ...args) => {
  console.log("📨 Event:", event, args);
});

socket.on("connect_error", (err) => {
  console.error("❌ Connect error:", err);
});
