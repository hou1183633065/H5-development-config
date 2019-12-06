class UserSystem {
  userAgent = navigator.userAgent.toLowerCase();
  constructor(firstProp) {
    this.firstProp = firstProp;
  }
}
let new_system = new UserSystem();
console.log(new_system);

export default {
  running: "",
  system: "",
  hostname: location.hostname,
  port: location.port,
  href: location.href,
  origin: location.origin,
  protocol: location.protocol.replace(":", ""),
  UA: "userAgent",
  tools: ""
};
