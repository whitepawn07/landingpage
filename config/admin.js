module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1ef80bb5c5595aa0ff79feff42013684'),
  },
});
