const isProduction = process.env.NODE_ENV === "production" ? true : false;

export default {
  env: process.env.NODE_ENV,
  isProduction
};
