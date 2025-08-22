const { io } = require("socket.io-client");

const socket = io("wss://datahub-4d079600.sesam.cloud", {
  path: "/ws/",
  extraHeaders: {
    Authorization: `Bearer  eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTU4NTc2NjguMzY0MTgyMiwiZXhwIjoxNzU1ODcyMDY4LjM2NDE4MjIsInVzZXJfaWQiOiIzMDMwM2E4OS1lZjE3LTRlZTgtOThiYS03ZTEyMWM5M2YxNGIiLCJ1c2VyX3Byb2ZpbGUiOnsiZW1haWwiOiJzaGltc2hvbi56YWNrZW5AYm91dmV0Lm5vIiwibmFtZSI6IlNoaW1zaG9uIFphY2tlbiIsInBpY3R1cmUiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZS9waG90by8kdmFsdWUifSwidXNlcl9wcmluY2lwYWwiOiJlbWFpbDpzaGltc2hvbi56YWNrZW5AYm91dmV0Lm5vIiwicHJpbmNpcGFscyI6eyI0ZDA3OTYwMC1jYzRhLTQwNjQtOWIwMC1lNzY5NGVlYWU4OWMiOlsiZ3JvdXA6QWRtaW4iXX19.Y3oVxaCEEPvp115m1Dl4FWvDjYMx3JinedE74ZW2UsEn_3di3AhcQ5vZZGT3NWKcM-fmsRaHg4XrngHgxNG8rjgBuIoZRywDaGaUs54spJNxeDMx68kEDWwYgNAJeypIup5rN8LFjz4YcG1bDFm_jvhSTPRS1G5zZ0ZC9VhRA97qlNL9MPUQIhY3716ZT7dYCpZB0OPtepz6nwlWlJWcfVIQxgajHTXImEcd5jYtsf9xAbheOxKTGpZWNqx8IRrkMsbRDEW_KXGxAfkYHHukzIgEJ0tX1xOAfsVyYtfYb-Mf_NCSQbqHWQ11NudLQ2E2bgAmW3daksfcVsO8KCFmZg`,
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
