/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://root123:PUQNOOQZddfaqAkA@cluster0.t79ap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}
